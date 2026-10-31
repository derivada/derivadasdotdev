export interface ViewerInstance {
	mount(): void;
	pause(): void;
	resume(): void;
	dispose(): void;
}

interface Handle {
	create: () => ViewerInstance;
	instance?: ViewerInstance;
	lastVisibleAt: number;
	intersecting: boolean;
}

// MeshViewer instances render on demand (idle cost is ~one frame, not a
// continuous loop — see MeshViewer.astro), so the real constraint here is
// just the number of live WebGL contexts, not per-frame cost. Pages on this
// site can legitimately need most of a 2x7 results grid + a few extra
// viewers visible at once, so the cap needs enough headroom for that (plus
// the always-on ThreeDLetter logo) rather than the much lower number that
// made sense when every instance rendered continuously.
const MAX_CONCURRENT_VIEWERS = 24;

const handles = new Map<Element, Handle>();

function enforceCapBeforeCreating() {
	const live = [...handles.values()].filter((h) => h.instance);
	if (live.length < MAX_CONCURRENT_VIEWERS) return;

	// Prefer evicting a non-intersecting instance (truly off-screen), but if
	// every live instance is currently visible (e.g. a wide grid all in
	// view at once), fall back to evicting the least-recently-visible one
	// anyway — a hard cap must never be silently exceeded, since going over
	// it is what exhausts the browser's WebGL context budget and makes
	// meshes fail to render at all.
	const nonIntersecting = live.filter((h) => !h.intersecting);
	const pool = nonIntersecting.length > 0 ? nonIntersecting : live;
	const victim = pool.sort((a, b) => a.lastVisibleAt - b.lastVisibleAt)[0];
	if (victim?.instance) {
		victim.instance.dispose();
		victim.instance = undefined;
	}
}

function activate(handle: Handle) {
	if (!handle.instance) {
		enforceCapBeforeCreating();
		handle.instance = handle.create();
		handle.instance.mount();
	} else {
		handle.instance.resume();
	}
}

let io: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
	if (io) return io;
	io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const handle = handles.get(entry.target);
				if (!handle) continue;
				handle.intersecting = entry.isIntersecting;
				if (entry.isIntersecting) {
					handle.lastVisibleAt = performance.now();
					activate(handle);
				} else if (handle.instance) {
					handle.instance.pause();
				}
			}
		},
		{ rootMargin: '200px 0px', threshold: 0.01 },
	);
	return io;
}

export function registerViewer(container: Element, create: () => ViewerInstance) {
	const handle: Handle = { create, lastVisibleAt: 0, intersecting: false };
	handles.set(container, handle);
	getObserver().observe(container);
}

export function unregisterViewer(container: Element) {
	const handle = handles.get(container);
	handle?.instance?.dispose();
	handles.delete(container);
	io?.unobserve(container);
}

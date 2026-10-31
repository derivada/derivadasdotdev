export interface ParsedMesh {
	positions: Float32Array;
	indices: Uint32Array;
}

/**
 * Parses ASCII OFF/NOFF/COFF-family mesh text into flat typed arrays ready
 * for a THREE.BufferGeometry. Only positions are extracted — vertex lines
 * may carry extra tokens (NOFF's per-vertex normals, COFF's per-vertex
 * color) which are ignored; normals are always recomputed downstream via
 * geometry.computeVertexNormals() instead, since the source pipelines that
 * produced these files don't agree on normal convention/scale.
 */
export function parseOFF(text: string): ParsedMesh {
	const lines = text.split('\n');
	let cursor = 0;

	const nextLine = (): string => {
		while (cursor < lines.length) {
			const line = lines[cursor++].trim();
			if (line && !line.startsWith('#')) return line;
		}
		throw new Error('parseOFF: unexpected end of file');
	};

	nextLine(); // header keyword (OFF / NOFF / COFF / ...) — not otherwise used
	const [numVerts, numFaces] = nextLine().split(/\s+/).map(Number);

	const positions = new Float32Array(numVerts * 3);
	for (let v = 0; v < numVerts; v++) {
		const tokens = nextLine().split(/\s+/);
		positions[v * 3] = parseFloat(tokens[0]);
		positions[v * 3 + 1] = parseFloat(tokens[1]);
		positions[v * 3 + 2] = parseFloat(tokens[2]);
	}

	const triIndices: number[] = [];
	for (let f = 0; f < numFaces; f++) {
		const tokens = nextLine().split(/\s+/).map(Number);
		const k = tokens[0];
		// Fan-triangulate defensively; every face sampled across this
		// dataset is a triangle (k === 3), but this handles n-gons too.
		for (let j = 1; j < k - 1; j++) {
			triIndices.push(tokens[1], tokens[1 + j], tokens[2 + j]);
		}
	}

	return { positions, indices: Uint32Array.from(triIndices) };
}

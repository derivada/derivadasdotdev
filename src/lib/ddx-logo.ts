const PARTIAL_SHAPE = [
	'    11111       ',
	'   11111111     ',
	'  111   1111    ',
	'  11      111   ',
	'  11       111   ',
	'   11      111  ',
	'            11  ',
	'    11111   11  ',
	'   1111111 111  ',
	'  111    11111  ',
	'  11      1111  ',
	'  11      1111  ',
	'  11      111   ',
	'  111    1111   ',
	'  1111111111    ',
	'   1111111      ',
];

const X_SHAPE = [
	'                ',
	'                ',
	'                ',
	'                ',
	'                ',
	'                ',
	'  11111  11111  ',
	' 11111111111111 ',
	'11   1111    11',
	'11    111     11',
	'      111       ',
	'      111       ',
	'11    1111    11',
	'11   111111   11',
	' 11111111111111 ',
	'  11111  11111  ',
];

export function buildDdxLayout(): string[] {
	const width = 42;
	const emptyRow = ' '.repeat(width);
	const layout: string[] = [];

	for (let i = 0; i < 2; i += 1) layout.push(emptyRow);
	PARTIAL_SHAPE.forEach((row) => layout.push(' '.repeat(13) + row + ' '.repeat(13)));
	for (let i = 0; i < 3; i += 1) layout.push(emptyRow);
	layout.push(' '.repeat(6) + '1'.repeat(30) + ' '.repeat(6));
	layout.push(emptyRow);

	for (let i = 0; i < 16; i += 1) {
		layout.push(' '.repeat(4) + PARTIAL_SHAPE[i] + '  ' + X_SHAPE[i] + ' '.repeat(4));
	}

	while (layout.length < 42) layout.push(emptyRow);
	return layout;
}
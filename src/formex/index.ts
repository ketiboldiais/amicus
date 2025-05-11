/** An object representation of an integer. */
export class Integer {
	n: number;
	constructor(value: number) {
		this.n = Math.floor(value);
	}
}

/** Returns a new Integer. */
export function int(value: number) {
	return new Integer(value);
}


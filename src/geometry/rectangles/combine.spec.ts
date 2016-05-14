import {describe, expect, it} from 'jasmine';
import './Rectangle';
import './combine';
import './create';
import '../sets/EMPTY';

describe('geometry/rectangles/combine', () =>
{
	it('should throw an error if given `null`', () =>
	{
		expect(() => combine(null))
			.toThrowError();
	});
	it('should return `null` for an empty list', () =>
	{
		const actual = combine([]);
		expect(actual).toBe(null);
	});
	it('should return the empty set if only given an empty set', () =>
	{
		const actual = combine([EMPTY]);
		expect(actual).toEqual(EMPTY);
	});
	it('should return the empty set if only given a list including the empty set multiple times', () =>
	{
		const actual = combine([EMPTY, EMPTY, EMPTY]);
		expect(actual).toEqual(EMPTY);
	});
	describe('with a nonempty rectangle', () => {
		const A = create(0, 0, 10, 10);
		it('should return the only member for a singleton list', () =>
		{
			const actual = combine([A]);
			expect(actual).toEqual(A);
		});
		it('should return the only member for a list that includes it multipel times', () =>
		{
			const actual = combine([A, A, A]);
			expect(actual).toEqual(A);
		});
		it('should return the only nonempty member for a list with the empty set and a nonempty rectangle', () =>
		{
			const actual = combine([A, EMPTY]);
			expect(actual).toEqual(A);
		});
		describe('or multiple nonempty rectangles', () => {
			it('should return the area for nonoverlapping rectangles', () =>
			{
				const actual = combine([A, create(20, 20, 10, 10)]);
				expect(actual).toEqual(create(0, 0, 30, 30));
			});
			it('should return the area for nonoverlapping rectangles in other quadrants', () =>
			{
				const actual = combine([A, create(-10, 0, 10, 10), create(0, -10, 10, 10), create(-10, -10, 10, 10)]);
				expect(actual).toEqual(create(-10, -10, 20, 20));
			});
			it('should return the area for overlapping rectangles', () =>
			{
				const actual = combine([A, create(5, 5, 10, 10)]);
				expect(actual).toEqual(create(0, 0, 15, 15));
			});
			it('should return the largest rectangle if it includes the others', () =>
			{
				const actual = combine([A, create(0, 0, 1, 1), create(1, 1, 3, 2)]);
				expect(actual).toEqual(A);
			});
		});
	});
});

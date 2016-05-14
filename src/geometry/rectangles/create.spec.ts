import {describe, expect, it} from 'jasmine';
import {create} from './create';

describe('`geometry/rectangles/create`', () =>
{
	it('should throw an error if `x` is not a number', () =>
	{
		expect(() => create(NaN, 0, 10, 10)).toThrow();
	});
	it('should throw an error if `y` is not a number', () =>
	{
		expect(() => create(0, NaN, 10, 10)).toThrow();
	});
	it('should throw an error if `width` is not a number', () =>
	{
		expect(() => create(0, 0, NaN, 10)).toThrow();
	});
	it('should throw an error if `height` is not a number', () =>
	{
		expect(() => create(0, 0, 10, NaN)).toThrow();
	});
	it('should throw an error if `x` is `null`', () =>
	{
		expect(() => create(null, 0, 10, 10)).toThrow();
	});
	it('should throw an error if `y` is `null`', () =>
	{
		expect(() => create(0, null, 10, 10)).toThrow();
	});
	it('should throw an error if `width` is `null`', () =>
	{
		expect(() => create(0, 0, null, 10)).toThrow();
	});
	it('should throw an error if `height` is `null`', () =>
	{
		expect(() => create(0, 0, 10, null)).toThrow();
	});
	it('should throw an error if `width` is negative', () =>
	{
		expect(() => create(0, 0, -10, 10)).toThrow();
	});
	it('should return the empty set if `width` is zero', () =>
	{
		expect(create(0, 0, 0, 10).empty).toBe(true);
	});
	it('should return the empty set if `height` is zero', () =>
	{
		expect(create(0, 0, 10, 0).empty).toBe(true);
	});
	it('should return the empty set if both `width` and `height` are zero', () =>
	{
		expect(create(0, 0, 0, 0).empty).toBe(true);
	});
	describe('given a specific rectangle', () =>
	{
		const RECTANGLE = create(2, 3, 4, 5);
		const EXPECTED = {
			area: 20,
			bottom: 8,
			centerX: 4,
			centerY: 5.5,
			empty: false,
			hash: '[[2,3],[6,8]]',
			height: 5,
			left: 2,
			right: 6,
			top: 3,
			width: 4,
			x: 2,
			y: 3,
			x2: 6,
			y2: 8,
		};
		it('should have the expected values', () =>
		{
			expect(RECTANGLE).toEqual(EXPECTED);
		});
		/* tslint:disable:forin */
		for (let property in EXPECTED)
		/* tslint:enable:forin */
		{
			it('should throw an error if `' + property + '` is set', () =>
			{
				expect(() => RECTANGLE[property] = null).toThrow();
			});
		}
	});
});

import {describe, expect, it} from 'jasmine';
import './Rectangle';
import './contains';
import {create as createRectangle} from './create';
import '../points/ORIGIN';
import '../points/Point';
import {create as createPoint} from '../points/create';
import '../../sets/EMPTY';

describe('`geometry/rectangles/contains`', () =>
{
	const RECTANGLE = createRectangle(0, 0, 10, 10);
	const MEMBER = createPoint(5, 5);
	it('should throw an error if the rectangle is `null`', () =>
	{
		expect(() => contains(null, MEMBER)).toThrowError();
	});
	it('should throw an error if the point is `null`', () =>
	{
		expect(() => contains(RECTANGLE, null)).toThrowError();
	});
	it('should return `true` for a member', () =>
	{
		expect(contains(RECTANGLE, MEMBER)).toBe(true);
	});
	it('should return `true` for a member on the edge', () =>
	{
		expect(contains(RECTANGLE, ORIGIN)).toBe(true);
	});
	it('should return `false` for a nonmember', () =>
	{
		expect(contains(RECTANGLE, createPoint(-5, -5)).toBe(false);
	});
	it('should return `false` for a nonmember', () =>
	{
		expect(contains(RECTANGLE, createPoint(-5, -5)).toBe(false);
	});
	it('should return `false` for a nonmember within the right horizontal bounds', () =>
	{
		expect(contains(RECTANGLE, createPoint(5, -5)).toBe(false);
	});
	it('should return `false` for a nonmember within the right vertical bounds', () =>
	{
		expect(contains(RECTANGLE, createPoint(-5, 5)).toBe(false);
	});
	it('should return `false` for the empty set and the origin', () =>
	{
		expect(contains(EMPTY, ORIGIN).toBe(false);
	});
});
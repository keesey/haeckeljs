import {Builder as DOMBuilder} from '../Builder';
import './NAMESPACE';

export default class Builder extends DOMBuilder
{
	constructor(document: Document, element: Element);
	constructor(document: Document, localName: string);
	constructor(document: Document, a: Element | string)
	{
		super(document, typeof a === 'string' ? NAMESPACE : element, typeof a === 'string' ? a : undefined);
		if (this.uri !== NAMESPACE)
		{
			throw new ArgumentError('Not a valid SVG element.');
		}
	}
}

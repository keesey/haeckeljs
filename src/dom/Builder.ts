import {Attributes} from './Attributes';
import {Style} from './Style';
import {Builder as IBuilder} from '../Builder';

export default class Builder implements IBuilder<Element>
{
	private _parent: Builder;
	private children: Builder[] = [];
	private element: Element;
	private uri: string;
	constructor(document: Document, element: Element);
	constructor(document: Document, uri: string, localName: string);
	constructor(document: Document, name: string);
	constructor(private document: Document, a: Element | string, localName: string = null)
	{
		if (typeof a === 'string')
		{
			this.element = localName === null
				? document.createElement(<string> a)
				: document.createElementNS(<string> a, localName);
		}
		else
		{
			this.element = <Element> a;
		}
		this.uri = this.element.namespaceURI;
	}
	public attr(name: string, value: string): Builder;
	public attr(uri: string, localName: string, value: string): Builder;
	public attr(a: string, b: string, c: string = null): Builder
	{
		c === null
			? (this.uri ? this.element.setAttributeNS(this.uri, a, b) : this.element.setAttribute(a, b))
			: this.element.setAttributeNS(a, b, c);
		return this;
	}
	public attrs(uri: string, attrs: Attributes): Builder;
	public attrs(attrs: Attributes): Builder;
	public attrs(a: string | Attributes, attrs: Attributes = null): Builder
	{
		const uriGiven = typeof a === 'string';
		const uri = uriGiven ? <string> a : this.uri;
		if (!uriGiven)
		{
			attrs = <Attributes> a;
		}
		if (attrs)
		{
			/* tslint:disable:forin */
			for (let name in attrs)
			/* tslint:enable:forin */
			{
				uri
					? this.element.setAttribute(name, attrs[name])
					: this.element.setAttributeNS(uri, name, attrs[name]);
			}
		}
		return this;
	}
	public build(): Element
	{
		return this.element;
	}
	public child(uri: string, localName: string): Builder;
	public child(name: string): Builder;
	public child(a: string, localName: string = null): Builder
	{
		const uri = localName === null ? this.uri : a;
		if (localName === null)
		{
			localName = a;
		}
		const child = uri
			? new Builder(this.document, uri, localName)
			: new Builder(this.document, localName);
		child._parent = this;
		this.element.appendChild(child.element);
		this.children.push(child);
		return child;
	}
	public detach(): Builder
	{
		if (this.element.parentNode)
		{
			this.element.parentNode.removeChild(this.element);
			const index = this._parent.children.indexOf(this);
			this._parent.children.splice(index, 1);
			this._parent = null;
		}
		return this;
	}
	public parent(): Builder
	{
		return this._parent;
	}
	public reset(): Builder
	{
		// :TODO: Remove all attributes.
		this.children.forEach(child => child.detach());
		// :TODO: Remove text nodes.
		return this;
	}
	public text(data: string): Builder
	{
		this.element.appendChild(this.document.createTextNode(data));
		return this;
	}
}

import {Arc} from './Arc';
import {Builder as CoreBuilder} from '../core/Builder';
import {Builder as ExtSetBuilder} from '../extset/Builder';
import {Digraph} from './Digraph';
import {equal} from '../core/equal';
import {contains} from '../extset/contains';
import {forEach} from '../extset/forEach';
import {intersect} from '../extset/intersect';

export class Builder<T> implements CoreBuilder<Digraph<T>>
{
	private _arcs = new ExtSetBuilder<Arc<T>>();
	private _vertices = new ExtSetBuilder<T>();
	addArc(head: T, tail: T)
	{
		this._vertices.add(head, tail);
		this._arcs.add([ head, tail ]);
		return this;
	}
	addArcs(arcs: ExtSet<Arc<T>>)
	{
		forEach(arcs, arc => this.addArc(arc[0], arc[1]));
		return this;
	}
	addGraph(graph: Digraph<T>)
	{
		return this
			.addVertices(graph.vertices)
			.addArcs(graph.arcs);
	}
	addVertex(vertex: T)
	{
		this._vertices.add(vertex);
		return this;
	}
	addVertices(vertices: ExtSet<T>)
	{
		this._vertices.addSet(vertices);
		return this;
	}
	build(): Digraph<T>
	{
		const vertices = this._vertices.build();
		const arcs = this._arcs.build();
		return Object.freeze([ vertices, arcs ]);
	}
	buildArcs(): ExtSet<Arc<T>>
	{
		return this._arcs.build();
	}
	buildSubgraph(vertices: ExtSet<T>): Digraph<T>
	{
		vertices = intersect(vertices, this._vertices.build());
		const arcs = new ExtSetBuilder<T[]>();
		if (!vertices.empty)
		{
			forEach(this._arcs.build(), arc =>
			{
				if (contains(vertices, arc[0]) && contains(vertices, arc[1]))
				{
					arcs.add(arc);
				}
			});
		}
		return Object.freeze([ vertices, arcs.build() ]);
	}
	buildVertices(): ExtSet<T>
	{
		return this._vertices.build();
	}
	containsArc(arc: Arc<T>): boolean
	{
		return this._arcs.contains(arc);
	}
	containsVertex(vertex: T): boolean
	{
		return this._vertices.contains(vertex);
	}
	removeArc(head: T, tail: T)
	{
		this._arcs.remove([ head, tail ]);
		return this;
	}
	removeVertex(vertex: T)
	{
		if (this._vertices.contains(vertex))
		{
			this._vertices.remove(vertex);
			const arcs = this._arcs;
			const h = hash(vertex);
			forEach(arcs.build(), arc =>
			{
				if (h === hash(arc[0]) || h === hash(arc[1]))
				{
					arcs.remove(arc);
				}
			});
		}
		return this;
	}
	replaceVertex(oldVertex: T, newVertex: T)
	{
		if (equal(oldVertex, newVertex) || !this._vertices.contains(oldVertex))
		{
			return this;
		}
		if (this._vertices.contains(newVertex))
		{
			throw new Error('Graph already contains ' + newVertex + '.');
		}
		this._vertices.remove(oldVertex);
		this._vertices.add(newVertex);
		const arcs = this._arcs;
		const h = hash(oldVertex);
		forEach(arcs.build(), arc =>
		{
			const head = hash(arc[0]) === h;
			const tail = hash(arc[1]) === h;
			if (head || tail)
			{
				arcs.remove(arc);
				arcs.add([ head ? newVertex : arc[0], tail ? newVertex : arc[1] ]);
			}
		});
		return this;
	}
	reset()
	{
		this._arcs.reset();
		this._vertices.reset();
		return this;
	}
}

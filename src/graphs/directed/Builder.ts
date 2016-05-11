import {Arc} from './Arc';
import {Builder as CoreBuilder} from '../../Builder';
import {Graph} from './Graph';
import {Set} from '../../sets/extensional/Set';
import {Builder as SetBuilder} from '../../sets/extensional/Builder';
import {equal} from '../../equal';
import {contains} from '../../sets/extensional/contains';
import {forEach} from '../../sets/extensional/forEach';
import {hash} from '../../hash';
import {intersection} from '../../sets/extensional/intersection';

export class Builder<T> implements CoreBuilder<Graph<T>>
{
	private arcs = new SetBuilder<Arc<T>>();
	private vertices = new SetBuilder<T>();
	addArc(head: T, tail: T)
	{
		this.vertices.add(head, tail);
		this.arcs.add([ head, tail ]);
		return this;
	}
	addArcs(arcs: Set<Arc<T>>)
	{
		forEach(arcs, arc => this.addArc(arc[0], arc[1]));
		return this;
	}
	addGraph(graph: Graph<T>)
	{
		return this
			.addVertices(graph[0])
			.addArcs(graph[1]);
	}
	addVertex(vertex: T)
	{
		this.vertices.add(vertex);
		return this;
	}
	addVertices(vertices: Set<T>)
	{
		this.vertices.addSet(vertices);
		return this;
	}
	build(): Graph<T>
	{
		const vertices = this.vertices.build();
		const arcs = this.arcs.build();
		return Object.freeze<Graph<T>>([ vertices, arcs ]);
	}
	buildArcs(): Set<Arc<T>>
	{
		return this.arcs.build();
	}
	buildSubgraph(vertices: Set<T>): Graph<T>
	{
		vertices = intersection(vertices, this.vertices.build());
		const arcs = new SetBuilder<T[]>();
		if (!vertices.empty)
		{
			forEach(this.arcs.build(), (arc: Arc<T>) =>
			{
				if (contains(vertices, arc[0]) && contains(vertices, arc[1]))
				{
					arcs.add(arc);
				}
			});
		}
		return Object.freeze<Graph<T>>([ vertices, arcs.build() ]);
	}
	buildVertices(): Set<T>
	{
		return this.vertices.build();
	}
	containsArc(arc: Arc<T>): boolean
	{
		return this.arcs.contains(arc);
	}
	containsVertex(vertex: T): boolean
	{
		return this.vertices.contains(vertex);
	}
	removeArc(head: T, tail: T)
	{
		this.arcs.remove([ head, tail ]);
		return this;
	}
	removeVertex(vertex: T)
	{
		if (this.vertices.contains(vertex))
		{
			this.vertices.remove(vertex);
			const arcs = this.arcs;
			const h = hash(vertex);
			forEach(arcs.build(), (arc: Arc<T>) =>
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
		if (equal(oldVertex, newVertex) || !this.vertices.contains(oldVertex))
		{
			return this;
		}
		if (this.vertices.contains(newVertex))
		{
			throw new Error('Graph already contains ' + newVertex + '.');
		}
		this.vertices.remove(oldVertex);
		this.vertices.add(newVertex);
		const arcs = this.arcs;
		const h = hash(oldVertex);
		forEach(arcs.build(), (arc: Arc<T>) =>
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
		this.arcs.reset();
		this.vertices.reset();
		return this;
	}
}

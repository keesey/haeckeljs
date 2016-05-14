import './Arc';
import {Graph} from './Graph';
import {Builder as IBuilder} from '../../Builder';
import {equal} from '../../equal';
import {hash} from '../../hash';
import {Builder as SetBuilder} from '../../sets/extensional/Builder';
import {Set} from '../../sets/extensional/Set';
import {contains} from '../../sets/extensional/contains';
import {forEach} from '../../sets/extensional/forEach';
import {intersection} from '../../sets/extensional/intersection';

export default class Builder<T> implements IBuilder<Graph<T>>
{
	private arcs = new SetBuilder<Arc<T>>();
	private vertices = new SetBuilder<T>();
	public addArc(head: T, tail: T)
	{
		this.vertices.add(head, tail);
		this.arcs.add([ head, tail ]);
		return this;
	}
	public addArcs(arcs: Set<Arc<T>>)
	{
		forEach(arcs, arc => this.addArc(arc[0], arc[1]));
		return this;
	}
	public addGraph(graph: Graph<T>)
	{
		return this
			.addVertices(graph[0])
			.addArcs(graph[1]);
	}
	public addVertex(vertex: T)
	{
		this.vertices.add(vertex);
		return this;
	}
	public addVertices(vertices: Set<T>)
	{
		this.vertices.addSet(vertices);
		return this;
	}
	public build(): Graph<T>
	{
		const vertices = this.vertices.build();
		const arcs = this.arcs.build();
		return Object.freeze<Graph<T>>([ vertices, arcs ]);
	}
	public buildArcs(): Set<Arc<T>>
	{
		return this.arcs.build();
	}
	public buildSubgraph(vertices: Set<T>): Graph<T>
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
	public buildVertices(): Set<T>
	{
		return this.vertices.build();
	}
	public containsArc(arc: Arc<T>): boolean
	{
		return this.arcs.contains(arc);
	}
	public containsVertex(vertex: T): boolean
	{
		return this.vertices.contains(vertex);
	}
	public removeArc(head: T, tail: T)
	{
		this.arcs.remove([ head, tail ]);
		return this;
	}
	public removeVertex(vertex: T)
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
	public replaceVertex(oldVertex: T, newVertex: T)
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
	public reset()
	{
		this.arcs.reset();
		this.vertices.reset();
		return this;
	}
}

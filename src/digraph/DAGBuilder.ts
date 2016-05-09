import {Arc} from './Arc';
import {Builder as CoreBuilder} from '../core/Builder';
import {Digraph} from './Digraph';
import {Builder as DigraphBuilder} from './Builder';
import {EMPTY_DIGRAPH} from './EMPTY_DIGRAPH';
import {contains} from '../extset/contains';
import {forEach} from '../extset/forEach';
import {hash} from '../core/hash';
import {list} from '../extset/list';

export class Builder<T> implements CoreBuilder<Digraph<T>>
{
	private builder = new DigraphBuilder<T>();
	private closure: Digraph<T>;
	private reduction: Digraph<T>;
	public addArc(head: T, tail: T)
	{
		if (equal(head, tail))
		{
			throw new Error('Cannot add a loop to an acylcic graph: [' + head + ', ' + tail + '].');
		}
		const arc: Arc<T> = [ head, tail ];
		if (this.builder.containsArc(arc))
		{
			return this;
		}
		const reverseArc: Arc<T> = [ tail, head ];
		if (this.builder.containsArc(reverseArc))
		{
			throw new Error('Arc would introduce a cycle: [' + head + ', ' + tail + '].');
		}
		const closure = this.buildClosure();
		if (contains(closure[1], reverseArc))
		{
			throw new Error('Arc would introduce cycle: [' + head + ', ' + tail + '].');
		}
		this.closure = this.reduction = null;
		this.builder.addArc(head, tail);
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
			.addVertices(graph[0])
			.addArcs(graph[1]);
	}
	addVertex(vertex: T)
	{
		this.builder.addVertex(vertex);
		return this;
	}
	addVertices(vertices: ExtSet<T>)
	{
		this.builder.addVertices(vertices);
		return this;
	}
	adjacencyMatrix(vertices?: T[]): boolean[][]
	{
		if (!vertices)
		{
			vertices = list(this.buildVertices());
		}
		const n = vertices.length;
		const matrix: boolean[][] = new Array(n);
		if (n === 0)
		{
			return matrix;
		}
		const basicRow: boolean[] = new Array(n);
		for (let i = 0; i < n; ++i)
		{
			basicRow[i] = false;
		}
		const indices: { [hash: string]: number; } = {};
		for (let i = 0; i < n; ++i)
		{
			const vertex = vertices[i];
			matrix[i] = basicRow.concat();
			indices[hash(vertex)] = i;
		}
		forEach(this.buildArcs(), arc =>
		{
			const headIndex = indices[hash(arc[0])];
			const tailIndex = indices[hash(arc[1])];
			matrix[headIndex][tailIndex] = true;
		});
		return matrix;
	}
	build(): Digraph<T>
	{
		return this.builder.build();
	}
	buildArcs(): ExtSet<Arc<T>>
	{
		return this.builder.buildArcs();
	}
	buildClosure(): Digraph<T>
	{
		if (!this.closure)
		{
			const vertices = this.builder.buildVertices();
			if (vertices.empty)
			{
				return this.closure = EMPTY_DIGRAPH;
			}
			const n = vertices.size;
			const vertexList = list(vertices);
			const closureMatrix = this.adjacencyMatrix(vertexList);
			for (let k = 0; k < n; ++k)
			{
				for (let i = 0; i < n; ++i)
				{
					if (closureMatrix[i][k])
					{
						for (let j = 0; j < n; ++j)
						{
							closureMatrix[i][j] = (closureMatrix[i][j] || (closureMatrix[i][k] && closureMatrix[k][j]));
						}
					}
				}
			}
			const arcs = new ExtSetBuilder<Arc<T>>();
			for (let i = 0; i < n; ++i)
			{
				for (let j = 0; j < n; ++j)
				{
					if (closureMatrix[i][j])
					{
						arcs.add([ vertexList[i], vertexList[j] ]);
					}
				}
			}
			return Object.freeze([ vertices, arcs.build() ]);
		}
		return this.closure;
	}
	buildReduction(): Digraph<T>
	{
		if (!this.reduction)
		{
			const closure = this.buildClosure();
			if (closure.vertices.empty)
			{
				return this.reduction = EMPTY_DIGRAPH;
			}
			const arcs = new ExtSetBuilder<Arc<T>>();
			arcs.addSet(closure.arcs);
			forEach(closure.vertices, x =>
			{
				ext.each(closure.vertices, y =>
				{
					if (x !== y)
					{
						forEach(closure.vertices, z =>
						{
						  const arc: Arc<T> = [ x, z ];
							if (arcs.contains(arc) && arcs.contains([ x, y ]) && arcs.contains([ y, z ]))
							{
								arcs.remove(arc);
							}
						});
					}
				});
			});
			return Object.freeze([ closure.vertices, arcs.build() ]);
		}
		return this.reduction;
	}
	buildSubgraph(vertices: ExtSet<T>): Digraph<T>
	{
		return this.builder.buildSubgraph(vertices);
	}
	buildVertices(): ExtSet<T>
	{
		return this.builder.buildVertices();
	}
	containsArc(arc: Arc<T>): boolean
	{
		return this.builder.containsArc(arc);
	}
	containsVertex(vertex: T): boolean
	{
		return this.builder.containsVertex(vertex);
	}
	removeArc(head: T, tail: T)
	{
		this.closure = this.reduction = null;
		this.builder.removeArc(head, tail);
		return this;
	}
	removeVertex(vertex: T)
	{
		this.closure = this.reduction = null;
		this.builder.removeVertex(vertex);
		return this;
	}
	replaceVertex(oldVertex: T, newVertex: T)
	{
	    if (this.containsVertex(oldVertex))
	    {
			this.closure = this.reduction = null;
			this.builder.replaceVertex(oldVertex, newVertex);
		}
		return this;
	}
	reset()
	{
		this.closure = this.reduction = null;
		this.builder.reset();
		return this;
	}
}

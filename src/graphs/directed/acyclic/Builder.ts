import '../Arc';
import {Builder as GraphBuilder} from '../Builder';
import '../EMPTY';
import {Graph} from '../Graph';
import {Builder as IBuilder} from '../../../Builder';
import '../../../equal';
import '../../../hash';
import {Builder as SetBuilder} from '../../../sets/extensional/Builder';
import '../../../sets/extensional/Set';
import '../../../sets/extensional/contains';
import '../../../sets/extensional/forEach';
import '../../../sets/extensional/list';

export default class Builder<T> implements IBuilder<Graph<T>>
{
	private builder = new GraphBuilder<T>();
	private closure: Graph<T>;
	private reduction: Graph<T>;
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
		this.builder.addVertex(vertex);
		return this;
	}
	public addVertices(vertices: Set<T>)
	{
		this.builder.addVertices(vertices);
		return this;
	}
	public adjacencyMatrix(vertices?: T[]): boolean[][]
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
	public build(): Graph<T>
	{
		return this.builder.build();
	}
	public buildArcs(): Set<Arc<T>>
	{
		return this.builder.buildArcs();
	}
	public buildClosure(): Graph<T>
	{
		if (!this.closure)
		{
			const vertices = this.builder.buildVertices();
			if (vertices.empty)
			{
				return this.closure = EMPTY;
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
			const arcs = new SetBuilder<Arc<T>>();
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
			return Object.freeze<Graph<T>>([ vertices, arcs.build() ]);
		}
		return this.closure;
	}
	public buildReduction(): Graph<T>
	{
		if (!this.reduction)
		{
			const closure = this.buildClosure();
			if (closure[0].empty)
			{
				return this.reduction = EMPTY;
			}
			const arcs = new SetBuilder<Arc<T>>();
			arcs.addSet(closure[1]);
			forEach(closure[0], x =>
			{
				forEach(closure[0], y =>
				{
					if (x !== y)
					{
						forEach(closure[0], z =>
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
			return Object.freeze<Graph<T>>([ closure[0], arcs.build() ]);
		}
		return this.reduction;
	}
	public buildSubgraph(vertices: Set<T>): Graph<T>
	{
		return this.builder.buildSubgraph(vertices);
	}
	public buildVertices(): Set<T>
	{
		return this.builder.buildVertices();
	}
	public containsArc(arc: Arc<T>): boolean
	{
		return this.builder.containsArc(arc);
	}
	public containsVertex(vertex: T): boolean
	{
		return this.builder.containsVertex(vertex);
	}
	public removeArc(head: T, tail: T)
	{
		this.closure = this.reduction = null;
		this.builder.removeArc(head, tail);
		return this;
	}
	public removeVertex(vertex: T)
	{
		this.closure = this.reduction = null;
		this.builder.removeVertex(vertex);
		return this;
	}
	public replaceVertex(oldVertex: T, newVertex: T)
	{
		if (this.containsVertex(oldVertex))
		{
			this.closure = this.reduction = null;
			this.builder.replaceVertex(oldVertex, newVertex);
		}
		return this;
	}
	public reset()
	{
		this.closure = this.reduction = null;
		this.builder.reset();
		return this;
	}
}

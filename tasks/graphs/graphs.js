class Graph {
  constructor(V) {
    this.verticesInfo = Array.from(Array(V), () => new Array())
  }
  // Добавляет ребро между вершинами
  addEdge(a, b) {
    this.verticesInfo[a].push(b);
    this.verticesInfo[b].push(a);
  }
  // Получить смежные вершины для переданной вершины
  adjacent(v) {
    return this.verticesInfo[v];
  }
  // Получить вершины графа
  vartices() {
    return this.verticesInfo.map((e, i) => e = i);
  }
  // Получить количество вершин графа
  size() {
    return this.verticesInfo.length
  }
}
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(3, 4);


function dfs(v, mark, marks) {
  marks[v] = mark;
  let size = 1;
  for (const vv of graph.adjacent(v)) {
    if (marks[vv] === 0) {
      size += dfs(vv, mark, marks);
    }
  }
  return size;
}

function calcPaths(graph) {
  const marks = new Array(graph.size()).fill(0);
  let markSize = [0];
  for (let v = 0; v < graph.size(); v++) {
    if (marks[v] === 0) {
      const nextMark = markSize.length;
      const size = dfs(v, nextMark, marks);
      markSize.push(size);
    }
  }
  const answer = new Array(graph.size()).fill(0);
  for (let i = 0; i < graph.size(); i++) {
    answer[i] = markSize[marks[i]] - 1;
  }
  console.log("Сколько достижимо городов для каждого города: ", answer)
}
calcPaths(graph);

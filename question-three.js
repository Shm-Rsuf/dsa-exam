// Adjacency list

list = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.list[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.list[vertex2]) {
      this.addVertex(vertex2);
    }
    this.list[vertex1].add(vertex2);
    this.list[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.list[vertex1].delete(vertex2);
    this.list[vertex2].delete(vertex1);
  }
}

//time complexcity O(1)

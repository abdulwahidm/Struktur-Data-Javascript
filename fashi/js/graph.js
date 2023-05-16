function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,

    addNeighbor: function (node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes, 
    edges,

    addNode: function(key) {
      const newNodes = createNode(key);
      nodes.push(newNodes);
    },
    getNode: function(key) {
      return nodes.find(function(node) {
        return node.key === key;
      })
    }, 
    addEdges: function(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);

      if(!directed) {
        node2.addNeighbor(node1);
      }
    },
    print: function(){
      return nodes.map(function({key, neighbors}) {

        let result = key;
        if(neighbors.length) {
          result +=` => ${neighbors.map(function(neighbor) {
            return neighbor.key;
          }).join(' ')}`;
        }
        return result;
      }).join(`\n`);
    }
  } 
}

const graph = createGraph(true);
const nodes  = ['Ani', 'Banu', 'Cindy', 'Dina', 'Elisa', 'Fadli'];
nodes.forEach(function(node) {
  graph.addNode(node);
});


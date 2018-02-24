let training_data = [{
    inputs: [0, 0],
    outputs: [0]
  },
  {
    inputs: [0, 1],
    outputs: [1]
  },
  {
    inputs: [1, 0],
    outputs: [1]
  },
  {
    inputs: [1, 1],
    outputs: [0]
  }
];

let nn = new NeuralNetwork(2, 4, 1);

for (let i = 0; i < 5000; i++) {
    let data = Math.floor(Math.random() * training_data.length);
    nn.train(training_data[data].inputs, training_data[data].outputs);
}

console.log(nn.feedforward([1, 0]));
console.log(nn.feedforward([0, 1]));
console.log(nn.feedforward([0, 0]));
console.log(nn.feedforward([1, 1]));

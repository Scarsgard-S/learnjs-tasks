"use strict";

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let timeReadMap = new WeakMap();

timeReadMap.set(messages[0], "15:25");

// readMap.set(messages[0], new Date(2017, 1, 1));
"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
 
// Прочитано два сообщения
readMessages.add(messages[0]);
readMessages.add(messages[2]);

// Снова прочитано первое сообщение
readMessages.add(messages[0]);

alert(`Сообщение с индексом 0 прочитано?
* ${readMessages.has(messages[0])}`);
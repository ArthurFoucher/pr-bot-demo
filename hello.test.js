"use strict";

var test = require("tape");
var funcs = require("./hello.js");
var hello = funcs.hello;
var goodbye = funcs.goodbye;

test("hello's output", function(t) {
  t.equal(hello(), "Hello World");
  t.end();
});

test("goodbye's output", function(t) {
  t.equal(goodbye(), "Goodbye World");
  t.end();
});

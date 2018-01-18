"use strict";

var test = require("tape");
var hello = require("./hello.js");

test("hello's output", function(t) {
  t.equal(hello("Alice"), "Hello Alice");
  t.equal(hello("Bob"), "Hello Bob");
  t.end();
});

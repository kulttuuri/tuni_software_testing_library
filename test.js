import { createRequire } from 'module'; const require = createRequire(import.meta.url);
var chai = require("chai"); const expect = chai.expect;

import add from "./library/src/add.js"
import filter from "./library/src/filter.js"
import capitalize from "./library/src/capitalize.js"
import endsWith from "./library/src/endsWith.js"
import slice from "./library/src/slice.js"
import isEmpty from "./library/src/isEmpty.js"
import words from "./library/src/words.js"
import drop from "./library/src/drop.js"
import eq from "./library/src/eq.js"
import toString from "./library/src/toString.js"

// TODO: Test
// filter, capitalize, endswith, slice, isEmpty, words, drop, eq, toString


// #######
// # ADD #
// #######

// TODO: Test with wrong data types, like string or array

describe("add()", () => {
  it("add(3,5) should return 8'", () =>{ expect(add(3,5)).to.equal(8) });
})

describe("add()", () => {
  it("add(3,-1) should return 2'", () =>{ expect(add(3,-1)).to.equal(2) });
})

describe("add()", () => {
  it("add(-5,-5) should return -10'", () =>{ expect(add(-5,-5)).to.equal(-10) });
})

describe("add()", () => {
  it("add(362134122,51283282372) should return 51645416494'", () =>{ expect(add(362134122,51283282372)).to.equal(51645416494) });
})

// ##########
// # FILTER #
// ##########

let filterData = [
  { 'user': 'barney', 'active': true },
  { 'user': 'jones', 'active': true },
  { 'user': 'fred',   'active': false }
]

describe("filter()", () => {
  it("filter() should return empty array'", () =>{ expect(filter()).to.eql([[]])});
})

describe("filter()", () => {
  it("filter([], ({ active }) => active) should return empty array'", () =>{ expect(filter([], ({ active }) => active)).to.eql([[]])});
})

describe("filter()", () => {
  it("filter(filterData, ({ active }) => active) should return only active users'", () =>{ expect(filter(filterData, ({ active }) => active)).to.eql([
    { 'user': 'barney', 'active': true },
    { 'user': 'jones', 'active': true }
  ])});
})

describe("filter()", () => {
  it("filter(filterData, ({ user }) => user == 'jones')) should return only jones'", () =>{ expect(filter(filterData, ({ user }) => user == "jones")).to.eql([
    { 'user': 'jones', 'active': true }
  ])});
})
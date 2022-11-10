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

// #######
// # ADD #
// #######

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

// ##############
// # CAPITALIZE #
// ##############

describe("capitalize()", () => {
  it("capitalize('') should return ''", () =>{ expect(capitalize("")).to.equal("")});
})

describe("capitalize()", () => {
  it("capitalize('alex') should return 'Alex'", () =>{ expect(capitalize("alex")).to.equal("Alex")});
})

describe("capitalize()", () => {
  it("capitalize('Jones') should return 'Jones'", () =>{ expect(capitalize("Jones")).to.equal("Jones")});
})

describe("capitalize()", () => {
  it("capitalize('my name') should return 'My name'", () =>{ expect(capitalize("my name")).to.equal("My name")});
})

// ############
// # ENDSWITH #
// ############

describe("endsWith()", () => {
  it("endsWith('my name', 'name') should return true", () =>{ expect(endsWith("my name", "name")).to.equal(true)});
})

describe("endsWith()", () => {
  it("endsWith('Teststring', 'Test') should return false", () =>{ expect(endsWith("Teststring", "Test")).to.equal(false)});
})

// #########
// # SLICE #
// #########

let array = [1, 2, 3, 4]

describe("slice()", () => {
  it("slice(array, 2) should return [3,4]", () =>{ expect(slice(array, 2)).deep.to.equal([ 3, 4 ])});
})

describe("slice()", () => {
  it("slice([], 0) should return []", () =>{ expect(slice([], 0)).deep.to.equal([ ])});
})

describe("slice()", () => {
  it("slice(array, 15) should return []", () =>{ expect(slice(array, 15)).deep.to.equal([ ])});
})

// ###########
// # ISEMPTY #
// ###########

describe("isEmpty()", () => {
  it("isEmpty(array) should return false", () =>{ expect(isEmpty(array)).to.equal(false)});
})

describe("isEmpty()", () => {
  it("isEmpty([]) should return true", () =>{ expect(isEmpty([])).to.equal(true)});
})

describe("isEmpty()", () => {
  it("isEmpty({}) should return true", () =>{ expect(isEmpty({})).to.equal(true)});
})

describe("isEmpty()", () => {
  it("isEmpty([1]) should return false", () =>{ expect(isEmpty([1])).to.equal(false)});
})

describe("isEmpty()", () => {
  it("isEmpty({'a': 1}) should return false", () =>{ expect(isEmpty({'a': 1})).to.equal(false)});
})

// #########
// # WORDS #
// #########

describe("words()", () => {
  it("words('can you split plz') should return ['can', 'you', 'split', 'plz']", () =>{ expect(words('can you split plz')).deep.to.equal(["can", "you", "split", "plz"])});
})

describe("words()", () => {
  it("words('') should return ['']", () =>{ expect(words('')).deep.to.equal([])});
})

// ########
// # DROP #
// ########

describe("drop()", () => {
  it("drop([1,2], 0) should return [1,2]", () =>{ expect(drop([1,2], 0)).deep.to.equal([1,2])});
})

describe("drop()", () => {
  it("drop([1,2], 1) should return [2]", () =>{ expect(drop([1,2], 1)).deep.to.equal([2])});
})

describe("drop()", () => {
  it("drop([1,2], 10) should return []", () =>{ expect(drop([1,2], 10)).deep.to.equal([])});
})

// ######
// # EQ #
// ######

let testObj = { "user": "john" }
let testObj2 = { "user": "alex" }

describe("eq()", () => {
  it("eq(testObj, testObj) should return true", () =>{ expect(eq(testObj, testObj)).to.eq(true) });
})

describe("eq()", () => {
  it("eq(testObj, testObj2) should return false", () =>{ expect(eq(testObj, testObj2)).to.eq(false) });
})

// ############
// # TOSTRING #
// ############

describe("toString()", () => {
  it("toString(2) should return '2'", () =>{ expect(toString(2)).to.eq('2') });
})

describe("toString()", () => {
  it("toString('asd') should return 'asd'", () =>{ expect(toString('asd')).to.eq('asd') });
})
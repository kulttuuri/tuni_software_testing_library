import { createRequire } from 'module'; const require = createRequire(import.meta.url);
var chai = require("chai"); const expect = chai.expect;

import add from "../library/src/add.js"

describe("add()", () => {
  it("add(3,5) should return 8'", () =>{ expect(add(3,5)).to.equal(8) });
})

describe("add()", () => {
  it("add(3,-1) should return 2'", () =>{ expect(add(3,-1)).to.equal(2) });
})

// Muista lisätä package.jsoniin: "type": "module",
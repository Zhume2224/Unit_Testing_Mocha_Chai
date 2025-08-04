//using assertion in node. 
const assert = require('assert');

describe( 'basic math testing', ()=>{
let a, b;

beforeEach(()=>{
a=2;
b=1;
})

xit('should be able to add 2  numbers', ()=>{
const c=a+b;
assert.equal(c,3)
});

xit('should be able to do division', ()=>{
const c=a/b;
assert.equal(c,2);
})
})
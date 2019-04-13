const div = require('./dive');

test('Test for no parameters',()=>{
    expect(div()).toBe('only numbers are allowed');
});

test('test that the parameters are numbers',()=>{
    expect(div("a","bb")).toBe('only numbers are allowed')
})
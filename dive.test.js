const div = require('./dive');

test('Test for no parameters',()=>{
    expect(div()).toBe('only numbers are allowed');
});

test('test that the parameters are numbers',()=>{
    expect(div("a","bb")).toBe('only numbers are allowed')
});

test('Test that the second parameter is not equal to zero',()=>{
    expect(div(23,0)).toBe('you are not allowed');
});

test('Test that the second parameter is not equal to NaN',()=>{
    expect(div(23,NaN)).toBe('you are not allowed');
});
const reverseString = require('./reversestring');

test('reversstring func exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('string reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});

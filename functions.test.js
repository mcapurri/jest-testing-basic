const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking names...');

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Jane', () => {
        const user = 'Jane';
        expect(user).toBe('Jane');
    });
});

test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equals 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// User Obj
test('User should be Marco Capurri', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Marco',
        lastName: 'Capurri',
    });
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('There should be Admin in usernames', () => {
    usernames = ['john', 'jake', 'admin'];
    expect(usernames).toContain('admin');
});

// Async data

//Promise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then((data) => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

//Async await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

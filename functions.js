const { default: axios } = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Marco' };
        user['lastName'] = 'Capurri';
        return user;
    },
    fetchUser: async () => {
        try {
            const user = await axios.get(
                'https://jsonplaceholder.typicode.com/users/1'
            );
            return user.data;
        } catch (err) {
            return err;
        }
    },
};

module.exports = functions;

const {
    find,
    update,
    remove
} = require('./db');

(async () => {
    // nosql
    const result = await find('students');
    await update('students', { name: 'zs' }, { name: 'ls' })
    await remove('students', { name: 'jing' });
    console.log(result);
})();

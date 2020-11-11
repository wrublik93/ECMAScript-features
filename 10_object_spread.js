// есть два объекта, нужно создать третий, который объединяет 2
// у opts должен быть больший приоритет, поэтому дефолтные должны перезаписываться

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'moderator',
    age: 25,
};

const res = { ...defaults, ...opts };
console.log(res);
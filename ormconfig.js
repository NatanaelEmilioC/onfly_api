module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'onfly_api',
  entities: ['dist/**/*.model.js'],
  synchronize: true,
};

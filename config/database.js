import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test_machine', 'root', '123456', {
  host: 'localhost',
  port: 3306,         
  dialect: 'mysql'
});

export default sequelize;
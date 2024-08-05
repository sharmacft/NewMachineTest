import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Category from './category.js';

const Service = sequelize.define('Service', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('Normal', 'VIP'),
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  }
});

export default Service;

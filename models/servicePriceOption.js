import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Service from './service.js';

const ServicePriceOption = sequelize.define('ServicePriceOption', {
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'),
    allowNull: false
  },
  serviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
      key: 'id'
    }
  }
});

export default ServicePriceOption;

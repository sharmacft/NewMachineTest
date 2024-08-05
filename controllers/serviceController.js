import Service from '../models/service.js';
import ServicePriceOption from '../models/servicePriceOption.js';

export const createService = async (req, res) => {
  const { categoryId } = req.body;
  const { name, type, priceOptions } = req.body;
  try {
    const service = await Service.create({ name, type, categoryId });
    if (priceOptions && priceOptions.length > 0) {
      for (const option of priceOptions) {
        await ServicePriceOption.create({ ...option, serviceId: service.id });
      }
    }
    res.json(service);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllServices = async (req, res) => {
  const { categoryId } = req.body;
  try {
    const services = await Service.findAll({ where: { categoryId } });
    res.json(services);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateService = async (req, res) => {
  const { categoryId, serviceId } = req.body;
  const { name, type, priceOptions } = req.body;
  try {
    await Service.update({ name, type }, { where: { id: serviceId, categoryId } });
    if (priceOptions && priceOptions.length > 0) {
      await ServicePriceOption.destroy({ where: { serviceId } });
      for (const option of priceOptions) {
        await ServicePriceOption.create({ ...option, serviceId });
      }
    }
    res.send('Service updated');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const deleteService = async (req, res) => {
  const { categoryId, serviceId } = req.body;
  try {
    await Service.destroy({ where: { id: serviceId, categoryId } });
    res.send('Service deleted');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

import Category from '../models/category.js';
import Service from '../models/service.js';

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateCategory = async (req, res) => {
  const { name } = req.body;
  try {
    await Category.update({ name }, { where: { id: req.body.categoryId } });
    res.send('Category updated');
  } catch (err) {
    
    res.status(400).send(err.message);
  }
};

export const deleteCategory = async (req, res) => {
  const { categoryId } = req.body;
  try {
    const services = await Service.findAll({ where: { categoryId } });
    if (services.length === 0) {
      await Category.destroy({ where: { id: categoryId } });
      res.send('Category deleted');
    } else {
      res.status(400).send('Category is not empty');
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

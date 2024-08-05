import express from 'express';
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '../controllers/categoryController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/addCategory', auth, createCategory);
router.get('/categoriesList', auth, getAllCategories);
router.post('/editCategory', auth, updateCategory);
router.delete('/deleteCategory', auth, deleteCategory);

export default router;
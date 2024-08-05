import express from 'express';
import { createService, getAllServices, updateService, deleteService } from '../controllers/serviceController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/addCategoryService', auth, createService);
router.get('/categoryServicesList', auth, getAllServices);
router.post('/editCategoryService', auth, updateService);
router.delete('/deletecategoryService', auth, deleteService);

export default router;

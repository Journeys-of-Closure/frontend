import express from 'express';
import { getUserProfile } from '../controllers/userController';

const router = express.Router();

router.get('/user/profile', getUserProfile);

export default router;


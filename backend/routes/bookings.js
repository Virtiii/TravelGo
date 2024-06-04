import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../utils/verifyToken.js';
import express from 'express';
const router = express.Router();

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.get('/',verifyUser,getAllBooking)

export default router;

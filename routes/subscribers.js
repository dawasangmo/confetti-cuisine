// routes/subscribers.js
import { Router } from "express";
import {
  getAllSubscribers,
  getSubscriptionPage,
  saveSubscriber
} from "../controllers/subscribersController.js";

const router = Router();

router.get("/", getAllSubscribers);     // /subscribers
router.get("/new", getSubscriptionPage); // /subscribers/new
router.post("/", saveSubscriber);        // POST /subscribers

export default router;

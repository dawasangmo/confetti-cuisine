// controllers/subscribersController.js
import Subscriber from "../models/Subscriber.js";

export const getSubscriptionPage = async (req, res, next) => {
  try {
    res.render("subscribers/new", { title: "New Subscriber" });
  } catch (err) {
    next(err);
  }
};

export const saveSubscriber = async (req, res, next) => {
  try {
    const { name, email, zipCode, streetAddress, vip } = req.body;

    await Subscriber.create({
      name,
      email,
      zipCode,
      streetAddress,
      vip: vip === "on" || vip === true // checkbox handling
    });

    res.redirect("/subscribers");
  } catch (err) {
    next(err);
  }
};

export const getAllSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 }).lean();
    res.render("subscribers/index", { title: "Subscribers", subscribers });
  } catch (err) {
    next(err);
  }
};

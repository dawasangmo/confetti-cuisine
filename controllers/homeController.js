// controllers/homeController.js

const showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: [
      { title: "Event Planning", cost: 50 },
      { title: "Cake Decorating", cost: 75 },
      { title: "Cooking with Confetti", cost: 40 }
    ]
  });
};

const showSignUp = (req, res) => {
  res.render("contact");
};

const postedSignUpForm = (req, res) => {
  console.log(req.body);
  res.render("thanks");
};

export default {
  showCourses,
  showSignUp,
  postedSignUpForm
};

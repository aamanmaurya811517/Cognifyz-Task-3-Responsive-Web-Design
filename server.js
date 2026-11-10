const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const demoEnrollments = [];
const demoMessages = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.currentPage = req.path;
  next();
});

app.get("/", (req, res) => res.render("pages/home", { title: "Learn. Build. Grow." }));
app.get("/courses", (req, res) => res.render("pages/courses", { title: "Explore Courses" }));

app.get("/enroll", (req, res) => {
  res.render("pages/enroll", { title: "Enroll Now", errors: [], success: false, formData: {} });
});

app.post("/enroll", (req, res) => {
  const { fullName, email, phone, dob, course, learningMode } = req.body;
  const errors = [];
  if (!fullName || fullName.trim().length < 2) errors.push("Enter your full name (at least 2 characters).");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
  if (!phone || !/^[0-9+\-\s]{10,15}$/.test(phone)) errors.push("Enter a valid phone number.");
  if (!dob || new Date(dob) >= new Date()) errors.push("Choose a valid date of birth in the past.");
  if (!course) errors.push("Choose a course.");
  if (!learningMode) errors.push("Choose a learning mode.");

  if (errors.length) {
    return res.status(400).render("pages/enroll", { title: "Enroll Now", errors, success: false, formData: req.body });
  }
  demoEnrollments.push({ fullName, email, phone, dob, course, learningMode, createdAt: new Date() });
  res.render("pages/enroll", { title: "Enroll Now", errors: [], success: true, formData: {} });
});

app.get("/blog", (req, res) => res.render("pages/blog", { title: "Learning Blog" }));
app.get("/contact", (req, res) => res.render("pages/contact", { title: "Contact Us", errors: [], success: false, formData: {} }));

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = [];
  if (!name || name.trim().length < 2) errors.push("Enter your name.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
  if (!message || message.trim().length < 10) errors.push("Message must contain at least 10 characters.");
  if (errors.length) return res.status(400).render("pages/contact", { title: "Contact Us", errors, success: false, formData: req.body });
  demoMessages.push({ name, email, subject, message, createdAt: new Date() });
  res.render("pages/contact", { title: "Contact Us", errors: [], success: true, formData: {} });
});

app.use((req, res) => res.status(404).render("pages/not-found", { title: "Page not found" }));
app.listen(PORT, () => console.log(`Cognifyz Learning Hub: http://localhost:${PORT}`));

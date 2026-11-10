document.addEventListener("DOMContentLoaded", () => {
  // Update the footer year automatically.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Reveal content when it scrolls into view.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Search and filter course cards on the Courses page.
  const search = document.getElementById("courseSearch");
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".course-item");
  const empty = document.getElementById("emptyCourses");
  let category = "all";

  function updateCourses() {
    if (!cards.length) return;
    let shown = 0;
    cards.forEach(card => {
      const categoryMatch = category === "all" || card.dataset.category === category;
      const textMatch = card.textContent.toLowerCase().includes(search.value.toLowerCase().trim());
      const show = categoryMatch && textMatch;
      card.classList.toggle("d-none", !show);
      if (show) shown++;
    });
    if (empty) empty.classList.toggle("d-none", shown > 0);
  }

  if (search) search.addEventListener("input", updateCourses);
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    category = button.dataset.filter;
    updateCourses();
  }));

  // Client-side validation for the enrollment form.
  const enrollForm = document.getElementById("enrollForm");
  if (enrollForm) {
    enrollForm.addEventListener("submit", event => {
      const dob = document.getElementById("dob");
      const terms = document.getElementById("terms");
      const dobValid = dob.value && new Date(dob.value) < new Date();
      if (!enrollForm.checkValidity() || !dobValid) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (!dobValid) dob.setCustomValidity("Choose a date in the past.");
      else dob.setCustomValidity("");
      if (!terms.checked) terms.setCustomValidity("Please confirm this checkbox.");
      else terms.setCustomValidity("");
      enrollForm.classList.add("was-validated");
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) contactForm.addEventListener("submit", event => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    contactForm.classList.add("was-validated");
  });
});
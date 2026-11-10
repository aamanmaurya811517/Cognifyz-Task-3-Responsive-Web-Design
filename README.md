<<<<<<< HEAD
# Cognifyz Task 3 – Learning Hub

A responsive multi-page education website created for **Cognifyz Technologies Full Stack Development Internship – Task 3: Advanced CSS Styling and Responsive Design**.

## Pages
- Home (`/`): hero, statistics, popular courses, benefits and call-to-action.
- Courses (`/courses`): course cards, live text search and category filters.
- Enroll Now (`/enroll`): enrollment form with client-side and server-side validation.
- Blog (`/blog`): learning articles and resources.
- Contact (`/contact`): contact details and validated message form.

## Tech stack
HTML5/EJS, CSS3, Bootstrap 5, Bootstrap Icons, JavaScript, Node.js, Express.js.

## Run on macOS
1. Extract this ZIP.
2. Open the `Cognifyz-Task-3` folder in VS Code.
3. Open the integrated terminal.
4. Check Node.js: `node -v` and `npm -v`.
5. Install dependencies: `npm install`
6. Start in development mode: `npm run dev`
7. Open `http://localhost:3000`.
8. Stop the server with `Control + C`.

For normal mode use `npm start`.

## Project structure
```text
Cognifyz-Task-3/
├── public/
│   ├── css/style.css
│   └── js/main.js
├── views/
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── course-card.ejs
│   └── pages/
│       ├── home.ejs
│       ├── courses.ejs
│       ├── enroll.ejs
│       ├── blog.ejs
│       └── contact.ejs
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Animation and styling guide
- Scroll reveal: `.reveal` / `.visible` in `style.css`, activated by IntersectionObserver in `main.js`.
- Floating cards: `@keyframes float`.
- Rotating decorative ring: `@keyframes spin`.
- Course card hover lift: `.course-card:hover`.
- Blog card hover lift: `.blog-card:hover`.
- Button and navigation hover transitions are defined in `style.css`.
- Responsive layouts use Bootstrap grid plus custom media queries at 991px and 575px.
- Reduced-motion preferences are respected.

## Important demo notes
- Enrollment and contact submissions are stored in server memory only and disappear when the server restarts.
- No database, real authentication, email delivery or payment gateway is connected.
- Bootstrap, Bootstrap Icons and Google Fonts load from external CDNs, so internet access is required for those libraries. All five page photographs are bundled locally.
- Replace the sample contact details and images before using this as a real service.

## GitHub
Suggested repository: `Cognifyz-Task-3`

```bash
git init
git add .
git commit -m "Build responsive Cognifyz Learning Hub - Task 3"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Cognifyz-Task-3.git
git push -u origin main
```

\n## Visual update (reference-inspired)\n- Colorful three-part Cognifyz brand mark built with CSS.\n- Course cards use four-across desktop layout, vivid technology icons, ratings and enrollment counts.\n- Courses page includes a blue gradient hero, CSS book-and-graduation-cap illustration, category filters and a call-to-action panel.\n- Enrollment page includes a fully CSS-built animated computer scene, orbiting rings, floating learning icons and a progress toast.\n- The supplied and generated visual assets are stored locally in `public/assets/`: `community-student.png`, `collaborative-workspace.png`, `coding-workspace.png`, `ai-data-vortex.png`, and `cafe-collaboration.png`. The earlier `student-learning.png` is retained as an extra asset. All home and blog page photographs now load from local files rather than remote Unsplash image URLs.\n- No animation library is required; the effects use CSS keyframes and the existing IntersectionObserver reveal.\n
=======
# Cognifyz-Task-3-Responsive-Web-Design
Task 3 of Cognifyz Technologies Full Stack Web Development Internship – A modern responsive educational website built using HTML, CSS, JavaScript, Bootstrap 5, Node.js, Express.js and EJS.
>>>>>>> 49aa26fb041af704cacbae65c8264c9853abed49

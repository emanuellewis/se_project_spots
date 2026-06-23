# Spots - A basic site to share images

A responsive photo-sharing profile page built with HTML, CSS, and JavaScript as part of the TripleTen web development curriculum, now integrated with a remote server.

## Description

Spots is a dynamic web page that simulates a social photo-sharing profile. It features an interactive user profile section with an editable avatar, name, and description, along with a responsive card grid that displays photo posts. All profile data, avatar changes, and card operations are dynamically synchronized with a remote server via API requests.

## Features

- **Profile section** with editable avatar image, name, description, and action buttons.
- **Server Integration** to fetch initial user data and cards, as well as saving profile updates, new posts, and avatar updates.
- **Responsive photo card grid** that adapts to screen size using CSS Grid.
- **Like button** on each card with hover interaction and state persistence.
- **Card deletion system** that requires user confirmation before removing a post, helping prevent accidental deletions.
- **Form Validation** to ensure user inputs are correct before submission.
- **Text overflow handling** with ellipsis for long card titles.
- **Footer** with copyright information.

## Technologies

- HTML5
- CSS3
  - CSS Grid with `auto-fit` / `minmax` for fluid layouts
  - Flexbox for component-level alignment
  - Media queries for responsive breakpoints
  - CSS transitions for interactive states
- JavaScript (ES6+)
  - Fetch API for asynchronous server communication
  - DOM manipulation, form validation, and event handling
- **Build Tools & Bundlers**
  - Webpack (for module bundling)
  - Babel (for JavaScript transpilation)
  - PostCSS (for advanced CSS processing)

## Responsive Breakpoints

Breakpoint - Layout

---

> 1320px - 3-column grid
> ≤ 1320px - 2-column grid  
>  ≤ 627px - Single column, 288px cards

## Screenshots

Here is a visual overview of the project's interface and its interactive modals:

### Main Page

![Main Page Dashboard](/src/images/Preview%20images/Main%20Page.png)

### Edit Avatar Modal

![Edit Profile Picture Modal](/src/images/Preview%20images/edit-avatarmodal.png)

### Edit Profile Modal

![Edit Profile Info Modal](/src/images/Preview%20images/edit-profile-modal.png)

### New Post Modal

![Add New Card Modal](/src/images/Preview%20images/new-post-modal.png)

### Preview Modal

![Image Fullscreen Preview Modal](/src/images/Preview%20images/previwe-modal.png)

### Delete Confirmation Modal

![Card Deletion Confirmation Modal](/src/images/Preview%20images/delete-confirmation.png)

## Project Pitch Video

Check out [EmanuelLewis-ProjectPitch-SpotsFinalStage](https://drive.google.com/file/d/1iYuArDXqsW4IZ7Yp4bq4LdWJc9EwYCPo/view?usp=drivesdk), where I describe my project and some challenges I faced while building it.
Check out [EmanuelLewis-ProjectPitch-SpotsFinalStage-2](https://drive.google.com/file/d/1XyL8qd6cV1P7Kr7dLR9_jtnbN-wSe4bT/view?usp=drive_link), here is my 2nd video for the project
Check out [EmanuelLewis-ProjectPitch-SpotsFinalStage-3](https://drive.google.com/file/d/1EFo20rH1KGMzykmgOPyH-PMPT_gL1pSm/view?usp=sharing), here is my 3rd video for the project

## Live Project

[Click here to view the project](https://emanuellewis.github.io/se_project_spots/)

## Project Structure

spots/
├── node_modules/
├── src/
│ ├── blocks/
│ │ ├── card.css
│ │ ├── cards.css
│ │ ├── content.css
│ │ ├── footer.css
│ │ ├── header.css
│ │ ├── modal.css
│ │ ├── page.css
│ │ └── profile.css
│ ├── images/
│ ├── pages/
│ │ ├── index.css
│ │ └── index.js
│ ├── scripts/
│ │ └── validation.js
│ ├── utils/
│ │ └── Api.js
│ ├── vendor/
│ └── index.html
├── .editorconfig
├── .gitignore
├── .prettierignore
├── babel.config.js
├── favicon.ico
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── webpack.config.js

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/emanuellewis/se_project_spots.git
```

2. Navigate to the project directory

```bash
cd se_project_spots
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Create a production build

```bash
npm run build
```

## Author

Emanuel Lewis — TripleTen Web Development Program

## Acknowledgments

Photos by Moritz Feldmann, Ceiline, Tubanur Dogan, Maurice Laschet, and Van Anh Nguyen from [Pexels](https://www.pexels.com).

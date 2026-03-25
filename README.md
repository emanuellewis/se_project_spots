# Spots - A basic site to share images

A responsive photo-sharing profile page built with HTML and CSS as part of the TripleTen web development curriculum.

## Description

Spots is a static web page that simulates a social photo-sharing profile. It features a user profile section with an avatar, name, and description, along with a responsive card grid that displays photo posts with like buttons.

## Features

- **Profile section** with avatar image, name, description, and edit/new post buttons
- **Responsive photo card grid** that adapts to screen size using CSS Grid
- **Like button** on each card with hover interaction
- **Text overflow handling** with ellipsis for long card titles
- **Footer** with copyright information

## Technologies

- HTML5
- CSS3
  - CSS Grid with `auto-fit` / `minmax` for fluid layouts
  - Flexbox for component-level alignment
  - Media queries for responsive breakpoints
  - CSS transitions for interactive states

## Responsive Breakpoints

Breakpoint - Layout

---

> 1320px - 3-column grid
> ≤ 1320px - 2-column grid  
>  ≤ 627px - Single column, 288px cards

## Project Structure

```
spots/
├── index.html
├── favicon.ico
├── pages/
│   └── index.css
└── images/
    ├── Logo.svg
    ├── avatar.jpg
    ├── edit__profile-icon.svg
    ├── logo__button.svg
    ├── State=Hover.png
    ├── 1-photo-by-moritz-feldmann-from-pexels.jpg
    ├── 2-photo-by-ceiline-from-pexels.jpg
    ├── 3-photo-by-tubanur-dogan-from-pexels.jpg
    ├── 4-photo-by-maurice-laschet-from-pexels.jpg
    ├── 5-photo-by-van-anh-nguyen-from-pexels.jpg
    └── 6-photo-by-moritz-feldmann-from-pexels.jpg
└── blocks/
    ├── cards.css
    ├── content.css
    ├── footer.css
    ├── header.css
    ├── page.css
    └── profile.css


```

## Getting Started

No build tools or dependencies required. Simply open `index.html` in any modern browser.

```bash
git clone <your-repo-url>
cd spots
open index.html
```

## Author

Emanuel Lewis — TripleTen Web Development Program

## Acknowledgments

Photos by Moritz Feldmann, Ceiline, Tubanur Dogan, Maurice Laschet, and Van Anh Nguyen from [Pexels](https://www.pexels.com).

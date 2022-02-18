# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size :heavy_check_mark:
- See hover states for all interactive elements throughout the site :heavy_check_mark:
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position :heavy_check_mark:
- Be able to click a job from the index page so that they can read more information and apply for the job :heavy_check_mark:
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS. :heavy_check_mark:

### Screenshot

![plot](./devjobs-screenshot-desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-accessible-app-w-react-react-router-and-css-modules-WVr3YPVcu](https://www.frontendmentor.io/solutions/responsive-accessible-app-w-react-react-router-and-css-modules-WVr3YPVcu)
- Live Site URL: [https://dev-jobs-board.netlify.app/](https://dev-jobs-board.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Component-Scoped Styles with CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router] https://reactrouter.com/

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

There are a few areas I would like to focus on moving forward:

- I would like to implement an API for this project using Node.js and Express. As mentioned earlier, I believe this will solve my "refresh" issue on a specific route param.
- I plan on furthuring my knowledge of React Router and the hook useNavigation().

### Useful resources

- [Dark and Light mode](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - This is how I implemented dark/light mode in my application.

## Author

- Frontend Mentor - [@tkressma](https://www.frontendmentor.io/profile/tkressma)
- Twitter - [@tom_kressman](https://www.twitter.com/tom_kressman)

## Acknowledgments

At the very start of this project, my first goal was to implement a correct color scheme for the application based on the users preferences. This is something I've never done before, so I devled into some resources online that would point me in the right direction. To my surprise, I recently subscribed to [Josh Comeau's](https://www.joshwcomeau.com/) newsletter, and the first email sent to my inbox contained a link to a [fantastic explanation](https://www.joshwcomeau.com/react/dark-mode/) of how to go about implementing this feature. While I ended up using a [different, yet similar approach](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) in my final application, Josh's detailed tutorial was certaintly worth the read!

One bug I noticed while developing this application was if the user was to scroll down and click on a job posting, the viewport will
stay in the same position without resetting to the top upon routing to that component. A special thanks to Saeed from StackOverflow for helping me solve this issue. The [solution](https://stackoverflow.com/a/61602724/13158782) he provided is quite short and simple, but works perfectly!

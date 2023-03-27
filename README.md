# The Odin Project - Rock Paper Scissors

This is a solution to the [Project: Rock Paper Scissors of the Foundations Course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## Table of contents

- [Overview](#overview)
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

### Screenshot

![Rock Paper Scissors screenshot](./rock-paper-scissors-screenshot.png)

### Links

- Solution URL: [Project: Rock Paper Scissors solution](https://github.com/jugglingdev/rock-paper-scissors)
- Live Site URL: [Project: Rock Paper Scissors live site](https://jugglingdev.github.io/rock-paper-scissors/)

## My process

### Built with

- Semantic HTML
- Custom CSS
- JavaScript
- Google Fonts
- Vecteezy Vectors
- CodeHim Confetti Canvas

### What I learned

Wow!  Being only a week or so into JavaScript, this project took longer than expected as I had to review topics such as functions, loops, and scope.  That said, I'm proud because I really challenged myself to not peek at other solutions for this problem and work a solution by myself using the concepts I knew.  

The biggest thing that helped me do this was breaking down the project into smaller bits.  Once I got a particular function working, I would then move on to the next.  There were some times where I had to go back and tweak a previous function, but this method still helped me stay focused and make steady progress.

The game was originally coded to be played in the console with 5 rounds.  Later, I added a colorful UI to build upon my HTML and CSS skills for a fun user experience and declared a winner as the first to 5 points.  This required refactoring the JavaScript, which was tough but good practice.

For the UI, I had a lot of fun learning how to do beautiful color gradients that don't grey out in the middle.  I found a super useful tool for this task that is linked below.

I also brought back some CSS skills like `flexbox`, `pseudo-classes`, favicons, relative links, and even relative and fixed positioning for the nifty scoreboard and confetti canvas.

A new CSS property I learned was `scroll-behavior: smooth`.  It's perfect for when the user clicks the relative links to scroll down and start the game.  I also used `cursor: pointer` for the second time since the rock, paper, and scissors buttons aren't links that automatically switch the cursor to the pointer style.

You know how some websites just have all these little hidden gems?  Well, since I learned how to `transition` buttons in CSS, I decided to make the `USER` and `COMP` labels as buttons so they could transition on a hover, even though they don't interact with the JavaScript or link anywhere.  It's just one of those sweet things to make the player smile.  

To make the button transitions work with I used [Josh W. Comeau's Gradient Generator](https://www.joshwcomeau.com/gradient-generator/) to make a background that went from darker shade to lighter shade back to darker shade.  Then, I set the background to where it would show the first half(ish) of those colors and on a hover, slide to the second half.  The result is a neat little round-a-bout animation.

Another transition I worked in was for the text announcing the results of the round.  This was fairly simple, but also new, as I set up a `.fade` class in the CSS that is removed with a JS function with each button click.  The transition above used `setTimeout` as did the final function that invites you to click to play again at the end of the game.

You know how you make a feature and then find out that that cool feature bumps into something else?  This happened with the that last function.  I had set a timeout to display the text `Click to play again` 3 seconds after the end of a game.  Cool!  But what if a player jumped right in and clicked to restart?  Well, that silly text would still pop up even if the player started clicking `rock` or `scissors`.  The text was set to appear after 3 seconds and that's what it wanted to do.  So, I had to write another function to clear that timeout in the event that the user started clicking away.  It's a great example of debugging and covering all your bases as you add features.

Alright, let's talk about the confetti.  If you haven't played it yet, please do so and you'll know what I'm talking about (if you can beat the computer, that is).  This feature makes me so happy, but I did have to work for it!  I haven't worked with anything `<canvas>` before, so this was all based out of my own research.  I knew I wanted a little confetti celebration, and fortunately, I found some code for it from [CodeHim](https://www.codehim.com/animation-effects/javascript-confetti-explosion-effect/).  It took a little tweaking with fixed positioning and the z-index to get everything just right, but the celebration makes me so happy.  It was also fun to customize the confetti colors.

The last update I made to this project was mobile responsiveness.  I wasn't going to make it responsive at first, but I was so proud of this project that I wanted to show friends and family.  Knowing that some may be accessing the project via phone, I couldn't just leave it at the desktop.  I compromised and made a mobile responsive version for screens less than 425px.  Normally, I would approach a responsive project with a mobile first mindset, but this one didn't call for it, so the responsive design was an added bonus at the end.

Overall, this project was a blast.  It was hard, but it was worth it and I'm so happy I chose to learn so many new things during the process.  It turns out I really do enjoy working on the front-end.

### Continued development

The biggest challenge with this project was figuring out the JavaScript.  I hear so many developers urge coding newbies to work on their logic and I definitely see why!  This is by far the skill I would most like to work on.  In the future, I will seek opportunities to read other developers' code so I can learn how to keep everything clean and tidy.  Until then, I've got a project I can look back on in 5 years and gasp at while saying, "My my, Kayla.  Look how far you've come."

On the design side of things, I am very interested in incorporating more button styles and those subtle CSS features that make websites really stand out.

### Useful resources

- [Picking a Random Item from an Array](https://www.kirupa.com/html5/picking_random_item_from_array.htm) - Helpful little guide for getting the random computer choice.

- [MDN Window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) - Good resource for using `prompt()`.

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) - Good resource for double checking function syntax.

- [MDN Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) - Good resource for understanding loops.

- [Josh W. Comeau - Gradient Generator](https://www.joshwcomeau.com/gradient-generator/) - Massive kudos to Josh for his helpful and generous content.  I'm super impressed with his front-end skills as well as the quality of his educational material.  Can't give thanks enough.

- [Favicon.io](https://favicon.io/) - Generate favicons from text, image, or emojis.

- [fullPage - 10 Best CSS Button Hover Effects](https://alvarotrigo.com/blog/best-css-button-hover-effects/) - Excellent ideas to take that button CSS to the next level.

- [CodeHim - JavaScript Confetti Explosion Effect](https://www.codehim.com/animation-effects/javascript-confetti-explosion-effect/) - HTML, CSS, and JavaScript code to make animated confetti.

- [Interneting Is Hard - Advanced Positioning](https://www.internetingishard.com/html-and-css/advanced-positioning/) - One of my favorite resources for reviewing HTML and CSS concepts like relative and absolute positioning.

## Author

- Kayla Paden - Find me at [GitHub](https://github.com/jugglingdev), [freeCodeCamp](https://www.freecodecamp.org/jugglingdev), [Frontend Mentor](https://www.frontendmentor.io/profile/jugglingdev), [LinkedIn](https://www.linkedin.com/in/kayla-marie-paden)

## Acknowledgments

Thank you to [Vecteezy](https://www.vecteezy.com/free-vector/rock-paper-scissors) for the playful rock, paper, scissors cartoon featured in this project.

Another thank you to [Nicholas Suski & Asif Mughal](https://www.codehim.com/animation-effects/javascript-confetti-explosion-effect/) for the confetti code.

As always, shout out to everyone at The Odin Project for chipping in to make web development education free and accessible for everyone.  Huge thanks to you all!
<h1>GIT ISSUES</h1>

Important Finds = Nice To Keep

### To untrack DS_Store from git

`find. - name.DS_Store - print0 | xargs - 0 git rm - f--ignore - unmatch`

### It possible to have files pushed to Github and be un-tracked

<h4>Read SO solution here:</h4>
`https://stackoverflow.com/questions/4161022/how-to-track-untracked-content`

### To remove file from git and keep it on Disk

`git rm -r --cached path_to_your_folder/`

### Automatically get rid of remote branches that no longer exist on the remote.

`git fetch --prune`

### Reg Ex Visual

| SYNTAX | DEFINITION                              |
| ------ | --------------------------------------- |
| ^      | Asserts position at start of the string |
| (      | Denotes the start of a capturing group  |
| \d     | Numerical digit, 0, 1, 2, ... 9. Etc.   |
| {1,2}  | one to two times.                       |
| )      | You guessed it - Closes the group.      |
| $      | Assert position at end of the string    |

![visual](https://raw.githubusercontent.com/IamGiel/notes/master/images/regex%20visual.png)

<h2>ZSH NOTES</h2>
<ul>
  <li>Themes: http://ohmyz.sh/ </li>
  <li>Change its colors and and styles code: https://github.com/robbyrussell/oh-my-zsh/wiki/Customization</li>
</ul>

<hr>

<h2>Javascript Asynchronous Method Comparison: Callbacks, Promises, Async/Await, & Generators</h2>

<p>Read more <a href="https://medium.com/@jamil.lawrence/javascript-asynchronous-method-comparison-callbacks-promises-async-await-generators-e689d579aba7">here.</a></p>

<hr>

<h2>Adding Video to a page</h2>

```//start video styles
.fullscreen-bg {
opacity: 0.5;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
overflow: hidden;
z-index: -100;
}

.fullscreen-bg\_\_video {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

@media (min-aspect-ratio: 16/9) {
.fullscreen-bg\_\_video {
height: 300%;
top: -100%;
}
}

@media (max-aspect-ratio: 16/9) {
.fullscreen-bg\_\_video {
width: 300%;
left: -100%;
}
}

@media (max-width: 767px) {
.fullscreen-bg {
background: url
`sample video here:`("https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.webmm") center center / cover no-repeat;
}

.fullscreen-bg\_\_video {
display: none;
}
}
```

<hr>
<h2>Adding an existing project to GitHub using the command line: <a href="https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/">here</a></h2>
<hr><br>

<h1> Angular | React | Vue | Pros-Cons</h1> By: Max S. and Vikram K.
Angular = {
-has modularity
-use components with modules
-dependency injection
-easy to add routing and form validations
-very popular and many websites use it
-typescript forces developer to write better code
- Templates are separate - this means you can have your design team create the HTML and   CSS and you can add your JS bits.
-Since all major dependencies are courtesy of the Angular team, low risk of dependency    hell.
}
React = {
  - uses jsx, where you use html elements with javascript
  - you have to use `className` instead of `class` because of jsx
  - Componentization is a major plus, the fact that Angular 2 moved in this direction     is telling.
  - Multi-device. Angular, while it has Cordova, is nowhere near as versatile as React.
  - JSX makes it difficult to separate responsibility between developer and designer.
  - NPM hell - you have to add extra packages (e.g routing, form validations)
  - Lack of opinion on app structure can hurt if your devs are not used to designing      and maintaining large scale front-end apps. You need to have developers who are       Facebook level smart.
  - 
}
Vue = {
  - separation of template, css and javascript code is a plus++
  - like, React, it is dependency hell
  - es5 and es6 friendly
  - it uses javascript, and also can use typescript but dont have to, gives  
    it flexibility.
  - router is provided by the Vue team and so no dependency needed for that purpose.
  - But like REACT, you hav eto reply on packages (eg validations) so you may have to update.
  - no dependency injection.
  - has a great documentation!
  - A con, it doesn't have a great backup like facebook or google. Alibaba uses Vue so    it may soon pick up.

}

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

<br><hr>
<p>
When you have changes on your working copy, from command line do:

`git stash`

This will stash your changes and clear your status report

`git pull`

This will pull changes from upstream branch. Make sure it says fast-forward in the report. If it doesn't, you are probably doing an unintended merge

`git stash pop`

This will apply stashed changes back to working copy and remove the changes from stash unless you have conflicts. In the case of conflict, they will stay in stash so you can start over if needed.

if you need to see what is in your stash

`git stash list`
</p>

<hr>
<p>To check if mongodb is running in your system - run in cmd line</p>
<a href="https://stackoverflow.com/questions/31561098/how-to-check-if-mongo-db-is-running-on-mac"> Read Here or copy paste -> </a>
`ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' '`

Check version: `mongod --version`

<hr>
<h3>Installing mysql in mac</h3>
<a href="https://www.youtube.com/watch?v=dkrdDhAj-Zo"> Video Tutorial </a>
<p>With sql workbench</p>




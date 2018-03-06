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
SYNTAX  | DEFINITION
------------- | -------------
^  | Asserts position at start of the string
(  | Denotes the start of a capturing group
\d  | Numerical digit, 0, 1, 2, ... 9. Etc.
{1,2}  | one to two times.
)  | You guessed it - Closes the group.
$  | Assert position at end of the string
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
<div class="container">
  <p>Hello</p>
</div>


 <h2>Why Angular4?</h2><hr>
 -Angular4 CLI have code generation command 
 helps organize projects.
 -rapid development (routing, event handling, validation)
 -organizes code in encapsulated components
 -use directives (variables, templates, loops, if statements )
 -cross platform
 -uses Typescript (super set of Javascript) static types
 -class based object oriented programming
 <br>

<h2>Components</h2><hr>
sections of the UI, can be broken up into encapsulated components
an Angular application is a tree of Angular components (very similar to react in a that sense).

<strong>Decorators</strong>
<pre>
@component({
  selector: 'my-app',
  template: <h1>Hello {{name}} !</h1>,
  animation: [
    easeIn,
    video,
    greeting
  ]
})
</pre>
<li>allow us to mark a class as an Angular component.
</li>
<li>allow us to provide `metadata` that determines how the component should be<br>
<pre>
-processed
-instantiated
-and used at run time
</pre>
</li>

 <br>
 
<h2>Services</h2><hr>

Keeps components clean, DRY, and ideal place for AJAX calls.
-All services have injectables 
<pre>
import { Injectable } from '@angular/core';
import { user } from './user';
import { USERS } from './mock-user';

@injectable()
export class UsersService {
  getUsers(): User[] {
    return USERS;
  }
}
</pre>



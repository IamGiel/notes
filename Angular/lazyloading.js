// Imagine an application scales up and becomes a bigger application
// The application start up time is slower, UX is not optimized.
// This is where lazy loading comes in.
// We dont have to serve all the functionality of our app at first load.
// We make it accessible only when the user first access the functionality.

// step one:
// - remove the import of the common-module (module we want lazy loaded) from the root module, this way theres no references between our main app module from the common module.

// step two:
// - configure the router! Remove all the routing configurations that relates to the common-module.  
// as replacement, anything that hits the path (route) we redirect to the loadChildren property = "";

export const routers = [
  {
    path: 'courses',
    loadChildren: "/path/to/the/module/to/be/lazy-loaded/courses.module", // refering to this line of code ^
  },
  {
    path: 'playlist',
    component: Playlist,
    outlet: 'playlist'
  }
];

// step three:
// take all the services from the provider from our app.module root application and transfer it to the provider in the module you want lazyloaded.







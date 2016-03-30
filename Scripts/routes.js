myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "Views/home/home.html",
      controller:"homeController",
      controllerAs:"homeCtrl"
    })
  .state('dashboard', {
      templateUrl: "Views/dashboard/dashboard.html"
    })
  .state('dashboard.profile', {
      url: "/profile",
      templateUrl: "Views/dashboard/profile.html"
    })
  .state('dashboard.classes', {
      url: "/classes",
      templateUrl: "Views/dashboard/classes.html"
    })
  .state('dashboard.videos', {
      url: "/videos",
      templateUrl: "Views/dashboard/videos.html"
    })
  .state('dashboard.photos', {
      url: "/photos",
      templateUrl: "Views/dashboard/photos.html"
    })
  .state('dashboard.courses', {
      url: "/courses",
      templateUrl: "Views/dashboard/courses.html"
    })
  
  
  
  
  
  .state('dayOne', {
      templateUrl: "Views/dayOne/index.html"
    })
  .state('dayOne.twoWayBinding', {
      url: "/twoWayBinding",
      controller: "dayOneController",
      templateUrl: "Views/dayOne/twoWayBinding.html"
    })
  
  
    
});
// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html'
    })
    .when('/blog', {
        templateUrl: 'pages/blog.html'
    }).
    otherwise('/');
});
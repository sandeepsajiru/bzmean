angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {templateUrl:'/partials/main', controller:'mainCtrl'})
        .when('/login', {templateUrl:'/partials/login', controller:'loginCtrl'})
        .when('/signup', {templateUrl:'/partials/signup', controller:'signupCtrl'});
});

angular.module('app').controller('mainCtrl', function($scope){
    $scope.bzVar = "BZ Angular Scope Variable";
});

angular.module('app').controller('loginCtrl', function($scope){
    
});

angular.module('app').controller('signupCtrl', function($scope){
   
});
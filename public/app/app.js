angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {templateUrl : '/partials/main', controller : 'mainCtrl'});
});

anuglar.module('app').controller('mainCtrl', function($scope){
   $scope.bzVar = "Angular Being Zero Variable";
});
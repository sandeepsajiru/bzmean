angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth){
    $scope.identity = mvIdentity;
    $scope.signIn = function(username, password){
      mvAuth.authenticateUser(username, password).then(function(success){
          if(success)
            mvNotifier.notify('Login Successful');
          else
              mvNotifier.notify('Invalid Username/Password');
      });
  }  
});
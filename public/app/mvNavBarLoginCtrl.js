angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location){
    $scope.identity = mvIdentity;
    $scope.signIn = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success)
                mvNotifier.notify('Login Successful!');
            else
                mvNotifier.notify('Invalid Username/Password!');
        });
    }
    
    $scope.signOut = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username="";
            $scope.password="";
            mvNotifier.notify('Signed Out!');
            $location.path('/');
        });   
    }
});
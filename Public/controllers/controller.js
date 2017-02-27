angular.module('myApp', []).controller('AppCtrl', function($scope, $http) {
    console.log("Hello world from controller");

    $http({
        method: 'GET',
        url: '/contactlist'
    }).then(function(response){
        console.log("I got the data I requested");
        $scope.contactlist = response.data;
    });


});

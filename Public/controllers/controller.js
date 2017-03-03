angular.module('myApp', []).controller('AppCtrl', function($scope, $http) {

    $scope.contact = {};

    var refresh = function(){
        $http({
            method: 'GET',
            url: '/contactlist'
        }).then(function(response){
            $scope.contactlist = response.data;
            $scope.contact.name = "";
            $scope.contact.email = "";
            $scope.contact.number = "";
        });
    };

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).then(function(response){
            console.log(response);
            refresh();
        });

    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id)
        .then(function(response) {
            refresh();
        });

    };


});

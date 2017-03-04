angular.module('myApp', []).controller('AppCtrl', function($scope, $http) {

    $scope.contact = {};

    var refresh = function(){
        $http({
            method: 'GET',
            url: '/contactlist/'
        }).then(function(response){
            $scope.contactlist = response.data;
            clearContact();
        });
    };

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist/', $scope.contact).then(function(response){
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

    $scope.edit = function(id) {
        console.log(id);
        $http.get('/contactlist/' + id)
        .then(function(response){
            console.log(response.data);
            $scope.contact = response.data;
        });
    };

    $scope.update = function() {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
        .then(function(response) {
            refresh();
        })
    };

    $scope.deselect = function() {
        clearContact();
    }

    clearContact = function() {
        $scope.contact.name = "";
        $scope.contact.email = "";
        $scope.contact.number = "";
    };


});

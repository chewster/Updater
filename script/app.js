var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    console.log("this is the controller");
    $http.get("data/businesses.json")
        .then(function(response) {
            $scope.cards = response.data;
        }, function(response) {
            console.log("error error indeed");
            console.log(response);
        });
});
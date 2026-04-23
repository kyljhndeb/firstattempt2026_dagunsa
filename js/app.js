// js/app.js
var app = angular.module('alumniApp', []);

app.controller('AlumniController', function($scope) {
    // You can store your 18 pages of data here in the future
    $scope.welcomeMessage = "Welcome back, Blue Knight!";
});
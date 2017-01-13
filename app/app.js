var app = angular.module("myApp", ['ngRoute']);
//app.controller('MainCtrl',function($scope){})


app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/Assignment1", {
        templateUrl : "Features/Assignment1.html",
        controller : "myCtrl"
    })
    .when("/Assignment2", {
        templateUrl : "Features/Assignment2.html",
        controller : "myCalci"
    })
    .when("/Assignment3", {
        templateUrl : "Features/Assignment3.html",
        controller : "employeeCtrl"
    })
    .when("/Assignment4", {
        templateUrl : "Features/Assignment4.html",
        controller : "studentController"
    })
    .when("/Assignment5", {
        templateUrl : "Features/Assignment5.html",
        controller : "validateCtrl"
    })
    .when("/Assignment6", {
        templateUrl : "Features/Assignment6.html",
        controller : "shop"
    });
}]);

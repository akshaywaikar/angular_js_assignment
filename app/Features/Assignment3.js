angular.module("myApp").controller('employeeCtrl', function($scope) {
    $scope.details = [
        {id:1,name:'Jani',technology:'Java'},
        {id:2,name:'Carl',technology:'DB'},
        {id:5, name:'Margareth',technology:'ABAP'},
        {id:3,name:'Hege',technology:'DOT.NET'},
        {id:7,name:'Joe',technology:'Oracle'},
        {id:9,name:'Gustav',technology:'RedHat'},
        {id:4,name:'Birgit',technology:'JS'},
        {id:7,name:'Mary',technology:'FrontEnd'},
        {id:6,name:'Kai',technology:'BackEnd'}
        ];
    $scope.orderByMe = function(detail) {
        $scope.myOrderBy = detail;
    }
});
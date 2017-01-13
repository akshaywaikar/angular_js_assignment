
angular.module("myApp").controller('validateCtrl', function($scope) {
   $scope.details= [];
   $scope.addDetails = function()
   {
       $scope.details.push($scope.firstname);
       $scope.details.push($scope.lastname);
         $scope.details.push($scope.email);
          $scope.details.push($scope.PhoneNo);
           $scope.details.push($scope.optionlist1);
           $scope.details.push($scope.optionlist2);
 
       }

   
});
  
         
         angular.module("myApp").controller('studentController', function($scope) {
            $scope.student = {
               firstName: "Akshay",
               lastName: "Waikar",
               fees:130,
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });
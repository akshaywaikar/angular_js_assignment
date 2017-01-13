 angular.module("myApp").service('calculator',function(){
this.Square=function(x){return x*x};
this.Cube=function(x){return x*x*x};
this.Fact=function(x){
if(x<0){return -1;}
else if(x==0){return 1;}
else{return (x*this.Fact(x-1));}

}
});




angular.module("myApp").controller('myCalci', function($scope,calculator) {
    $scope.number=2;
    $scope.findSquare=function()
    {$scope.result=calculator.Square($scope.number); }
$scope.findCube=function()
{$scope.result=calculator.Cube($scope.number);}
$scope.findFac=function()
{$scope.result=calculator.Fact($scope.number);}

});
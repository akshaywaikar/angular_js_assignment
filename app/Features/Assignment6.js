


angular.module("myApp").controller('shop', function($scope) {
 
   
    $scope.details = [
        {OrderName:'Shirt',price:750, ischecked:false},
		{OrderName:'Rolls',price:150, ischecked:false},
        {OrderName:'T-Shirt',price:350,ischecked:false},
        {OrderName:'Books',price:100,ischecked:false},
		{OrderName:'Watch',price:1500,ischecked:false},
      
        ];
        
 $scope.result=0;
$scope.addRow = function(det){	
if(det.ischecked==true)
{
    $scope.result=$scope.result+det.price;
}
else 
{
    $scope.result=$scope.result-det.price;
}

};
		
});
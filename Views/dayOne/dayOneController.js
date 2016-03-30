myApp.controller("dayOneController",["$scope","$http",function($scope,$http){
   
    $scope.menus=["pizza","burger","sandwich","burrito","taco"];
    $http.get("http://127.0.0.1:52299/JSON/student.json")
    .success(function(data,status,headers,config){
     
        $scope.students=data;
        console.log(data);
        console.log(status);
        
    })
    .error(function(data,status,headers,config){
        
        console.log(data);
        console.log(status);
    })
}])
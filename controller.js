myApp.controller('mainCtrl', function($scope, mainServ){

   $scope.getWeather = function(zipcode) {
       console.log(zipcode);
       mainServ.getWeather(zipcode).then(function(response){
           $scope.weatherData = response;

           $scope.weatherIcon = "http://openweathermap.org/img/w/"+response.weather[0].icon+".png";

           console.log($scope.weatherIcon);
       });
   };

});
myApp.service("mainServ", function($http) {

    this.getWeather = function(zipcode) {
        console.log(zipcode);
        return $http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&APPID=4a8de0edd3d7546cd31267fa4981b5fc")
        .then(function(response){
            return response.data;
        })
    }

});
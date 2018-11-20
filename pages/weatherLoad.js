//function to load weather using city name
function loadCityWeather(){
    
var cityName = document.getElementById("cityName").value;


myURL = 'https://api.apixu.com/v1/current.json?key=aee1f4bcd581463f8c3104119182910&q=' + cityName;//creates URL to be used to query apixu for weather data
                                $.ajax({
                                    url: myURL,
                                    success: function (data) {
                                        image = new Image();
                                        if (data.error) {
                                            image.src = "http://via.placeholder.com/64x64?text=%20"; // Error, so we use blank image for weather. See 'error:' below for another way to include a small blank image
                                        }
                                        else {
                                            image.src = "http:" + data.current.condition.icon; // icon is specified within the data

                                            $('#weatherInf').html('<p> The weather in <strong>'+data.location.name+', '+data.location.region+', '+data.location.country+'</strong> is ' + data.current.condition.text + '</p>'); // current weather in text format
                                            
                                             $('#weatherInfAdd').html('<p>Local time is <strong>'+data.location.localtime+'</strong>, and current temperature in Celcius is <strong>'+ data.current.temp_c+ '°</strong></p>'); // current weather in text format
                                        }
                                        image.onload = function () {
                                            $('#weatherImg').empty().append(image);
                                        };

                                    },
                                    error: function () { // Weather service could not provide weather for requested lat,lon world location
                                        image = new Image();
                                        // A local 64*64 transparent image. Generated from the useful site: http://png-pixel.com/
                                        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAPElEQVR42u3OMQEAAAgDIJfc6BpjDyQgt1MVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgXbgARTAX8ECcrkoAAAAAElFTkSuQmCC";
                                        image.onload = function () {
                                            //set the image into the web page
                                            $('#weatherImg').empty().append(image);
                                        };
                                    }
                                });
}


//function to load weather using long and lat values
function loadWeather(){
    
var strLatValue = document.getElementById("latitude").value;//collects inputed string latitude value
var strLongValue = document.getElementById("longitude").value;//collects inputed string longitude value
    
var latValue = parseFloat(strLatValue, 10);//converts string to a float
var longValue = parseFloat(strLongValue, 10);//converts string to a float
    
myURL = 'https://api.apixu.com/v1/current.json?key=aee1f4bcd581463f8c3104119182910&q=' + latValue.toFixed(7) + ',' + longValue.toFixed(7);//creates URL to be used to query apixu for weather data
                                $.ajax({
                                    url: myURL,
                                    success: function (data) {
                                        image = new Image();
                                        if (data.error) {
                                            image.src = "http://via.placeholder.com/64x64?text=%20"; // Error, so we use blank image for weather. See 'error:' below for another way to include a small blank image
                                        }
                                        else {
                                            image.src = "http:" + data.current.condition.icon; // icon is specified within the data

                                            $('#weatherInf').html('<p> The weather in <strong>'+data.location.name+', '+data.location.region+', '+data.location.country+'</strong> is ' + data.current.condition.text + '</p>'); // current weather in text format
                                            
                                             $('#weatherInfAdd').html('<p>Local time is <strong>'+data.location.localtime+'</strong>, and current temperature in Celcius is <strong>'+ data.current.temp_c+ '°</strong></p>'); // current weather in text format
                                        }
                                        image.onload = function () {
                                            $('#weatherImg').empty().append(image);
                                        };

                                    },
                                    error: function () { // Weather service could not provide weather for requested lat,lon world location
                                        image = new Image();
                                        // A local 64*64 transparent image. Generated from the useful site: http://png-pixel.com/
                                        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAPElEQVR42u3OMQEAAAgDIJfc6BpjDyQgt1MVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgXbgARTAX8ECcrkoAAAAAElFTkSuQmCC";
                                        image.onload = function () {
                                            //set the image into the web page
                                            $('#weatherImg').empty().append(image);
                                        };
                                    }
                                });
}
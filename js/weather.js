function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display = "block";

    //Set default location if one isn't provided
    let location = "Ann Arbor";
    if (document.getElementById("location").value) {
        location = document.getElementById("location").value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    format = "imperial";t
    if (document.getElementById('fahrenheit').checked) {
       format = 'imperial';
    } else if(document.getElementById('celcius').checked) {
        format = 'metric';
    }

    // Your code here.
    console.log("Format is : " + format);

    //set the query  
    let query;
    // Your code here.  
    
    query = 'https://api.openweathermap.org/data/2.5/find?q='+location+'&appID=c1700dcd2e1dd792d01f04975c80879e&units='+format;
    console.log("Query is : " + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    let loc;
    let temp;
    let tempImg;

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc = json['list'][0]['name']
        temp = json['list'][0]['main']['temp']
        console.log(JSON.stringify(json));
        document.getElementById("loc").innerHTML = loc;
        document.getElementById("temp").innerHTML = temp;
        let image = 'http://openweathermap.org/img/w/' + json['list'][0]['weather'][0]['icon'] + '.png';
        let description = json['list'][0]['weather'][0]['description']
        document.getElementById("tempImg").src = image;
        document.getElementById("tempImg").alt = description;
        document.getElementById("tempImg").title = description;
        document.getElementById("weatherType").innerHTML = description;
    });
}

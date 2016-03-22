var accessToken = "YOUR_ACCESS_TOKEN";
var eventName = "YOUR_EVENT_NAME";
var myURL = "https://api.particle.io/v1/devices/events";
var args = "";
var factor = 1;
var lastValue = [0,0,0,0,0,0];
outlets = 4;
function bang()
{	
	//create a XMLHttpRequest object
	ajaxreq = new XMLHttpRequest();
	//set the HTTP message to be sent (usually a special formatted URL)
	ajaxreq.open("POST",myURL,true);
	//set the callback function
	//ajaxreq.onreadystatechange = getPictures;
	//send the request
	ajaxreq.send("name=motorMove&data=" + args + "&private=false&ttl=60&access_token="+ accessToken );
	
}

//manipulate the data based on deviation from the average then multiply by a specified factor to fine tune the optimal range
function passData(gate,value,avg){
	outlet(0,value);
	outlet(1,avg);
	args = value-avg;
	outlet(2,args);
	args = args * factor;
	args = Math.round(args);
	outlet(3, args);
	lastValue[gate] = value;
	args = gate + "," + args;
}

//set multiplier
function multiplier(myFactor){
		factor = myFactor;
}
    	
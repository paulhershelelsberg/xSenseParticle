	var accessToken = "a5c2fe8e8224c148d290112d70b5f86f24e48c45";
	var eventName = "motorMove";
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
function multiplier(myFactor){
		factor = myFactor;
	}
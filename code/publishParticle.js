	var accessToken = "a5c2fe8e8224c148d290112d70b5f86f24e48c45";
	var eventName = "motorInfo";
    var myURL = "https://api.particle.io/v1/devices/events";
    var args = "";
function bang()
{	
	post("bang");
	//create a XMLHttpRequest object
	ajaxreq = new XMLHttpRequest();
	//set the HTTP message to be sent (usually a special formatted URL)
	ajaxreq.open("POST",myURL,true);
	//set the callback function
	//ajaxreq.onreadystatechange = getPictures;
	//send the request
	ajaxreq.send("access_token="+ accessToken + "&name=motorMove&private=true&ttl=60&data=" + args);
	post("sent request to the server");
}
function passData(myArgs){
	args = myArgs;
	post("set args");
	}
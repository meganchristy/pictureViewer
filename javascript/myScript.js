//javascript file

var picList = new Array(6);
var locationData = new Array(6);
var captionData = new Array(6);
var whichPic = 0; //0 means first pic

var fButtonListener;
var bButtonListener;

	//populate array
	picList[0] = "images/p0.jpg";
	picList[1] = "images/p1.jpg";
	picList[2] = "images/p2.jpg";
	picList[3] = "images/p3.jpg";
	picList[4] = "images/p4.jpg";
	picList[5] = "images/p5.jpg";

	locationData[0] = "Location: El Morro, Monte Cristi, Dominican Republic";
	locationData[1] = "Location: C/ Colon, Monte Cristi, Dominican Republic";
	locationData[2] = "Location: Playa El Morro";
	locationData[3] = "Location: C/ Colon, Monte Cristi, Dominican Republic";
	locationData[4] = "Location: El Morro, Monte Cristi, Dominican Republic";
	locationData[5] = "Location: Outreach360, C/ Sanchez, Monte Cristi, Dominican Republic";

	captionData[0] = "View from our sunrise hike!";
	captionData[1] = "Cheesin' with our new friend!";
	captionData[2] = "Relaxing at the beach";
	captionData[3] = "Hanging out in the park!";
	captionData[4] = "Another shot from the sunrise hike";
	captionData[5] = "Kerrie, Sada, Megan, and Kennedy outside La Casita";



window.onload = function() {

	alert("hi there :)");
	alert("have a nice day!");

	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("location").innerHTML = locationData[whichPic];
		document.getElementById("caption").innerHTML = captionData[whichPic];


	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");

	fButtonListener.addEventListener('click',function(event){
		++whichPic;
		if(whichPic >= picList.length){
			whichPic = 0;
		}

		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("location").innerHTML = locationData[whichPic];
		document.getElementById("caption").innerHTML = captionData[whichPic];

	});

	bButtonListener.addEventListener('click',function(event){
		--whichPic;
		if (whichPic < 0){
			whichPic = picList.length-1
		}

		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("location").innerHTML = locationData[whichPic];
		document.getElementById("caption").innerHTML = captionData[whichPic];
	});
};

//location: El Morro, Monte Cristi, Dominican Republic
//img src = "images/p0.jpg"
//caption: View from our sunrise hike!
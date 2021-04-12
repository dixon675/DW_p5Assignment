var vidcapture, ctracker, drawcanvas;

function setup () {

	noFill();


	var cnv = createCanvas(windowWidth/2, windowHeight/2);
	cnv.parent("p5canvas");


	// p5 method for creating a video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*3, vidcapture.height*3);

	vidcapture.hide();

	// start tracker
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt);

	// just for testing
	drawCanvas = document.getElementById('defaultCanvas0');
}


function draw () {
	
	translate(vidcapture.width, 0);
	scale(-1, 1);

	// image(vidcapture, 0, 0);

	var positions = ctracker.getCurrentPosition();

	if (positions) {
		// ctracker.draw(drawCanvas);

		// // canvas colour
		// var backColorR = map(positions[62][0], 0, width, 0, 255);
		// var backColorG = map(positions[62][1], 0, height, 0, 255);

		// buttons
		$('.gen').click(function() {
			console.log("clicked");
			paint(positions);
		})

		$('.clear').click(function() {
			console.log("clicked");
			background(255);
		})
	}
}

function paint(pos) {
	for(var x=0; x < 4; x++) {
		for(var y=0; y < 4; y++){

			// random variables
			var p1 = random(2 * PI);
			var p2 = random(2 * PI);

			var w = random(500);
			var h = random(500);

			var r1 = floor(random(0, 70));
			var r2 = floor(random(0, 70));
			var r3 = floor(random(0, 70));

			var rw = floor(random(0, 10));
				
			// colour and weight
			var xColor = map(pos[r1][0], 0, width, 0, 255);
			var yColor = map(pos[r2][1], 0, height, 0, 255);
			var zColor = map(pos[r3][1], 0, height, 0, 255);

			strokeWeight(rw);
			stroke (xColor, yColor, zColor);

			// shapes
			arc(pos[r1][0], pos[r2][1], w, h, p1, p2);
		}
	}

	for(var i=0; i < 4; i++) {
		for(var j=0; j < 4; j++){

			// random variables
			var l1 = floor(random(0, 70));
			var l2 = floor(random(0, 70));
			var l3 = floor(random(0, 70));
			var l4 = floor(random(0, 70));

			var rw = floor(random(0, 10));
			
			// colour and weight
			var l1Color = map(pos[l1][0], 0, width, 0, 255);
			var l2Color = map(pos[l2][0], 0, width, 0, 255);
			var l3Color = map(pos[l3][0], 0, width, 0, 255);


			strokeWeight(rw);
			stroke (l1Color, l2Color, l3Color);

			// line
			line(pos[l1][0], pos[l3][1], pos[l2][0], pos[l4][1]);
		}
	}
}
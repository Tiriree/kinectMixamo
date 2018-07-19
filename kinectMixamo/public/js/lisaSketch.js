var liveData = false;

// recorded data variables
var sentTime = Date.now();
var currentFrame = 0;

function setup() {
  myCanvas = createCanvas(500, 500);
  background(0);
  noStroke();
  if (liveData) initKinectron();
}

function draw() {
  if (Date.now() > sentTime + 20) {
    bodyTracked(recorded_skeleton[currentFrame])
    sentTime = Date.now();
    if (currentFrame < recorded_skeleton.length-1) {
      currentFrame++;
    } else {
      currentFrame = 0;
    }
  }}

function bodyTracked(body) {
  background(0, 130);
  var hands = [];
  // Get all the joints off the tracked body and do something with them
  for(var jointType in body.joints) {
    joint = body.joints[jointType];
    drawJoint(joint);
  }
}

// Draw skeleton
function drawJoint(joint) {
  fill(100);
  // Kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * myCanvas.width, joint.depthY * myCanvas.height, 15, 15);
  fill(200);
  // Kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * myCanvas.width, joint.depthY * myCanvas.height, 3, 3);
}

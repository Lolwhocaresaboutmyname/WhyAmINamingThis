song="";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
scoreLeftWrist = "";
scoreRightWrist= "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded?")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;

        console.log("Left Wrist X = "+leftWristX+", left Wrist Y= "+leftWristY+", Left Wrist Score= "+scoreLeftWrist);
        console.log("Right Wrist X = "+rightWristX+", Right Wrist Y= "+rightWristY+", Right Wrist Score= "+scoreRightWrist);
    }
}

function draw(){
    Image(video, 0, 0, 600, 500, )
}

function preload(){
    song = loadSound("music.mp3");
    song2 = loadsound("music2.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}

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

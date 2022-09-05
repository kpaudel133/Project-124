function setup(){
    video = createCapture(VIDEO);
    video.size(700,700);
    video.position(200, 80);

    canvas = createCanvas(550,550);
    canvas.position(950,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
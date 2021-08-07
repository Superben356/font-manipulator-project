noseX=0;
noseY=0;

rightWristx=0;
leftWristx=0;
difference=0;

function preload() {
    video = createCapture(VIDEO);
    video.size(550,550);

   canvas = createCanvas(550 , 550);
  canvas.center();
   
   
   poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("rightWristx="+rightWristx+"leftWristx="+leftWristx+"difference="+difference);
    }

}



function draw(){
    background('#FF0000');
    square(noseX,noseY,difference);
    document.getElementById("square_size").innerHTML="width and height of the square ="+difference+"px";
}

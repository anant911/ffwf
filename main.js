noseX=0;
noseY=0;

function preload()
{
hair= loadImage('https://i.postimg.cc/MKX6ccs4/2-21977-moustache-png-transparent-images-freddie-mercury-mustache-png.png');
}

function setup() 
{
canvas=createCanvas(301,301);
canvas.center();
video=createCapture(VIDEO);
video.size(301,301);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video,0,0, 301,301);
    image(hair, noseX, noseY, 90, 70);

}

function takephoto()
{
    save('hacker.png');
}

function modelLoaded()
{
    console.log('me is loaded poseNet');
}

function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
noseX=results[0].pose.nose.x-35;
noseY=results[0].pose.nose.y-10;
    }
}
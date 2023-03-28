objectDetector="";

img ="";
objects =[];
status="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded(){
  console.lod("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);

}

function draw()
{
    image(img, 0 ,0,640,420);

    if(status !="")
    {
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";

      fill(255,0,0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + "" + percent + "%", objects[i].x+15, objects[i].y+120);
      noFill();
      stroke(255,0,0);
      rect(objects[i].x,objects[i].y+100, objects[i].width, objects[i].height+88);
    }
    }
   /* fill("#FF0000");
    text("Dog" , 45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat", 320,120);
    nofill();
    stroke("#FF0000");
    rect(300,90 , 270,320);*/
}

function gotResult(error,results){
  if(error){
    console.log(error);
  }
  console.log(results);
  objects = results;
}
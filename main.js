function preload(){

}

function setup(){
    canvas = createCanvas(680,380);
    canvas.position(100,270);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    
}
function Apply_filter(){
    tint_color = document.getElementById("filter_color_input").value;
}
function draw(){
    image(video,0,0,680,380);
    tint(tint_color);
}
function take_snapshot(){
    save("picture.png");
}

let button;
back = 0;
x =window.innerWidth;
y = window.innerHeight;
a=0;
a2=0;
background_col=0;
b=window.innerHeight;
b2=window.innerHeight;
rate = 10;
choice = 0;
function setup() {
  createCanvas(x,y);
  //size(width,height);
  background(0);
  textSize(32);
          background(0);

      stroke(random(255),random(255),random(255));  
      text("Click a button", width/2, height/2); 
button = createButton('Lines');
button.position(0, 0);
button.mousePressed(changeBG);
button2 = createButton('Circles');
button2.position(0, 20);
button2.mousePressed(changeBG2);
button3 = createButton('background');
button3.position(0, 40);
button3.mousePressed(changeBG3);
button20 = createButton('Triangle');
button20.position(0, 100);
button20.mousePressed(trianglee);
slider = createSlider(0, 1000, 0,0.01);
slider.position(0, 60);
slider.style('width', '100px');
slider2 = createSlider(0, 10, 3,0.01);
slider2.position(0, 80);
slider2.style('width', '100px');


}
function trianglee(){
  console.log('tri');
  choice = 2;
  background(back);

    //background_col = 0;
    stroke(random(255),random(255),random(255));  
    a=0;
    a2=0;
    b=window.innerHeight;
    b2=window.innerHeight;
}


function changeBG3() {
if(back==0){
  back = 255;
     background(back);

  console.log(back);
  redraw();
}
else{
back = 0;
   background(back);
   redraw();
}
}



function changeBG() {
  choice = 1;
   background(back);
  
    //background_col = 0;
    stroke(random(255),random(255),random(255));  
    a=0;
    a2=0;
    b=window.innerHeight;
    b2=window.innerHeight;
}
function changeBG2() {
  choice = 0;
   background(back);

    //background_col = 0;
    stroke(random(255),random(255),random(255));  
    a=0;
    a2=0;
    b=window.innerHeight;
    b2=window.innerHeight;
}
function draw() {
  let val = slider.value();
  valt = val;
  let ratechange = slider2.value();
  rate = ratechange;

  switch(choice){
  case 0:
        fill(color(random(255),random(255),random(255)));
      line(a, valt, width, b);
       fill(color(126,31,37));
      a-=10*rate;
      b+=5*rate;
       fill(color(126,31,37));
      circle(a2, valt, width, b2);
      a2+=-10*rate;
      b2+=-5*rate;  
      break;
  case 1:
        fill(color(random(255),random(255),random(255)));
        line(a, valt, width, b);
         fill(color(126,31,37));
        a-=10*rate;
        b+=5*rate;
         fill(color(126,31,37));
        line(a2, valt, width, b2);
        a2+=-10*rate;
        b2+=-5*rate;
        break;
  case 2:
        var c = color(0, 126, 255, 0);
        fill(c);
        stroke(color(random(255),random(255),random(255)));
        triangle(width/2-100, 100+valt, width/2+100, 100+valt, width/2, 300+valt);
         //x,y,x1,y1,x2,y2
        break;
  
  }



}



function keyPressed() {

}

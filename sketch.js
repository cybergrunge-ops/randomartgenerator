let img1;
let img2;
let img3; 
let img4;
let a; let d; let b;
let filters; let r1; let r2; let randfilt1; let randfilt2;





function preload(){

colorMode(HSB, 100);
let filters = ['DILATE','GRAY','INVERT','THRESHOLD','ERODE','BLUR, 6','BLUR,0','POSTERIZE,10','posterize,4','BLUR,10'];


let r1 =random(0,9);
let r2 =random(0,9);

let randfilt1 = filters[r1] ;

let randfilt2 = filters[r2] ;

img1 = loadImage("tinypic18/" + int(random(1,7880)) + ".jpg");
img2 = loadImage("tinypic18/" + int(random(1,7880)) + ".jpg");
img3 = loadImage("tinypic18/" + int(random(1,7880)) + ".jpg");
img4 = loadImage("tinypic18/" + int(random(1,7880)) + ".jpg");

d = int(random(1,240));
a = int(random(1,240));

b = int(random(1,240));

colorMode(HSB, 100);

}


function setup(){



 colorMode(HSB, 100);
createCanvas(600, 600);
 
tint(random(1,100), random(1,100), random(1,100), random(1,100));
 img1.resize(600,600);
 
tint(random(1,100), random(1,100), random(1,100), random(1,100));
 img2.resize(600,600);
 
tint(random(1,100), random(1,100), random(1,100), random(1,100));
 img3.resize(600,600);

frameRate(1);

}




function draw(){


  colorMode(HSB, 100);

img1.resize(600,600);

img2.resize(600,600);
  
img3.resize(600,600);

img4.resize(600,600);
  

background(d, a, b);
blend(img3, 0, 0,600,600, 0, 0,600,600, DARKEST);
tint(random(1,100), random(1,100), random(1,100), random(1,100));

blend(img1, 0, 0,600,600, 0, 0,600,600, DIFFERENCE);
tint(random(1,100), random(1,100), random(1,100), random(1,100));

blend(img4, 0, 0,600,600, 0, 0,600,600, HARD_LIGHT);

tint(random(1,100), random(1,100), random(1,100), random(1,100));

blend(img2, 0, 0,600,600, 0, 0,600,600, DIFFERENCE);
tint(random(1,100), random(1,100), random(1,100), random(1,100));
}

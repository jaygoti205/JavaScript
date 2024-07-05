//rectangle by line
let crect=document.getElementById("rect");
let rect=crect.getContext("2d");
rect.beginPath();
rect.moveTo(20,20);//start
rect.lineTo(300,20);//Upper line(x,y)
rect.lineTo(300,300);//right line
rect.lineTo(20,300);//bottom line
rect.lineTo(20,20);//left line
rect.stroke();

//triangle
let ctri=document.getElementById("tri");
let tri=ctri.getContext("2d");
tri.beginPath();
tri.strokeStyle="red";
tri.lineWidth="2";
tri.moveTo(30,30);
tri.lineTo(300,300);
tri.lineTo(30,300);
tri.lineTo(30,30);
tri.stroke();

//rectangle using "rect" and "fillRect"
let crect2=document.getElementById("rect2");
let rect2=crect2.getContext("2d");
rect2.beginPath();
rect2.moveTo(10,10);
rect2.rect(10,10,150,150);
rect2.stroke();
rect2.fillRect(165,165,150,150);
rect2.stroke();

//circle
let ccir=document.getElementById("cir");
let cir=ccir.getContext("2d");
cir.strokeStyle="red";
cir.beginPath();
cir.arc(175,175,150,0,7)
cir.stroke();

cir.beginPath();
cir.arc(175,175,100,0,5)
cir.stroke();

cir.beginPath();
cir.arc(175,175,50,0,3)
cir.stroke();

cir.beginPath();
cir.arc(175,175,10,0,4)
cir.stroke();

//Curve
let ccurve=document.getElementById("curve");
let curve=ccurve.getContext("2d");
curve.beginPath();
curve.moveTo(10,10);
curve.quadraticCurveTo(175,344,344,10)
curve.lineTo(10,10);
curve.stroke();

//Bezier Curve
let cbcurve=document.getElementById("bcurve");
let bcurve=cbcurve.getContext("2d");

bcurve.beginPath();
bcurve.moveTo(10,10);
bcurve.bezierCurveTo(10,200,325,200,325,10);
bcurve.stroke();

//smile
let csmile=document.getElementById("smile");
let smile=csmile.getContext("2d");

smile.beginPath();
smile.arc(175,175,125,0,7)
smile.stroke();

smile.beginPath();
smile.arc(125,125,10,0,7)
smile.stroke();

smile.beginPath();
smile.arc(225,125,10,0,7)
smile.stroke();

smile.beginPath();
smile.moveTo(175,150);
smile.lineTo(200,200);
smile.lineTo(175,200);
smile.stroke();

smile.beginPath();
smile.moveTo(120,225);
smile.quadraticCurveTo(180,300,250,225)
smile.lineTo(120,225);
smile.stroke();

//scale
let cscl=document.getElementById("scl");
let scl=cscl.getContext("2d");
scl.beginPath();
scl.moveTo(0,0);
scl.rect(100,100,150,150);
scl.scale(10,50);
scl.stroke();


//rotate
let crot=document.getElementById("rot");
let rot=crot.getContext("2d");
rot.beginPath();
rot.moveTo(100,100);
rot.rotate(0.6);
rot.rect(150,10,150,150);
rot.stroke();

//translate
let ctran=document.getElementById("tran");
let tran=ctran.getContext("2d");
tran.beginPath();
tran.moveTo(0,0);
tran.rect(50,50,175,175);
tran.translate(100, 100);
tran.rect(50,50,175,175);
tran.stroke();

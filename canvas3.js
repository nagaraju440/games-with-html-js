
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
var x=200,y=200,dx=5,dy=5,radius=30;
var p,q;

    window.addEventListener("mousemove",function(e){
    p=e.clientX;
    q=e.clientY;
        })
var t=39;
function Circle(x,y,dx,dy) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=10;

    this.update=function(){
        if(this.x +30 >1350 || this.x-30 < 0){
            this.dx=-this.dx;
        }
        if(this.y+30 >600 || this.y-30 < 0){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
    

    }

    var color=["red","green","blue","orange","voilet","black","indigo"];
    this.c=Math.floor(Math.random()*8);
    this.draw= function() {

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.arc(p,q,this.radius,0,2*Math.PI,false);
        ctx.arc(p,q+70,this.radius,0,2*Math.PI,false);

        ctx.strokeStyle=color[this.c];
        ctx.stroke();
        ctx.fillStyle=color[7-this.c];
        ctx.fill();

    }
   
}


var  array=[];
for(var i=0;i<201;i++){
    var x=Math.floor(Math.random()*window.innerWidth);
var y=Math.floor(Math.random()*window.innerHeight);
var dx=Math.random()-0.5;
var dy=Math.random()-0.5;
var radius=Math.floor(Math.random()*40);
// x=600,y=300;
// x=x+50;
    array[i]=(new Circle(x,y,dx,dy,radius));
}


function animate() {
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    
 req=requestAnimationFrame(animate);
for(var i=0;i<array.length-2;i++){
    array[i].update();
    array[i].draw();

}
}
    animate();

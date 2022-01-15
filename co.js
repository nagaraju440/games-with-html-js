


var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var s,t;
function Cou(x,y){
    this.x=x;
    this.y=y;
    this.q=80;
    this.f=160;
    this.draw=function(){
        
   
   
    c.fillRect(this.x,this.y, 10, this.q);
 
    }
    this.moveup=function(){
         this.y=160;
   
         setTimeout(function(){
            boll.movedown();
        
            
         },500)
    }
   this.movedown=function(){
       this.y=255;
   }
    this.bolldraw=function(){
        s=this.y;
        t=this.x;
        
        c.beginPath();
c.arc(this.x, this.y, 25, 0, 2 * Math.PI);
c.stroke();

    }
this.update=function(){
        if(this.x>500){
            this.q=Math.floor(Math.random()*50)+20;
            this.y=280-this.q
            this.x=0;
            // this.x=-(Math.floor(Math.random()*550)+50);
            // console.log(this.x)
        }
        this.x=this.x+5;
        this.y=this.y;
        
        if(this.x>t-25 && this.y<s-25){
    alert("hii")
        }
    }
    
    console.log("hiiii");
}
var array=[],p=20,q;
var boll=new Cou(470,255);
for(i=0;i<2;i++){
    q=200;
array[i]=new Cou(p,q);
p=p-300
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,500,500)
 
    boll.bolldraw();
for(i=0;i<2;i++){
    array[i].update();
    array[i].draw();
}

}
// setInterval(animate,100)
animate();

window.addEventListener("keydown",function(e){
    var p=e.keyCode;
    console.log(p)
   if(p==38){
    boll.moveup();
   }
})
// window.addEventListener("keyup",function(e){
//     var p=e.keyCode;
//     console.log(p)
//    if(p==38){
//        boll.movedown(); 
//    }
// })


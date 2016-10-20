console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");

function moveright(it) {
    var margin = 0;
    if(margin<400)
   {margin =margin+5;
    it.style.marginLeft=margin+"px";}
    
 }


    

mad.onclick=function(){
    
 var intr= setInterval(moveright(mad),100);};

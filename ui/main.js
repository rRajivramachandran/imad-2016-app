console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");

function moveright(it) {
    var margin = 0;
    if(margin<300)
   {margin =margin+10;
    it.style.marginLeft=margin+"px";}
    
 }


    

mad.onclick=function(){
    
 var intr= setintravel(moveright(mad),100);};

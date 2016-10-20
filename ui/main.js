console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");
 var margin = 0;
function moveright(it) {

    if(margin<400)
   margin =margin+10;
    it.style.marginLeft=margin+"px";
    
 }


    

mad.onclick=function(){
    
 var interval= setInterval(moveright(mad),100);};

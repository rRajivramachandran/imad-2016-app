console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");
var margin = 0;
function moveright() {
    while(margin<300)
    margin =margin+5;
    mad.style.marginLeft= margin+"px";
    
}


    

mad.onclick= function() {
var intra= setInterval(moveright,10);};
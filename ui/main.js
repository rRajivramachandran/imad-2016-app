console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");
var margin = 0;
function moveright() {
    margin =margin+10;
    mad.style.marginLeft= margin+"px";
    
}


    

mad.onclick= function() {
var intra= setInterval(moveright,100);};
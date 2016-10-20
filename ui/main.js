console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");

function moveright(it) {
    var margin = 0;
    if(margin<300)
    margin =margin+5;
    it.style.marginLeft= margin+"px";
    
}


    

mad.onclick= function() {
var intra= setInterval(moveright(mad),10);};
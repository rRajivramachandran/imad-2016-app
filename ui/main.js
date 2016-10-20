console.log('Loaded!');
var rr= document.getElementById("so");
rr.innerHTML="kk";
var mad = document.getElementById("madi");

function moveright(it) {
    var margin = 0;
    while(margin<300)
   {margin =margin+10;
    it.style.marginLeft= margin+"px";}
    
};


    

mad.onclick= moveright(mad);

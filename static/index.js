/* Grids On The Fly */

$(document).ready(function() {
   register("#main #topright", "clock", "./tempo/index.html", iframeTemplate);
   register("#main #middle", "abas-meio", "./abas/barraAbas.html", iframeTemplate);
   register("#main #middle-tabs", "abas", "./abas/barraAbasTop.html", iframeTemplate);
   register("#main #topmiddle", "mid", "./destaques/index.html", iframeTemplate);
   register("#main #bottom", "typing", "./typing/index.html", iframeTemplate);
   register("#main #bottomright", "tempo", "./tempo-inpe/index.html", iframeTemplate);

   compile(); 
//   startTagVisorAnimationEngine();
});

function startEngine() { 
   setTimeout("cicleMidia()",TEMPO_INICIO_MIDIA);
   startTagVisorAnimationEngine();
} 

function cicleMidia() { 
   setTimeout( function () { 
	var doc = $("#main #middle #abas").get();
	doc = document.getElementById("abas-meio").contentDocument;
	cc.send( doc.getElementById("midia").contentDocument, "container", "rotate");
	cicleMidia();
   }, TEMPO_REFRESH_MIDIA);
} 

function startTagVisorAnimationEngine() { 
    if(document.location.toString().indexOf("mode")>-1) { 
        var param = document.location.toString().split("mode=");
        if(param[1]=="tv") { 
            document.getElementById("viewport").style.width="1080";
            document.getElementById("viewport").style.height="1920";
            tv.tickMode = true;
            tv.add($('#animation li'));
            animate();
		} 
	} 
} 
function animate() { 
    tv.play();
	setTimeout("animate()",TEMPO_REFRESH_ABAS);
} 



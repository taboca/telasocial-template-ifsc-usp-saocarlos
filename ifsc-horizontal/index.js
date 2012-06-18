$(document).ready(function() {
   register("/main/topo", "cabecalho", "./header/index.html", iframeTemplate);
   register("/main/ladoe", "meio", "./twitter/test.html", iframeTemplate);
   register("/main/ladod", "mid", "./ifsc/grafico.html", iframeTemplate);
   register("/main/fundo", "clima", "./typing/index.html", iframeTemplate);
   compile();   
   setTimeout('startEngine()',5000);
});

function startEngine() { 
   tvMode();
   setTimeout("cicleMidia()",TEMPO_INICIO_MIDIA);
} 

function cicleMidia() { 
   setTimeout( function () { 
	doc = document.getElementById("meio").contentDocument;
	cc.send( doc.getElementById("galeria").contentDocument, "container", "rotate");
	cicleMidia();
   }, TEMPO_REFRESH_MIDIA);
} 

function tvMode() { 
  //document.getElementById("viewport").style.width="1920";
  //document.getElementById("viewport").style.height="1080";
  animate();
} 

function animate() { 
  tv.add($('#animation li'));
  tv.play();
  setTimeout("animate()",TEMPO_REFRESH);
} 



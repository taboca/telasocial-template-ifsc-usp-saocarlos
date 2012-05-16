
c = require("choreographer");
t = require("timer");

var layoutVertical =  {

        name   : __appName,
        target : __targetName,
        targetId : __targetId,
        _coreDoc: null,

        tabsColors: ['background-color:rgb(253,181,37);','background-color:rgb(100,197,210);','background-color:rgb(14,148,171)'],
        tabsPanelColors: ['background-color:rgb(253,181,37);','background-color:rgb(100,197,210);','background-color:rgb(14,148,171);'],
        tabsIds: ['tab1','tab2','tab3'],
        tabsTitles: ['Acontece','Fotos','Defesas'],
        tabsPanelId: ['area_panel1','area_panel2','area_panel3'],

	tabsTotal: 0,
        movepos : 0,
        moveWidth: 1080, 

	style : "", html: "",
       
        pass: new Array(), 
 
        kick: function () {
		this.movepos+=2;
                this._coreDoc.getElementById("pointer").style.left=this.movepos+"px";
		var currIndex = Math.floor(this.movepos/this.tabsWidth); 

		if(currIndex<this.tabsTitles.length) { 
 		   if(!this.pass[currIndex]) { 
			this.pass[currIndex]=true;		
			this._service_jquery(".panel",this._coreDoc).attr("style","display:none");
                	this._coreDoc.getElementById(this.tabsPanelId[currIndex]).setAttribute("style","display:block");


			this._send(this._coreDoc.getElementById(this.tabsPanelId[currIndex]),"social-focus",null);

                	this._coreDoc.getElementById("panelContainer").setAttribute("style",this.tabsPanelColors[currIndex]);
 		   } 
		} 
		if(this.movepos > 1080 ) { 
			this.movepos = 0;
			this.pass= new Array();
		} 
        },

	delayedStart : function () { 
		var importedElement = this._coreDoc.createElement("div");
		importedElement.innerHTML =  this.html;

		this._coreDoc.getElementById(this._getId()).appendChild(importedElement);

		this.tabsWidth = parseInt(1060/this.tabsTitles.length);
		for(var i=0;i<this.tabsTitles.length;i++) { 
			var tdTab = this._coreDoc.createElement("td");
			tdTab.setAttribute("style",this.tabsColors[i]+";width:"+this.tabsWidth+"px");
			tdTab.setAttribute("id",this.tabsIds[i]);
   			tdTab.innerHTML="<div class='tab' >"+this.tabsTitles[i]+"</div>";
			this._coreDoc.getElementById("tabContainer").appendChild(tdTab); 

			var divPanel = this._coreDoc.createElement("div");
			divPanel.setAttribute("class","panel");
			divPanel.setAttribute("style",this.tabsPanelColors[i]);
			divPanel.setAttribute("id",this.tabsPanelId[i]);

			this._coreDoc.getElementById("panelContainer").appendChild(divPanel); 
		} 
		this._coreDoc.getElementById("panelContainer").setAttribute("colspan",this.tabsTitles.length);

	} ,


	init : function () {
	 	var style = this._coreDoc.createElementNS("http://www.w3.org/1999/xhtml", "style");
		this._coreDoc.getElementById("headtarget").appendChild(style);
		style.innerHTML=this.style; 
	},

	start: function () { 

	},

	asyncHTML: function (data) {
		this.html = data;
		this.delayedStart();
	},
	asyncStyle: function (data) {
		var style = this._coreDoc.createElementNS("http://www.w3.org/1999/xhtml", "style");
		this._coreDoc.getElementById("headtarget").appendChild(style);
		style.innerHTML=data;
	},

	init : function () {
		var self = this;
		c.load("./org/ifsc/layout/layout.html", function s(d) {
			self.asyncStart(d);
		} , function e(i) { console.log(i) } );
		c.load("./org/ifsc/layout/style.css", function s(d) {
			self.asyncStyle(d);
		} , function e(i) { console.log(i) } );
	}

}

c.register(layoutVertical);

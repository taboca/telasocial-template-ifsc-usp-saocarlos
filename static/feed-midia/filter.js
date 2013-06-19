
doFilter = function (that) { 
    var src = DEFAULT_MIDIA;
	var title = $(that).find('title').text();
	var docDate=new Date();
	var docDateString = title.split("/");
	var docDay = docDateString[0];
	var docMonth = docDateString[1];
	var docYear = docDateString[2];
	docDate.setFullYear(parseInt(docYear),parseInt(docMonth-1),parseInt(docDay));
	var today = new Date();
	if (docDate>=today) { 
		var link = $(that).find('link[rel="enclosure"]');
		if(link.attr("rel") == "enclosure" ) { 
			var srcLink = link.attr("href");
       		if(srcLink.indexOf("jpg")>-1 || srcLink.indexOf("gif")>-1) {
			  src = srcLink;
       		}
		} 
	} 
    return {'src':src};
}


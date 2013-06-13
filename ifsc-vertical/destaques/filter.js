doFilter = function (that) { 
 var t   = $(that).find('title').text();
 var d = $(that).find('description').text();
 $('#temp').html(t);
 var tt = $('#temp').text();	
 $('#temp').html(d);
 var dd = $('#temp').text();	
 return {'title':tt, 'description':dd};
}


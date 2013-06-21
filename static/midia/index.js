$(document).ready(function() {
  register("/main/top", "thumbs", "./thumbs/index.html", iframeTemplate);
  register("/main/hidden", "proxy", "./feed-midia/index.html", iframeTemplate);
  register("/main/middle", "show", "./show/index.html", iframeTemplate);
  compile();   
});




!function(e){function t(e){for(var t=0;t<i.length;t++)"viewport"==i[t].name&&(i[t].content=e)}function n(){t("width=device-width, minimum-scale=1.0, maximum-scale=1.0")}var i=e.getElementsByTagName("meta");navigator.userAgent.match(/iPhone/i)&&(n(),e.addEventListener("touchstart",function(){t("width=device-width, minimum-scale=0.25, maximum-scale=1.6")},!1),e.addEventListener("touchend",function(){n()},!1))}(document);
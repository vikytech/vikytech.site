function terminalEffect(e,t,n){void 0===n&&(n=["#000"]);var i=1,o=1,l=!1,r=document.getElementById(t);r.setAttribute("style","color:"+n[0]),window.setInterval(function(){0===i&&!1===l?(l=!0,r.innerHTML=e[0].substring(0,i),window.setTimeout(function(){var t=n.shift(),t=(n.push(t),e.shift());e.push(t),o=1,r.setAttribute("style","color:"+n[0]),i+=o,l=!1},1e3)):i===e[0].length+1&&!1===l?(l=!0,window.setTimeout(function(){i+=o=-1,l=!1},1e3)):!1===l&&(r.innerHTML=e[0].substring(0,i),i+=o)},70)}terminalEffect(["Full-Stack Developer","Consultant"],"roles",["tomato","rebeccapurple","lightblue"]);
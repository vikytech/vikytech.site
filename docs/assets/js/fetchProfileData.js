const encryptedIdElement=document.getElementById("id");var encryptedId=null;function fetchProfileDetails(e){var t=new XMLHttpRequest;t.withCredentials=!1,t.addEventListener("readystatechange",function(){this.readyState===this.DONE&&console.log(this.responseText)}),t.open("GET","https://api.rajkumarjain.com/api/v1/customer/others-profile/"+e),t.setRequestHeader("authority","api.rajkumarjain.com"),t.setRequestHeader("accept","application/json, text/plain, */*"),t.setRequestHeader("accept-language","en-US,en-IN;q=0.9,en;q=0.8"),t.setRequestHeader("content-type","application/json"),t.setRequestHeader("Access-Control-Allow-Origin","*"),t.setRequestHeader("Access-Control-Allow-Credentials","true"),t.setRequestHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT"),t.setRequestHeader("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),t.setRequestHeader("token","cdb2bd0c-72a7-4ba0-91ec-7e1eaf9fd759"),t.send(null)}$(encryptedIdElement).change(function(){fetchProfileDetails(encryptedId=encryptedIdElement.value)});
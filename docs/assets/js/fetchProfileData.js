

const encryptedIdElement = document.getElementById('id');
var encryptedId = null;
$(encryptedIdElement).change(function () {

    encryptedId = encryptedIdElement.value;
    fetchProfileDetails(encryptedId);
});


function fetchProfileDetails(encryptedId) {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://api.rajkumarjain.com/api/v1/customer/others-profile/"+encryptedId);
    xhr.setRequestHeader("authority", "api.rajkumarjain.com");
    xhr.setRequestHeader("accept", "application/json, text/plain, */*");
    xhr.setRequestHeader("accept-language", "en-US,en-IN;q=0.9,en;q=0.8");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    // xhr.setRequestHeader("dnt", "1");
    // xhr.setRequestHeader("origin", "https://rajkumarjain.com");
    // xhr.setRequestHeader("referer", "https://rajkumarjain.com/");
    // xhr.setRequestHeader("sec-ch-ua", "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"");
    // xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
    // xhr.setRequestHeader("sec-ch-ua-platform", "\"macOS\"");
    // xhr.setRequestHeader("sec-fetch-dest", "empty");
    // xhr.setRequestHeader("sec-fetch-mode", "cors");
    // xhr.setRequestHeader("sec-fetch-site", "same-site");
    xhr.setRequestHeader("token", "cdb2bd0c-72a7-4ba0-91ec-7e1eaf9fd759");
    // xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36");

    xhr.send(data);
};
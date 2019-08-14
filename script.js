window.onload = function name(params) {

    var request = new XMLHttpRequest();


    request.onreadystatechange = function () {
        console.log(request);
    }


    request.open('GET', "data.json", true);
    request.send();
  
};
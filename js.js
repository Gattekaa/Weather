let loc = document.getElementById("cidade");
let tempValue = document.getElementById("temperatura");
let climate = document.getElementById("tempo");

function maiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

window.addEventListener("load", () =>{
    let long;
    let lat;
    var climat = document.getElementById("celsius")
    //if (document.getElementById("celsius") === null) {
    //    document.getElementById("celsius").style.display = 'none';
    //} else {
    //    document.getElementById("celsius").style.display = 'true';
    //}

    if(climat != null) {
        document.getElementById("celsius").style.display = 'none';
    }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=a3bfa74f3f7c8493c8f39b2a6164e112`
            fetch(api)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const {name} = data;
                const {feels_like} = data.main;
                const {id, main, description} = data.weather[0];
                loc.textContent = name;
                climate.textContent = maiuscula(description);
                
                tempValue.textContent = Math.round(feels_like-273);
                document.getElementById("celsius").style.display = 'true';
            })

            if(climat !== null) {
                document.getElementById("celsius").style.display = 'inline';
            }


            
        })
    }
    
})
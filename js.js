let loc = document.getElementById("cidade");
let tempValue = document.getElementById("temperatura");
let climate = document.getElementById("tempo");

function maiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

window.addEventListener("load", () => {
    let long;
    let lat;
    const climat = document.getElementById("celsius")
    const fundo = document.getElementById("cardweather")

    var data = new Date();
    var hora    = data.getHours();
    console.log(data, hora)

    // if (hora >= 17) {
    //     document.getElementById("cardweather").style.backgroundImage = "url('./imagens/ceuiddle.jpg')";
    // } else{
    //     document.getElementById("cardweather").style.backgroundImage = "url('./imagens/ceunoite.jpg')";
    // }

    if (climat != null) {
        document.getElementById("celsius").style.display = 'none';
    }

    if (navigator.geolocation) {
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
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main, description } = data.weather[0];
                    loc.textContent = name;
                    climate.textContent = maiuscula(description);

                    tempValue.textContent = Math.round(feels_like - 273);
                    document.getElementById("celsius").style.display = 'true';
                    var status = document.getElementById('tempo').innerHTML;
                    //console.log(status)

                    if (climat !== null) {
                        document.getElementById("celsius").style.display = 'inline';
                    }
        
                    if (status == "Nublado") {
                        document.getElementById("cardweather").style.backgroundImage = "url('./imagens/nublado.jpg')";
                        document.getElementById("button").style.backgroundColor = 'rgba(48, 46, 46, 0.808)';
                    }
                    if (status == "Céu limpo") {
                        document.getElementById("cardweather").style.backgroundImage = "url('./imagens/ceulimpo.jpg')";
                        document.getElementById("button").style.backgroundColor = 'rgba(48, 46, 46, 0.808)';
                    }
                    if (status == "Nuvens dispersas") {
                        document.getElementById("cardweather").style.backgroundImage = "url('./imagens/nuvensdispersas.jpg')";
                        document.getElementById("button").style.backgroundColor = 'rgba(48, 46, 46, 0.808)';
                    }
                    if (status == "Chuva leve") {
                        document.getElementById("cardweather").style.backgroundImage = "url('./imagens/chuva.jpg')";
                        document.getElementById("button").style.backgroundColor = 'rgba(48, 46, 46, 0.808)';
                    }
                    
                })

                
            
        })
        
    }


})

// window.addEventListener("click", () => {
//     window.location.reload()
// })


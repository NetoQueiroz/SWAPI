var result

function GetSwApi(){
    let id = Math.floor(Math.random()*84)+1;
    let request = new XMLHttpRequest();
    request.open('GET', `https://swapi.dev/api/people/${id}`, true);

    request.onload = function() {
    if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
        // Success!
        this.result = JSON.parse(request.responseText)

        var nome = document.getElementById('nome')
        var height = document.getElementById('height')

        var mass = document.getElementById('mass')
        var hair_color = document.getElementById('hair_color')
        var skin_color = document.getElementById('skin_color')
        var eye_color = document.getElementById('eye_color')
        var birth_year = document.getElementById('birth_year')
        var gender = document.getElementById('gender')
        var homeworld = document.getElementById('homeworld')
        var films = document.getElementById('films')
        var species = document.getElementById('species')
        var vehicles = document.getElementById('vehicles')
        var starships = document.getElementById('starships')
        var created = document.getElementById('created')
        var edited = document.getElementById('edited')
        var url = document.getElementById('url')



        nome.innerHTML = this.result.name
        height.innerHTML = this.result.height
        mass.innerHTML = this.result.mass
        hair_color.innerHTML = this.result.hair_color
        skin_color.innerHTML = this.result.skin_color
        eye_color.innerHTML = this.result.eye_color
        birth_year.innerHTML = this.result.birth_year
        gender.innerHTML = this.result.gender
        homeworld.innerHTML = this.result.homeworld
        films.innerHTML = this.result.films
        species.innerHTML = this.result.species
        vehicles.innerHTML = this.result.vehicles
        starships.innerHTML = this.result.starships
        created.innerHTML = this.result.created
        edited.innerHTML = this.result.edited
        url.innerHTML = this.result.url

        console.log(this.result)

    } else {
    }
    };
    request.onerror = function() {
    // There was a connection error of some sort
        console.log("Erro:" + request);
    };
    request.send();
}

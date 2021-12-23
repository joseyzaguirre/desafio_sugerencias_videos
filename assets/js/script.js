class Multimedia {
    constructor (url) {
        this._url = url;
    }
    get url() {
        return this._url
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
};

class Reproductor extends Multimedia {
    constructor (url, id){
        super(url);
        this._id = id;
    };
    setInicio(x) {
        this._url += `?start=${x}`
    };
    playMultimedia() {
        iframe(this._url, this._id);
    };
}

function iframe(url, id){
    $(`#${id}`).html(`<iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
};

/*
iframe("https://www.youtube.com/embed/BEXL80LS0-I","musica");
iframe("https://www.youtube.com/embed/tRdBZgHxg2M","peliculas");
iframe("https://www.youtube.com/embed/AE-RP7_USjM","series");
*/

const musica = new Reproductor("https://www.youtube.com/embed/BEXL80LS0-I","musica");
musica.setInicio("600");
musica.playMultimedia();

const peliculas = new Reproductor("https://www.youtube.com/embed/tRdBZgHxg2M","peliculas");
peliculas.setInicio("600")
peliculas.playMultimedia();

const series = new Reproductor("https://www.youtube.com/embed/AE-RP7_USjM","series");
series.setInicio("20")
series.playMultimedia();


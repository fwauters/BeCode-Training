function askTvSerie() {

    let serie = {
        name: "",
        date: "",
        cast: []
    };

    serie.name = prompt("What's your favorite TV show ?");
    serie.date = prompt("What's the production year ?");
    let actor = prompt("Which actor plays on it ? (enter stop to finish)");
    while (actor !== "stop") {
        serie.cast.push(actor);
        actor = prompt("Which actor plays on it ? (enter stop to finish)");
    }
    return serie;
}

console.log(JSON.stringify(askTvSerie()));
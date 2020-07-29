function askTvSerie() {

    serie.name = prompt("What's your favorite TV show ?");
    serie.date = prompt("What's the production year ?");
    let actor = prompt("Which actor plays on it ? (enter stop to finish)");
    while (actor !== "stop") {
        serie.cast.push(actor);
        actor = prompt("Which actor plays on it ? (enter stop to finish)");
    }
    return serie;
}

function randomizeCast(arr) {

    // fisher-yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr;
}

let serie = {
    name: "",
    date: "",
    cast: []
};

askTvSerie();
console.log(randomizeCast(serie.cast));
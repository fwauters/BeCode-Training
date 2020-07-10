// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    function getRandomItem(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)];
    }

    document.getElementById("run").addEventListener("click", () => {

        let b = Math.floor(Math.random() * birds.length);
        let d;
        let f;

        if (birds[b].fem === true) {
            d = "La ";
            f = "e";
        }
        else {
            d = "Le ";
            f = "";
        }
        document.getElementById("target").innerHTML = (d + birds[b].name + " " + getRandomItem(adjectives) + f + ".");
    });

})();

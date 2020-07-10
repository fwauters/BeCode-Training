// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        
        let n = people.size;
        let has = people.has("Alexandre");

        console.log("The Set contain " + n + " people.");
        console.log("Is Alexandre in the Set ? " + has);
    });

})();

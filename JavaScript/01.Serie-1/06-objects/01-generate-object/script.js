// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    let introduction = {
        lastname : "Wauters",
        firstname : "François",
        age : 29,
        city : "Namur",
        country : "Belgium"
    };
    document.getElementById("run").addEventListener("click", () => {
        console.log(introduction);
    });
})();

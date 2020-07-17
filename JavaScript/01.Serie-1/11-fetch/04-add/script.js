// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes").then((response) => {
            return response.json();
        })
            .then((response) => {
                console.log(response);
                return response;
            }).
            then((response) => {

                let newName = document.getElementById("hero-name").value;
                let newAlterEgo = document.getElementById("hero-alter-ego").value;
                let newPowers = [document.getElementById("hero-powers").value];

                if (newName !== "" && newAlterEgo !== "" && newPowers !== "") {

                    let newHero = {
                        id: response.length,
                        name: newName,
                        alterEgo: newAlterEgo,
                        abilities: newPowers
                    };
                    response.push(newHero);
                    console.log(response);
                }
                else {
                    alert("Sorry, every field must be completed");
                }
            })
    })
})();

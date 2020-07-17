

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
                console.log(response[1].name);
                if ("content" in document.createElement("template")) {
                    for (let i = 0; i < response.length; i++) {

                        let template = document.getElementById("tpl-hero");
                        let target = document.getElementById("target");
                        let clone = document.importNode(template.content, true);

                        let name = clone.querySelector(".name");
                        name.textContent = response[i].name;
                        let alterEgo = clone.querySelector(".alter-ego");
                        alterEgo.textContent = response[i].alterEgo;
                        let powers = clone.querySelector(".powers");
                        powers.textContent = response[i].abilities;

                        target.appendChild(clone);
                    }
                }
            })
    })
})();

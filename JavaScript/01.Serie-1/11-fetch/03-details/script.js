// 11-fetch/03-details/script.js - 11.3: details


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

                    let i = document.getElementById("hero-id").value;

                    let template = document.getElementById("tpl-hero");
                    let target = document.getElementById("target");
                    let clone = document.importNode(template.content, true);

                    let name = clone.querySelector(".name");
                    name.textContent = response[i - 1].name;
                    let alterEgo = clone.querySelector(".alter-ego");
                    alterEgo.textContent = response[i - 1].alterEgo;
                    let powers = clone.querySelector(".powers");
                    powers.textContent = response[i - 1].abilities;

                    target.appendChild(clone);

                }
            })
    })
})();

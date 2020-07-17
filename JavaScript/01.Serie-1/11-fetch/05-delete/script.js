// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


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

                let i = document.getElementById("hero-id").value;

                response.splice(i - 1, 1);

                console.log(response);
            })
    })
})();

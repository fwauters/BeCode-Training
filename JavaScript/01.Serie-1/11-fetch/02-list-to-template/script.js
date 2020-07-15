

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes").then((response) => {
            return response.json();
        })
            .then((response) => {
                console.log(response);
                return response;
            }).then((response) => {
                console.log(response[1].name);
            })
    })
})();

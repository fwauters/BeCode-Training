// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPersons((error, persons) => {
            if (error !== null) {
                console.error(error);
            }
            console.log(persons);
        })
    })
})();

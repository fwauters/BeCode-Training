// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let promise = window.lib.getPersons();

        promise.then(
            (persons) => {
                console.log(persons);
            }
            , (error) => {
                console.error(error);
            })
    })
})();

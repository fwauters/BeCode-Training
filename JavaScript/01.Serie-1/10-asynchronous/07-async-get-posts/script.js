// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getP);

    async function getP() {
        let promise = await window.lib.getPosts();

        promise.forEach(element => {
            console.log(element);
        });
    }

})();

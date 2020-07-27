// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', getC);

    async function getC() {
        let postPromise = await window.lib.getPosts();

        postPromise.forEach(element => {

            let commentPromise = window.lib.getComments(postPromise.id);

            commentPromise.then((comment) => {
                element.comment = comment;
                console.log(comment);
            })
        });
    }


})();

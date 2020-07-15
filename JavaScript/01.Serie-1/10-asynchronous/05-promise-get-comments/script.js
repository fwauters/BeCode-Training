// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {

        let postPromise = window.lib.getPosts();

        postPromise.then((post) => {
            post.forEach(element => {

                let commentPromise = window.lib.getComments(post.id);

                commentPromise.then((comment) => {
                    element.comment = comment;
                    console.log(comment);
                })
            });
        })
    });
})();

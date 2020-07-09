
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    function askInfos() {
        let age = String(prompt("What's your age ?"));
        let gender = String(prompt("What's your gender ?"));
        let town = String(prompt("Where do you live ?"));
        let bool = confirm("Are you a " + age + " years old " + gender + " who lives in " + town + " ?");

        if (bool === false) {
            askInfos();
        }
    }
    askInfos();
})();

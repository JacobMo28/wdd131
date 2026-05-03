let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {

    let current = selectElem.value;


    if (current === 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        logo.src = "byui-logo-white.png";

    } else if (current === 'light') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        logo.src = "Screenshot 2026-04-24 192056.png";

    }
}
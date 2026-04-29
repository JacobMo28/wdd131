let title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components'

// document.querySelector('#topics').style.color = "red";

const topics = document.querySelector('#topics');

topics.style.color = 'purple'

const wrapper = document.getElementById('content')

wrapper.style.backgroundColor = "lightblue";

let list = document.querySelector('.list');

list.style.border = '3px solid black'

let para = document.querySelector('p');

para.style.fontSize = '3em';

para.classList.add('background')

const image = document.querySelector('img');

image.setAttribute('src', 'images/new_logo.png');

const dropdown = document.querySelector('#webdevlist');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

dropdown.addEventListener('change', function(){
    html.style.color = "purple";
    css.style.color = "purple";
    js.style.color = "purple";
    let codeValue = dropdown.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
});
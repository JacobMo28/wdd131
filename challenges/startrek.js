let firstpara = document.getElementById('intro');
firstpara.style.backgroundColor = '#f2c556';

let voyager = document.querySelector('em');
voyager.style.backgroundColor = '#acbfcc';

voyager.textContent = "USS Voyager Starship";



const newimage = document.createElement('img')
newimage.src = 'https://bit.ly/3RfG4sY'
newimage.setAttribute('class','rounded');

document.getElementById('starship').append(newimage);



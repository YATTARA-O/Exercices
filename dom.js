const fade = document.querySelector('.fade-in');

const fadeIn = () => {fade.style.opacity ='1';

};

fade.addEventListener('load',fadeIn());

const img = document.querySelector('.img');

const hoverEffect = () => { 
    img.style.opacity = '0.5';

};

img.addEventListener('hover',hoverEffect());

window.addEventListener('load',function() {
    const loaded = document.query
    Selector('.loaded');
    loaded.classList.add('hidden');
});

const spinner = document.querySelector('.loading-spinner');

const loadingSpinner = () => {
spinner.style.display ='block';

};

loadingSpinner();

const slider = document.querySelector('.slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX -
    slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 3;
slider.scrollLeft = scrollLeft - walk;
});

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

const toggleDropdown = () => {
dropdownContent.classList.toggle('show');
};

dropdown.addEventListener('click',toggleDropdown());

const footer = document.querySelector('footer');
const newElement = document.createElement('p');
newElement.textContent ='This is a new element';
footer.appendChild(newElement);

const newLink = document.createElement('a');
newLink.setAttribute('href','https://www.google.com');
newLink.setAttribute('target','_blank');
newLink.style.color ='blue';

newLink.textContent ='Click here to go to Google';
document.newLink.appendChild(newLink);

const list = document.createElement('ul');
for(let i = 1; i <= 5; i++){
const listItem = document.createElement('li');
listItem.textContent = `List item ${i}`;
listItem.style.backgroundColor ='yellow';
list.appendChild(listItem);
}
document.body.appendChild(list);
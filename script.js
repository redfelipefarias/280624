const body = document.querySelector('body');
body.style.backgroundColor = 'gray';  
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const div = document.createElement('div');
div.style.height = '400px';
div.style.width = '400px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.backgroundColor = 'white';
body.appendChild(div);

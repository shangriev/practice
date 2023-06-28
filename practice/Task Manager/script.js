const inputAdd = document.getElementById('task');
const buttonAdd = document.getElementById('btn-task');
const inputList = document.getElementById('list');

function addTask() {

    const li = document.createElement('li');
    const span = document.createElement('span');

    if (inputAdd.value === '') {
        inputAdd.value = '';
    } else {
        li.innerHTML = inputAdd.value;
        inputList.appendChild(li);
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputAdd.value = '';
    saveData();
}

inputAdd.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { 
      event.preventDefault();
      addTask();
    } }
);

inputList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', inputList.innerHTML);
}

function showTask() {
    inputList.innerHTML = localStorage.getItem('data');
}

showTask();
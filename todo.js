let input = document.querySelector('#add');
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");



//create a function taht will allow to add a elemnt wen the button is clicked
btn.addEventListener('click', () => {
    let txt = input.value;
    if (txt === "") {
        alert('you must write some thing');
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';


    }

})
//allow to mark done the task

list.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
})


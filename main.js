/* Start of rule-btn */
function sayHello() {
    console.log("rules was toggled!");
}
const open = document.getElementById('open')
const popup_container = document.getElementById('popup_container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    popup_container.classList.add('show');
});

close.addEventListener('click', () => {
    popup_container.classList.remove('show');
});
/* End of rule-btn */
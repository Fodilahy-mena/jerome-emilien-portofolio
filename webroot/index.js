console.log('simple vanilla js');
const header = document.querySelector('.body_header');
const checkBox = document.querySelector('.icon_menu');

checkBox.addEventListener('click', () => {
    if(!checkBox.checked) {
        header.classList.add('open')
        checkBox.checked = true
    } else if(checkBox.checked) {
        checkBox.checked = false;
        header.classList.remove('open')
    }
})

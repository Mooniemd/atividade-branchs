const buttons = document.getElementsByTagName('button');
const revealButton = buttons[buttons.length-1];

revealButton.addEventListener('click', () => {
    document.getElementsByTagName('aside')[0].style.display = "block";
});

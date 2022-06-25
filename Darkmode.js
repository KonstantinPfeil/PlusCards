let DARKMODE = false;
const BUTTON = document.getElementById('switch');

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
};
const setClassToBody = () => {
    if (DARKMODE) {
        document.querySelector('body').classList.add('dark');
        document.querySelector('body').classList.remove('light');
    
    } else {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('body').classList.add('light');
    }
}
if (BUTTON) {
    BUTTON.addEventListener('click', () => {
        switchMode;
        setClassToBody();
    });
}
BUTTON.addEventListener('click', switchMode);
setClassToBody();


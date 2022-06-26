let DARKMODE = true;
const CHECKBOX = document.getElementById('switch');

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
if (CHECKBOX) {
    CHECKBOX.addEventListener('click', () => {
        switchMode;
        setClassToBody();
    });
}
CHECKBOX.addEventListener('click', switchMode);
setClassToBody();


let [...btn] = document.querySelectorAll('.btn');

document.body.addEventListener('keydown', function (e) {
    for (let i = 0; i < btn.length; i++) {
        if (e.code == btn[i].value) {
            btn[i].style.color = 'blue';
        }

        if (btn[i].style.color == 'blue' && e.code !== btn[i].value) {
            btn[i].style.color = 'grey';
        }
    }
})
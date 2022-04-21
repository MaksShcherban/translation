butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    let num = Number(val) 
    document.getElementById('str').innerHTML="Ваше число в 10-тковій системі: <span class = color >"+ num + "</span>";
};
document.getElementById('elem1').onkeyup = function () {
        var reg = /[а-яА-ЯёЁ]/g;
        if (this.value.search(reg) !=  -1) {
            this.value  =  this.value.replace(reg, '');
        }
    }
    

    butt2.onclick = function() {
        let val = document.getElementById('elem2').value;
        let num = Number(val) 
        num = num.toString(16)
        document.getElementById('str2').innerHTML="Ваше число в 16-тковій системі: <span class = color >"+ num + "</span>";
    };
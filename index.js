var abc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//Набор символов который будет использоваться в системе счисления

butt.onclick = function() {
        let val = document.getElementById('elem1').value;
        // let num = Number(val)
        //Перевод числа из любой системы счисления в десятичную
        function ToNum(a,b){// Аргументы: строка, система счисления 
            var n = 0;
            var mas = abc.slice(0,b);
            a = String(a);
            for(var i = 0;i < a.length;i++){
                n = n +(mas.indexOf(a.substr(a.length-i-1,1))*Math.pow(b,i));
            }
            
            return n;
            
        }
        
        // console.log(ToNum(val,16))
        document.getElementById('str').innerHTML="Ваше число в 10-тковій системі: <span class = color >"+ ToNum(val,16) + "</span>";
    };



document.getElementById('elem1').onkeyup = function () {
        var reg = /[а-яА-ЯёЁ]/g;
        if (this.value.search(reg) !=  -1) {
            this.value  =  this.value.replace(reg, '');
        }
    }
    document.getElementById('elem2').onkeyup = function () {
        var reg = /[а-яА-ЯёЁa-zA-Z]/g;
        if (this.value.search(reg) !=  -1) {
            this.value  =  this.value.replace(reg, '');
        }
    }
    

    butt2.onclick = function() {
        let val = document.getElementById('elem2').value;
        let num = Number(val) 
        function StrReverse(s){// Функция переворачивающая слово
            return s.split("").reverse().join("");
        }
        //Перевод числа из десятичной системы счисления в любую другую
        function ToStr(a,cc){// Аргументы: число, система счисления 
            var s = "";
            var mas = abc.slice(0,cc);
            while(a > 0){//Цикл до тех пор пока A не будет меньше нуля
                s = String(s) + mas[a%cc];//Записываем символ 
                a = Math.floor(a/cc);//Делим без остатка 
            }
            return StrReverse(s);//Выводим результат задом наперед 
        }
        
        // console.log(ToStr(num,16))
        // num = num.toString(16)
        document.getElementById('str2').innerHTML="Ваше число в 16-тковій системі: <span class = color >"+ ToStr(num,16) + "</span>";
    };
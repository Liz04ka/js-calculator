 const numBers = document.querySelectorAll('.num');
 const res = document.querySelector('.result');
 const del = document.querySelector('.delete_all');
 const dellast = document.querySelector('.delete_elem');
 const equal = document.querySelector('.equally');


document.addEventListener('keydown', function (event) {
    if (event.code == "Backspace") {
        let nex =  document.form.textview.value;
        document.form.textview.value = nex.slice(0, -1);
    } else {
        if (event.code == "Enter") {
        document.form.textview.value = "";
        } else {
            if (event.key == "Shift") {
                let pex =  document.form.textview.value;
                document.form.textview.value = pex.slice(0, pex.length);
            } else {
                if (event.code == "Space") {
                    let ext =  document.form.textview.value;
                    if (ext) {
                    document.form.textview.value = eval(ext);
                    }
                } else {
                document.form.textview.value = document.form.textview.value + event.key;
            }
        }
    }}
})

numBers.forEach((item, index) => {
    item.addEventListener('click', function (num) {
        num = this.innerHTML;
        document.form.textview.value = document.form.textview.value + num;
    })

})

del.addEventListener('click', function () {
    document.form.textview.value = " ";
})

dellast.addEventListener('click', function () {
    let exp =  document.form.textview.value;
    document.form.textview.value = exp.slice(0, -1);
})

equal.addEventListener('click', function () {
    let exp =  document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
})










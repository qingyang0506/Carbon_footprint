window.addEventListener('load', function () {
    let btn = document.querySelector('.login');
    let pop_up = document.querySelector('.pop-up');

    let close = this.document.querySelector('.close');
    let cancel = document.querySelector('.cancel');
    let sumbit = this.document.querySelector('.submit');
    let inputs = this.document.querySelector('.form-body').querySelectorAll('input');


    btn.addEventListener('click', function () {
        pop_up.style.display = 'block';
    })

    close.addEventListener('click', function () {
        pop_up.style.display = 'none';
        for(let i=0;i<inputs.length;i++){
            inputs[i].value = "";
        }
    })

    cancel.addEventListener('click', function () {
        pop_up.style.display = 'none';
        for(let i=0;i<inputs.length;i++){
            inputs[i].value = "";
        }
    })

    sumbit.addEventListener('click',()=>{
        pop_up.style.display = 'none';
        for(let i=0;i<inputs.length;i++){
            inputs[i].value = "";
        }
    })
})
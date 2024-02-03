let box = document.querySelectorAll('#box')


for (let i = 0; i < box.length; i++) {
    box[i].innerHTML = `<h1 id="${i}">1</h1>`
    
}

let n1 = document.getElementById('0')
let n2 = document.getElementById('1')
let n3 = document.getElementById('2')
let n4 = document.getElementById('3')
let n5 = document.getElementById('4')
let n6 = document.getElementById('5')
let n7 = document.getElementById('6')
let n8 = document.getElementById('7')
let n9 = document.getElementById('8')
let n10 = document.getElementById('9')
let n11 = document.getElementById('10')
let n12 = document.getElementById('11')
let n13 = document.getElementById('12')
let n14 = document.getElementById('13')
let n15 = document.getElementById('14')
let n16 = document.getElementById('15')


const doc = document.getElementById
document.addEventListener('keydown', function(event){
    console.log(event.key);
    switch (event.key) {

        case 'ArrowUp':
            mover('cima')
            break;

        case 'ArrowRight':
            mover('direita')
            break;

        case 'ArrowDown':
            mover('baixo')
            break;

        case 'ArrowLeft':
            mover('esquerda')
            break;

        default:
            break;
    }
    if (event.key === 'ArrowUp'){
        mover('cima')
    }
})

function mover(direcao) {

    switch (direcao) {
        case 'cima':
            moverCima()
        break;
        case 'direita':
            moverDireita()
        break;
        case 'baixo':
            moverBaixo()
        break;
        case 'esquerda':
            moverEsquerda()
        break;
    
        default:
               break;
    }
}


function moverCima(){
    if (n5.innerHTML != '' && n1.innerHTML == n5.innerHTML) {
        n1.innerHTML = parseInt(n5.innerHTML)+parseInt(n1.innerHTML);
        n5.innerHTML = '';
    }
    if (n6.innerHTML != '' && n2.innerHTML == n6.innerHTML) {
        n2.innerHTML = parseInt(n6.innerHTML)+parseInt(n2.innerHTML);
        n6.innerHTML = '';
    }
    if (n7.innerHTML != '' && n3.innerHTML == n7.innerHTML) {
        n3.innerHTML = parseInt(n7.innerHTML)+parseInt(n3.innerHTML);
        n7.innerHTML = '';
    }
    if (n8.innerHTML != '' && n4.innerHTML == n8.innerHTML) {
        n4.innerHTML = parseInt(n8.innerHTML)+parseInt(n4.innerHTML);
        n8.innerHTML = '';
    }

    if (n9.innerHTML != ''){
        if (n5.innerHTML != ''){
            if (n5.innerHTML == n9.innerHTML) {
                n5.innerHTML = parseInt(n9.innerHTML)+parseInt(n5.innerHTML)
            }
        }else{
            n5.innerHTML = n9.innerHTML;
            n9.innerHTML = '';
        }
        n9.innerHTML = '';
        
    }
    if (n10.innerHTML != ''){
        if (n6.innerHTML != ''){
            if (n6.innerHTML == n10.innerHTML) {
                n6.innerHTML = parseInt(n10.innerHTML)+parseInt(n6.innerHTML)
            }
        }else{
            n6.innerHTML = n10.innerHTML;
            n10.innerHTML = '';
        }
        n10.innerHTML = '';
        
    }
    if (n11.innerHTML != ''){
        if (n7.innerHTML != ''){
            if (n7.innerHTML == n11.innerHTML) {
                n7.innerHTML = parseInt(n11.innerHTML)+parseInt(n7.innerHTML)
            }
        }else{
            n7.innerHTML = n11.innerHTML;
            n11.innerHTML = '';
        }
        n11.innerHTML = '';
        
    }
    if (n12.innerHTML != ''){
        if (n8.innerHTML != ''){
            if (n8.innerHTML == n12.innerHTML) {
                n8.innerHTML = parseInt(n12.innerHTML)+parseInt(n8.innerHTML)
            }
        }else{
            n8.innerHTML = n12.innerHTML;
            n12.innerHTML = '';
        }
        n12.innerHTML = '';
        
    }
    if (n13.innerHTML != ''){
        if (n9.innerHTML != ''){
            if (n9.innerHTML == n13.innerHTML) {
                n9.innerHTML = parseInt(n13.innerHTML)+parseInt(n9.innerHTML)
            }
        }else{
            n9.innerHTML = n13.innerHTML;
            n13.innerHTML = '';
        }
        n13.innerHTML = '';
        
    }
    if (n14.innerHTML != ''){
        if (n10.innerHTML != ''){
            if (n10.innerHTML == n14.innerHTML) {
                n10.innerHTML = parseInt(n14.innerHTML)+parseInt(n10.innerHTML)
            }
        }else{
            n10.innerHTML = n14.innerHTML;
            n14.innerHTML = '';
        }
        n14.innerHTML = '';
        
    }
    if (n15.innerHTML != ''){
        if (n11.innerHTML != ''){
            if (n11.innerHTML == n15.innerHTML) {
                n11.innerHTML = parseInt(n15.innerHTML)+parseInt(n11.innerHTML)
            }
        }else{
            n11.innerHTML = n15.innerHTML;
            n15.innerHTML = '';
        }
        n15.innerHTML = '';
        
    }
    if (n16.innerHTML != ''){
        if (n12.innerHTML != ''){
            if (n12.innerHTML == n16.innerHTML) {
                n12.innerHTML = parseInt(n16.innerHTML)+parseInt(n12.innerHTML)
            }
        }else{
            n12.innerHTML = n16.innerHTML;
            n16.innerHTML = '';
        }
        n16.innerHTML = '';
        
    }
}



function moverDireita(){
    if (n3.innerHTML != '' && n4.innerHTML == n3.innerHTML) {
        n4.innerHTML = parseInt(n3.innerHTML)+parseInt(n4.innerHTML);
        n3.innerHTML = '';
    }
    if (n7.innerHTML != '' && n8.innerHTML == n7.innerHTML) {
        n8.innerHTML = parseInt(n7.innerHTML)+parseInt(n8.innerHTML);
        n7.innerHTML = '';
    }
    if (n11.innerHTML != '' && n12.innerHTML == n11.innerHTML) {
        n12.innerHTML = parseInt(n11.innerHTML)+parseInt(n12.innerHTML);
        n11.innerHTML = '';
    }
    if (n15.innerHTML != '' && n16.innerHTML == n15.innerHTML) {
        n16.innerHTML = parseInt(n15.innerHTML)+parseInt(n16.innerHTML);
        n15.innerHTML = '';
    }

    if (n2.innerHTML != ''){
        if (n3.innerHTML != ''){
            if (n3.innerHTML == n2.innerHTML) {
                n3.innerHTML = parseInt(n2.innerHTML)+parseInt(n3.innerHTML)
            }
        }else{
            n3.innerHTML = n2.innerHTML;
            n2.innerHTML = '';
        }
        n2.innerHTML = '';
    }
    if (n6.innerHTML != ''){
        if (n7.innerHTML != ''){
            if (n7.innerHTML == n6.innerHTML) {
                n7.innerHTML = parseInt(n6.innerHTML)+parseInt(n7.innerHTML)
            }
        }else{
            n7.innerHTML = n6.innerHTML;
            n6.innerHTML = '';
        }
        n6.innerHTML = '';
        
    }
    if (n10.innerHTML != ''){
        if (n11.innerHTML != ''){
            if (n11.innerHTML == n10.innerHTML) {
                n11.innerHTML = parseInt(n10.innerHTML)+parseInt(n11.innerHTML)
            }
        }else{
            n11.innerHTML = n10.innerHTML;
            n10.innerHTML = '';
        }
        n10.innerHTML = '';
        
    }
    if (n12.innerHTML != ''){
        if (n15.innerHTML != ''){
            if (n15.innerHTML == n12.innerHTML) {
                n15.innerHTML = parseInt(n12.innerHTML)+parseInt(n15.innerHTML)
            }
        }else{
            n15.innerHTML = n12.innerHTML;
            n12.innerHTML = '';
        }
        n12.innerHTML = '';
        
    }
    if (n13.innerHTML != ''){
        if (n2.innerHTML != ''){
            if (n2.innerHTML == n13.innerHTML) {
                n2.innerHTML = parseInt(n13.innerHTML)+parseInt(n9.innerHTML)
            }
        }else{
            n2.innerHTML = n13.innerHTML;
            n13.innerHTML = '';
        }
        n13.innerHTML = '';
        
    }
    if (n14.innerHTML != ''){
        if (n10.innerHTML != ''){
            if (n10.innerHTML == n14.innerHTML) {
                n10.innerHTML = parseInt(n14.innerHTML)+parseInt(n10.innerHTML)
            }
        }else{
            n10.innerHTML = n14.innerHTML;
            n14.innerHTML = '';
        }
        n14.innerHTML = '';
        
    }
    if (n15.innerHTML != ''){
        if (n11.innerHTML != ''){
            if (n11.innerHTML == n15.innerHTML) {
                n11.innerHTML = parseInt(n15.innerHTML)+parseInt(n11.innerHTML)
            }
        }else{
            n11.innerHTML = n15.innerHTML;
            n15.innerHTML = '';
        }
        n15.innerHTML = '';
        
    }
    if (n16.innerHTML != ''){
        if (n12.innerHTML != ''){
            if (n12.innerHTML == n16.innerHTML) {
                n12.innerHTML = parseInt(n16.innerHTML)+parseInt(n12.innerHTML)
            }
        }else{
            n12.innerHTML = n16.innerHTML;
            n16.innerHTML = '';
        }
        n16.innerHTML = '';
        
    }
}


function verificar() {    
    let arr = document.getElementById("inputValores").value;   

    let numArray = arr.split(",");
    numArray.sort();
    
    let menor = Math.min(...numArray);
    let maior = Math.max(...numArray);

    
    saidaMenor.innerHTML = menor;
    saidaMaior.innerHTML = maior;

}
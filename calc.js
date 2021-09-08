let A = parseFloat(prompt("Digite o valor de A"));
let B = parseFloat(prompt("Digite o valor de B"));
let C = parseFloat(prompt("Digite o valor de C"));

let delta = (B * B) - (4*A*C);

if(delta < 0 || A ==  0){
    document.write("Impossivel calcular");
}else{
    let x1 = (B - Math.sqrt(delta)) / (2 * A);
    let x2 = (B + Math.sqrt(delta)) / (2 * A);
    document.write("1º Raiz = "+x1+"  //    ");
    document.write("2º Raiz = "+x2);
}
function Soma(a,b){
    return a + b;
    }
    

function Subtracao(a,b){
    return a - b;
}

function Multiplicacao(a,b){
    return a * b;
}

function Divisao(a,b){
    return a / b;
}

function Primos(a)
{
    const numeros_primos= [1,2,3,5,7,a];
    let isprimo;
    let count  = 0;

    for(let i =0; i<numeros_primos.length;i++)
    {
        if (a%numeros_primos[i] == 0){
            count ++
        }

    }

    if(a==2||a==3||a==5|a==7){
        count --;
    }

    if (count <= 2)
    {
        isprimo = true;
    }
    else{
        isprimo = false;
    }

    return isprimo
}


function validate_cpf(cpf)
{
    let isValid = true;
    let sum = 0;
    let index = 0
    let valor;

     let cpfString = String(cpf)

    if (cpfString.length != 11){
        isValid = false;
    }
    console.log(cpfString.charAt(0));

    // Inicio da verificação do primeiro digito
    for(let i = 10; i>1;i--)
    {
        sum = sum + (cpfString.charAt(index) * i);
        index++;
    }

    valor = 11 - (sum%11)

    if(valor > 9)
    {
        valor = 0;
    }

    if (cpfString.charAt(9) != valor )
    {
        isValid = false
    }
    console.log(valor)
    console.log(isValid);

    
    // Inicio da verificação do segundo digito
    sum = 0;
    valor = 0; 
    index = 0;
    
    for(let i = 11; i>1;i--)
    {   
        sum = sum + (cpfString.charAt(index) * i);
        index++;
    }

    console.log(sum)

    valor = 11 - (sum%11)

    console.log(valor)

    if(valor > 9)
    {
        valor = 0;
    }

    if (cpfString.charAt(10) != valor )
    {
        isValid = false
    }
    console.log(isValid);
    
    return isValid;
}
module.exports = { Soma, Subtracao, Multiplicacao, Divisao, Primos, validate_cpf}
   
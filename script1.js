/*A senha deve estar entre 184759-856920

Pelo menos dois digitos adjacentes devem ser iguais 122346

começando da esquerda para a direita os digitos apenas aumentam ou permaneçem os mesmos

quantas senhas existem seguindo essa regra?

*/


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let countValida = 0;

//função que verifica validade da senha
function valida(senha){
    
    let myInt = senha;

    let myFunc = num => Number(num);

    let intArr = Array.from(String(myInt), myFunc);


    if (intArr[0] <= intArr[1] && intArr[1] <= intArr[2] && intArr[2]<= intArr[3] && intArr[3] <= intArr[4] && intArr[4] <= intArr[5]){
        
        if(intArr[0] == intArr[1] || intArr[1] == intArr[2] || intArr[2] == intArr[3] || intArr[3] == intArr[4] || intArr[4] == intArr[5]){
            countValida++;
            return true;
        }else{
            return false;
        }        
        
    }else{
        return false;
    }
}


//loop 1
for(var i = 184759; i < 856920; i++){
    valida(i);
} 

//resultado 1
console.log('quantidade de validos com a primeira regra é');
console.log(countValida);

//---------------------------------------------------------------------------------

let countValida2 = 0;

//função que verifica validade da senha
var valida2 = function(senha){
    
    let myInt = senha;

    let myFunc = num => Number(num);

    let intArr = Array.from(String(myInt), myFunc);


    if (intArr[0] <= intArr[1] && intArr[1] <= intArr[2] && intArr[2]<= intArr[3] && intArr[3] <= intArr[4] && intArr[4] <= intArr[5]){
        
        if(intArr[0] == intArr[1] || intArr[1] == intArr[2] || intArr[2] == intArr[3] || intArr[3] == intArr[4] || intArr[4] == intArr[5]){
            
            if(intArr[0] == intArr[1] && intArr[2] == intArr[3] || intArr[0] == intArr[1] && intArr[3] == intArr[4] || intArr[0] == intArr[1] && intArr[4] == intArr[5]){
                countValida2++;
                return true;

            }else if(intArr[1] == intArr[2] && intArr[3] == intArr[4] || intArr[1] == intArr[2] && intArr[4] == intArr[5]){
                countValida2++;
                return true;

            }else{
                return false;
            }
        }else{
            return false;
        }        
        
    }else{
        return false;
    }
}


//loop 
for(var i = 184759; i < 856920; i++){
    valida2(i);
} 

//resultado
console.log('quantidade de validos contando com a segunda regra é');
console.log(countValida2);

const server = http.createServer((req, res) => {
    if (req.url === '/resultado1'){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(`${JSON.stringify(countValida)}`);
    }else if (req.url === '/resultado2'){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(`${JSON.stringify(countValida2)}`);
    }
});



server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});

function fazGet(url){
	let request = new XMLHttpRequest();

	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function criarLinha(usuario){

}

function regra1(){
	let data = fazGet("http://127.0.0.1:3000/resultado1");

	let resultado1 = JSON.parse(data);

	let element = document.getElementById('result1');
	element.innerHTML = `A quantidade de senhas validos contando com a primeira regra é ${resultado1}`;
	console.log(resultado1);	

}

function regra2(){
	let data = fazGet("http://127.0.0.1:3000/resultado2");

	let resultado2 = JSON.parse(data);

	let element = document.getElementById('result2');
	element.innerHTML = `A quantidade de senhas validos contando com a segunda regra é ${resultado2}`;
	console.log(resultado2);	

}


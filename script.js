const body = document.querySelector('body');
body.style.backgroundImage = `url("data:image/jpeg;base64,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")`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.display = 'flex';
body.style.justifyContent = `space-between`;
body.style.alignItems = 'center';
body.style.margin = `0`;
body.style.height = '100vh';
body.style.overflow = 'hidden';

const alto = document.createElement("header")
alto.style.display = `flex`;
alto.style.justifyContent = `center`;
alto.style.alignItems = `center`;
alto.style.backgroundColor = `darkred`;
alto.style.color = `white`;
alto.style.width = `150%`;
alto.style.height = `70px`;
body.appendChild(alto);   

const alto1 = document.createElement("button");
alto1.style.color = `white`;
alto1.textContent = "GITHUB";
alto1.addEventListener ("click", function(){
    window.open("https://github.com/redfelipefarias")

})
alto1.style.backgroundColor = `darkred`;
alto1.style.border = `0px`;
alto1.style.cursor = `pointer`;
alto.appendChild(alto1); 

const div = document.createElement('div');
div.style.height = '600px';
div.style.width = '800px';
div.style.display = 'flex';
div.style.borderRadius = "20px"
div.style.justifyContent = 'space-evenly';
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.backgroundColor = 'black';
div.style.border = "1px solid red ";
body.appendChild(div);

const textoBody = document.createElement('h1');
textoBody.textContent = 'CALCULAR MÉDIA';
textoBody.style.color = 'darkred';
div.appendChild(textoBody);

const nome = document.createElement('input');
nome.style.width = '200px';
nome.style.height = '30px';
nome.placeholder = 'Escreva seu nome';
nome.style.backgroundColor = 'lightgray';
nome.style.border = '1px solid red';
nome.style.borderRadius = '5px';
div.appendChild(nome);

const numero1 = document.createElement('input');
numero1.style.width = '200px';
numero1.style.height = '30px';
numero1.placeholder = ' Primeira nota';
numero1.style.backgroundColor = 'lightgray';
numero1.style.border = '1px solid red';
numero1.style.borderRadius = '5px';
div.appendChild(numero1);

const numero2 = document.createElement('input');
numero2.style.width = '200px';
numero2.style.height = '30px';
numero2.placeholder = ' Segunda nota';
numero2.style.backgroundColor = 'lightgray';
numero2.style.border = '1px solid red';
numero2.style.borderRadius = '5px';
div.appendChild(numero2);

const numero3 = document.createElement('input');
numero3.style.width = '200px';
numero3.style.height = '30px';
numero3.placeholder = ' Terceira nota';
numero3.style.backgroundColor = 'lightgray';
numero3.style.border = '1px solid red';
numero3.style.borderRadius = '5px';
div.appendChild(numero3);

const button = document.createElement(`button`);
button.style.display = `flex`;
button.style.justifyContent = `center`;
button.style.width = `110px`;
body.style.flexDirection = `column`;
button.textContent = `Calcular`;
button.style.height = `20px`;
button.style.border = `2px solid black`;
button.style.borderRadius = `5px`;
button.style.cursor = `pointer`;
div.appendChild(button)
button.addEventListener('click', function () {
    const nome = nome.value;
    const numero1 = parseFloat(numero1.value)
    const numero2 = parseFloat(numero2.value)
    const numero3 = parseFloat(numero3.value)
    const media = ((numero1 + numero2 + numero3) / 3)


resultado.textContent = `A média das 3 notas é: ${media}`;
});

const resultado = document.createElement('div');
resultado.style.backgroundColor = 'lightgray';
resultado.style.height = '20px';
resultado.style.width = '200px';
resultado.style.border = `1px solid red`;
resultado.style.color = "white"
div.appendChild(resultado);

const baixo = document.createElement("footer")
baixo.style.display = `flex`;
baixo.style.justifyContent = `space-around`;
baixo.style.alignItems = `center`;
baixo.style.backgroundColor = `darkred`;
baixo.style.color = `white`;
baixo.style.width = `150%`;
baixo.style.height = `70px`;
body.appendChild(baixo);

const baixo1 = document.createElement("h3");
baixo1.style.color = `white`;
baixo1.textContent = `Instituto Pompeia`;
baixo.appendChild(baixo1);

const baixo2 = document.createElement("h3");
baixo2.style.color = `black`;
baixo2.textContent = "RED";
baixo.appendChild(baixo2);

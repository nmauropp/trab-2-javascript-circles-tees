//div id="grupoBotao" class="grupoBotao"
	
	// funcao para carregar a interface inicial da pagina
	window.onload = function load() { 	
		const body = document.body;
		const divBotao = document.createElement("div");
		divBotao.classList.add("grupoBotao");

		//criando o botao Add
		var botaoAdd = document.createElement("button");
		botaoAdd.classList.add("botao");
		botaoAdd.innerText = "Adicionar Círculo";
		botaoAdd.setAttribute("id", "botaoAdd");
		botaoAdd.setAttribute("onclick" , "addCircle()");
		divBotao.appendChild(botaoAdd);

		//criando o botao Delete
		var botaoDel = document.createElement("button");
		botaoDel.classList.add("botao");
		botaoDel.innerText = "Deletar Círculo";
		botaoDel.setAttribute("id", "botaoDel");
		botaoDel.setAttribute("onclick" , "deleteCircle()");
		divBotao.appendChild(botaoDel);
		
		//Criando o botao Reset
		var botaoReset = document.createElement("button");
		botaoReset.classList.add("botao");
		botaoReset.innerText = "Resetar";
		botaoReset.setAttribute("id", "botaoReset");
		botaoReset.setAttribute("onclick" , "reset()");
		divBotao.appendChild(botaoReset);

		//adicionando o grupo de Botoes ao body
		body.append(divBotao);

		//criar div cenario
		const divCenario = document.createElement("div");
		divCenario.setAttribute("id", "cenario");
		body.append(divCenario);
		
	}
	
	function addCircle() {
		const cenario = document.getElementById("cenario");
                var circle = document.createElement("div");  
    		lista = ['1' , '2', '3'];
    		elemento = lista[Math.floor(Math.random() * lista.length)]
    		if(elemento == '1'){
    		              circle.classList.add("circle-blue");
    		}
    		if(elemento == '2'){
    		              circle.classList.add("circle");
    		}
    		if(elemento == '3'){
    		              circle.classList.add("circle-yellow");
    		}
    		cenario.appendChild(circle);
	}

	function deleteCircle() {
                const cenario = document.getElementById("cenario");
                cenario.removeChild(cenario.lastElementChild);
            }

	function reset() {
                const cenario = document.getElementById("cenario");
		while(cenario.firstElementChild){
			cenario.removeChild(cenario.lastElementChild);
		}
            }
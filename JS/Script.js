//Abre a fecha a barra lateral
function toggleSidebar(){
    var sidebar = document.getElementById("sidebar");
    sidebar.style.right = (sidebar.style.right === "0px") ? "-270px" : "0px"
}

//Fecha a barra lateral quando clicar fora da barra
document.addEventListener("click", function(event){
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.querySelector(".menu-btn");

    if( !sidebar.contains(event.target) && !menuBtn.contains(event.target)){
        sidebar.style.right = "-270px";
    }
})

//Formulário
    //Esse função ativa o código atraves do click no "botão"
    function escolhas(event){
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página
    
        // Guarda o valor de horas utilizando telas
        let nome = document.getElementById("name").value;
        let horas = document.getElementById("horas").value;

        // Função para capturar a opção selecionada nos botões radio
        function pegarValorRadio(nome) {
            let opcoes = document.getElementsByName(nome);
            for (let i = 0; i < opcoes.length; i++) {
                if (opcoes[i].checked) {
                    return opcoes[i].value;
                }
            }
        }
    
        // Captura as respostas das perguntas de múltipla escolha
        let pausas = pegarValorRadio("pausas");
        let dormir = pegarValorRadio("dormir");
        let cansaco = pegarValorRadio("cansaco");
        let filtro = pegarValorRadio("filtro");
        let motivo = pegarValorRadio("motivo");
        let tentou = pegarValorRadio("motivo");
   
        //Código para definir as respostas com base no formulário
       let mensagem = `${nome}<br>`;
       let contador = 0;
       //horas
        if(horas < 3){
            contador+= 2;
        }
        else if(3 < horas < 6){
            contador++
            mensagem += `Você deveria tentar diminuir o uso das telas <br>`;
        }
        else{
            mensagem += `Seu uso de telas está muito acima do recomendado, tome cuidado, e tente diminuir esse uso<br>;`
        }
        //Pausas
        switch(pausas){
            case "sim":
                contador += 2;
            break
            case "vezes":
                contador ++;
                mensagem += `Você deve fazer uma pausa sempre que possivel ;<br>`;
            break
            case "nao":
                mensagem += `As pausas são importantes para descansar os olhos e é bem importante faze-las quando for utilizar as telas por muito tempo.<br>`;
            break
        }
        //Dormir?????
        switch(dormir){
            case "sim":
                mensagem += `Você deveria parar, ou diminuir o uso das telas antes de dormir, isso pode dar dores de cabeças, diminuir a qualidade do sono, e outros problemas<br>`;
            break
            case "vezes":
                contador++;
                mensagem += `Você deveria diminuir o uso antes de dormir, ele pode trazer alguns malefícios<br>`;
            break 
            case `nao`:
                contador +=2;
            break
        }
        //cansaço!!!!!
        switch(cansaco){
            case "sim":
                mensagem += `Isso pode ser causado pelas diversas horas seguidas em frente a uma tela, ou por utilizar antes de ir dormir, tente diminuir esses usos. Caso isso persista procure ajuda profissional<<br>b;
            breakr>`;
            brea
            case "vezes":
                contador ++;
                mensagem += `Tente diminuir o uso das telas antes de dormir, ou utilize o modo noturno/filtro azul para diminuir esses sintomas<br>`;
                break
            case "nao":
                contador +=2;
            break
        }
       //escuro
       switch(filtro){
            case "sim":
                contador += 2;
            break
            case "vezes":
                contador ++;
                mensagem += `O uso de modos noturnos ou filtro azul podem diminuir o cansaço nos olhos, dores de cabeça e outros sintomas. Mas caso exagere os sintomas continuarão a aparecer
                <br>`
            break
            case "nao":
                mensagem += `O uso do filtro de luz azul, pode ajudar caso você precise utilizar alguma tela durante o período da noite, então tente sempre utilizar caso necessário<br>`;
            break
       }
       //motivo
       switch(motivo){
            case "trabalho":
                mensagem += `Caso você trabalhe utilizando computadores, ou outros tipos de telas, e estiver com algum problema devido ao uso delas, tente conversar com seu superior, e consulte um profissional<br>`;
            brea
            case "estudo":
                mensagem += `Caso tenha disponibilidade tente ler livros, ou artigos sobre o assunto que estiver estudando, faça mapa mentais e anotações e tente substituir o celular caso consiga<br>`;
            break
            case "redes":
                mensagem += `Você deveria tentar diminuir o uso das redes sociais no geral, elas podem gerar alguns problemas mentais, como ansiedade entre outros, pela comparação e a negatividade<br>`;
            break
            case "outros":
                mensagem += `Caso não seja necessário o uso, e se achar que o lhe causa, ou poderá causar problemas no futuro, tente diminui-lo<br>`;
            break
       }
       //Redução
       switch(tentou){
            case "sim":
                contador++;
            break
            case "parcialmente":
                contador += 0.5;
                mensagem += `Caso tente parar denovo, utilize aplicativos que monitorem seu uso, e tente usar apenas para assuntos importantes, evitando redes sociais<br>`;
            break
            case "nao":
                mensagem += `Caso ache que seu uso é excessivo você deveria tentar utilizar aplicativos para diminuir esse uso, se achar que não conseguirá sozinho visite um profissional.<br>`;
            break
       }
       let roteiro = document.getElementById("roteiro");
       roteiro.innerHTML = `${mensagem}`
       let nota = document.getElementById("nota")
       nota.innerHTML = `${contador}/10`
    };
    
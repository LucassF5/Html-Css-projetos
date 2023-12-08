var valorDaRecarga;

function processarRecarga() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var matricula = document.getElementById('matricula').value;
    var valorRecarga = document.getElementById('valorRecarga').value;
    var numeroCartao = document.getElementById('numeroCartao').value;
    var cvv = document.getElementById('cvv').value;

    if (nome === '' || email === '' || matricula === '' || valorRecarga === '' || numeroCartao === '' || cvv === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
    } else {
        alert('Analisando dados...');
        alert('Verificando matricula...');
        alert('Pagamento processado!');
        
    }
}

function pagarNoPix(){
    const imagemPix = document.querySelector(".conteudo__imagem")
    var qrcode = document.querySelector(".modal");
    valorDaRecarga = prompt('Por favor, insira o valor da recarga EX: 15,00');
    
    if(valorDaRecarga === ""){
        return;
    }
    else{
        imagemPix.setAttribute('src', "imagens/pix.jpg");
        alert("Gerando QR Code....");
        qrcode.classList.add("show-modal");

    }
    
}

function fecharModal(){
    var qrcode = document.querySelector(".modal");
    qrcode.classList.remove("show-modal");

}

function processarRecargaPix(){
    var qrcode = document.querySelector(".modal");
    alert('Verificando...');
    alert('Isso pode demorar um pouquinho...');
    alert(`O valor de R$${valorDaRecarga}, foi processado com sucesso.`);
    qrcode.classList.remove("show-modal");

}
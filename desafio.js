/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   console.log("Boas vindas ao jogo!")
   let cartasUsuario = []  
   let cartasComputador = []
   if(confirm("Deseja jogar?")){
   let validaCarta = false
      while(!validaCarta) {
      cartasUsuario.push(comprarCarta(), comprarCarta())
      cartasComputador.push(comprarCarta(), comprarCarta())
      if(cartasUsuario[0].texto.includes('A') && cartasUsuario[1].texto.includes('A') || cartasComputador[0].texto.includes('A') && cartasComputador[1].texto.includes('A')) {
         cartasUsuario = []
         cartasComputador = []
      } else {
         validaCarta = true
      }}
      
      const segundoConfirm = confirm(
         `Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
         "\n"+ 
         "Deseja comprar mais uma carta?"
      )

      if (segundoConfirm) {
         cartasUsuario.push(comprarCarta())
      } else if (!segundoConfirm && somaUsuario() > somaComputador()) {
         alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
         Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
         O usuário ganhou!`)
      } else if (!segundoConfirm && somaUsuario() < somaComputador()) {
         alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
         Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
         O Computador ganhou!`)
      } else if (!segundoConfirm && somaUsuario() == somaComputador()) {
         alert(`Usuario - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} Pontuação: ${somaUsuario()}
         Computador - Cartas ${cartasComputador[0].texto} ${cartasComputador[1].texto} Pontuação ${somaComputador()}
         Empate!`)
      }
      
      function somaUsuario() {
         let pontuacaoTotalUsuario = 0
         for(let i = 0; i < cartasUsuario.length; i++){
            console.log(cartasUsuario[i])
            pontuacaoTotalUsuario += cartasUsuario[i].valor;
         }
         console.log(pontuacaoTotalUsuario)
         return pontuacaoTotalUsuario
      } 
      function somaComputador() {
         let pontuacaoTotalComputador = 0
         for(let i = 0; i < cartasComputador.length; i++){
            pontuacaoTotalComputador += cartasComputador[i].valor
         }
         return pontuacaoTotalComputador
      }

      if (somaUsuario() >= 21 && somaUsuario() > somaComputador()) {
         alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO usuário venceu!`)
      } 
      else if (somaUsuario() >= 21 && somaUsuario() < somaComputador()) {
         alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO Computador venceu!`)
      }
      else if (somaUsuario() < 21) {
         const terceiroConfirm = confirm(`Agora suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} ${cartasUsuario[2].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
         "\n"+ 
         "Deseja comprar uma última carta?")
         if(!terceiroConfirm && somaUsuario() > somaComputador()) {
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO Usuário venceu!`)
         }else if (!terceiroConfirm && somaUsuario() == somaComputador()) {
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nEmpate!!!`)
         } else if (!terceiroConfirm && somaUsuario() < somaComputador()) {
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO computador ganhou!`)
         } else if (terceiroConfirm && somaUsuario() > somaComputador()) {
            cartasUsuario.push(comprarCarta())
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}, ${cartasUsuario[3].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO computador ganhou!!`)
         } else if (terceiroConfirm && somaUsuario() == somaComputador()) {
            cartasUsuario.push(comprarCarta())
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}, ${cartasUsuario[3].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nEmpate!!!`)
         } else if (terceiroConfirm && somaUsuario() < somaComputador()) {
            cartasUsuario.push(comprarCarta())
            alert(`Usuario - Cartas: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}, ${cartasUsuario[2].texto}, ${cartasUsuario[3].texto}\n- Pontuação: ${somaUsuario()} \nComputador - Cartas: ${cartasComputador[0].texto}, ${cartasComputador[1].texto} \nPontuação: ${somaComputador()}\nO usuário ganhou!!`)
         }
      }
   } else {
      console.log("O jogo acabou")
   }

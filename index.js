const perguntas = [
    {
      pergunta: "O que significa a sigla HTML?",
      respostas: [
        "Hypertext Markup Language",
        "Hyperlink Text Markup Language",
        "Home Tool Markup Language",
      ], 
      correta: 0 
    },
    {
      pergunta: "Qual é o método em JavaScript utilizado para imprimir mensagens no console?",
      respostas: [
        "console.log()",
        "print()",
        "message()",
      ], 
      correta: 0 
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita",
        "Comparação de tipo e valor",
        "Atribuição de valor",
      ], 
      correta: 1 
    },
    {
      pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
      respostas: [
        "function minhaFuncao() {}",
        "função minhaFuncao() {}",
        "def minhaFuncao() {}",
      ], 
      correta: 0 
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Seleciona todos os elementos que correspondem a um seletor CSS especificado",
        "Seleciona um elemento por ID",
      ], 
      correta: 0 
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha",
        "<!-- Este é um comentário de linha -->",
        "/* Este é um comentário de linha */",
      ], 
      correta: 0 
    },
    {
      pergunta: "Qual é o operador lógico 'e' em JavaScript?",
      respostas: [
        "and",
        "&&",
        "||",
      ], 
      correta: 1 
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "variable",
        "var",
      ], 
      correta: 0 
    },
    {
      pergunta: "Qual é o resultado de 2 + '2' em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro",
      ], 
      correta: 1 
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adiciona um ouvinte de eventos a um elemento HTML",
        "Remove um ouvinte de eventos de um elemento HTML",
        "Atualiza um ouvinte de eventos em um elemento HTML",
      ], 
      correta: 0 
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const mostrarTotal = document.querySelector('#acertos span')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  
    const quizItem = template.content.cloneNode(true)
  
    quizItem.querySelector('h3').textContent = item.pergunta 
  
    for (let resposta of item.respostas) {  
      const dt = quizItem.querySelector('dl dt').cloneNode(true)    
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pegunta- ' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {        
          corretas.add(item)   
            
        }     
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)       
    } 
    quizItem.querySelector('dl dt').remove()                   
    quiz.appendChild(quizItem) 
  }
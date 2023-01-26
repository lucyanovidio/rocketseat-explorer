# Anotações

### 💻 Avançando no JavaScript - Stage 5 

Este módulo é sobre: Como manipular o navegador utilizando a DOM, funções callbacks, recursividade, princípios do Clean Code, ES6 Modules, padrão Factory, injeção de dependências, refatoração de código e muito mais.

---

### DOM

DOM - Document Object Model - é uma interface que representa o documento (HTML ou XML) de forma que possa ser manipulado por linguagem de programação. Uma forma comum para que um elemento HTML seja selecionado para manipulação no JavaScript é:

``` document.querySelector("div"); ```

O DOM é *event-driven* - direcionada a eventos. Isso significa que ela pode reagir aos eventos (ações) que acontecem na página, que podem ser: clicks, scroll, keydown (keypress), load, aparições de elementos, mudança em width e height (nas proporções, dimensões), interações com sons, imagens e vídeos, e etc.

Pra cada coisa dessa a gente pode fazer a DOM ter uma direção diferente, uma reação, fazer alguma coisa mediante a esse evento.

> Essas propriedades para manipulação da DOM podem ser colocadas direto no HTML (atributos *onclick*, *onscroll*, etc), mas é mais recomendado que se separe as responsabiidades, deixando o HTML apenas mesmo para a marcação, estrutura da página, e a gestão desses eventos no arquivo javascript da aplicação.

### Eventos

Um método JS usado para aplicação de eventos da forma mais recomendada é o ``` addEventListener() ```. <br>
Método para objetos DOM (HTMLObjects, nós, nodes), que recebe dois argumentos: o evento a ser escutado em string e o escutador, sendo este uma função, já criada ou sendo criada ali. <br>
A exemplo:

```
myElement.addEventListener("click", () => {
    alert("Cliquei");
});
```

ou 

```
myElement.addEventListener("click", sayYouClicked);

function sayYouClicked() {
    alert("Cliquei");
}
```

### Função callback

São funções chamadas dentro de funções, de fato "chamadas de volta", como o nome sugere. As funções passadas como argumento no método citado acima são funções callback.

### Dicas básicas de refatoração

* Agrupar iguais com iguais no código (variáveis juntas, eventos, criação de funções, etc);
* Variáveis e funções o mais semânticas possíveis;
* Optar por criar funções ou variáveis que retornam valor booleano de forma separada, para depois colocar como escutador, ou em uma condicional, por exemplo.

> Casos aplicados no projeto <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-01">Jogo da Advinhação</a>.

### ...

### Outras anotações

* **innerText** x **innerHTML**: *innerText* trata apenas de texto, enquanto *innerHTML* trata de HTML. <br>
Por exemplo:
```
myElement.innerText = "<p>texto</p>"; 
// Será exibido: <p>texto</p>

myElement.innerHTML = "<p>texto</p>"; 
// Será exibido: texto
```




<br>

### ...
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

---

<!-- DEPOIS DO PROJETO DA CALCULADORA -->

### Objeto literal

É um objeto que contém exatamente o que a gente passa logo de cara, criando a partir de {}, e não assim: `objeto = new Object()` - usamos para fazer estruturação de dados, como no <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03/">desafio 3</a> com o <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03/js/modal.js">modal</a> e o <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03/js/errorAlert.js">error alert</a>.

### Funções utilitárias

Funções que não entregam funcionalidades principais. Dão apoio, são ferramentais auxiliares, e podem ser inclusive separadas em arquivo diferente para serem exportadas, para organização. Exemplo também no <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03/">desafio 3</a>.

### ES Modules - import e export

> Lembrando: ES (EcmaScript) é o órgão que regula e padroniza o JS, cria as funcionalidades e etc. 

O conceito de modularizar é justamente separar em módulos, separa em diferentes arquivos. Antigamente, se colocava os scripts todos um embaixo do outro mesmo passando os caminhos dos arquivos. A partir do ES6, ou ES 2015 (quando foi atualizado), foi adicionadas essas funcionalidades de import e export. Com eles agt disponibiliza qualquer tipo de dado entre arquivos, separa código em diferentes arquivos e isola escopos e códigos, tudo passando um scritp só, do tipo "module".

### Como usar o ES Modules

- Acionamos o script com o atributo "type='module'", para um arquivo js por padrão main.js ou index.js. 
- No arquivo main podemos importar todo o outro arquivo ou só alguma coisa dele.
    - 1º caso: usamos `import './arquivo.js';`, que irá importar o arquivo apenas executando o que tem nele, mas não permiindo que usemos dados individualmente. ex.:
        ```
            // no arquivo.js
            const msg = "Mensagem";
            console.log(msg);

            // no main.js
            import "./arquivo.js"; // vai executar o console.log automaticamente
            console.log(msg); // undefined. Esse n vai executar pq este "msg" n foi importado, mas sim a execução do arquivo.js, o retorno dele
        ```
    - 2º caso: podemos exportar um elemento específico das seguintes formas:
        - export default: Exportação padrão de apenas um elemento. Um export por arquivo. ex.:
            ```
            // no arquivo.js
            const msg = "Mensagem";
            export default msg;

            // no main.js
            import msg from "./arquivo.js";
            console.log(msg);
            ```
            Obs.: Neste caso eu posso renomear (criar um alias, pseudônimo) o elemento na hora da importação pra utitlização dentro do arquivo main, ex.:

            ```
            import outroNome from "./arquivo.js";
            console.log(outroNome); // "Mensagem"
            ```

            Também posso exportar inividualmente na hora da declaração e assignment, e também mudar o nome na importação:

            ```
            // arquivo.js
            export default () => console.log("Função exportada");

            // main.js
            import myFunction from "./arquivo.js";
            myFunction(); // no console: "Função exportada"
            ```
        - named export - exportar passando o nome correto do elemento. Neste caso podemos exportar vários elementos. ex.:
            ```
            // arquivo.js
            export const msg = "Mensagem 1"; // 1ª forma

            const msg2 = "Mensagem 2";
            export { msg2 }; // 2ª forma

                // ou assim:
                // export { msg, msg2 }; // uma 3ª forma
            
            // main.js
            import { msg2, msg } from "./arquivo.js"; // passando os nomes exatamente, mas a ordem não importa
            console.log(msg, msg2);
            ```
        - Misto (named e default) - usando as duas formas numa exportação só (não sei quando isso é útil, mas saiba q é possível)
            ```
            // arquivo.js
            const a = "a";
            const b = "b";

            export default () => "c"; // função que retorna "c" escrita de forma curta

            export { a, b };

            // main.js
            import myFunction, { a, b } from "./arquivo.js"; 
                // cada um sendo importado à sua maneira, a ordem não importa, ele já entende que os que estão dentro de { } são os exportados com "export" e q o outro é o export default

            console.log(a, b, myFunction()); // "a b c"
            ```
        - Import as - forma de importar algo passado com export, onde agt precisa passar o nome correto, mas alterando o nome, criando e usando um alias. ex.:
        	```
            // arquivo.js
            export const msg = "Mensagem";
            // ou export { msg };

            // main.js
            import { msg as message } from "./aquivo.js";
            console.log(message); // "Mensagem". Desse jeito não vai dar erro.
            ```
            Posso tbm importar várias coisas ao mesmo tempo usando o `* as`, atribuindo os elementos importados a um objeto como atributo. Ex.:
            ```
            // arquivo.js
            export const sum = (a, b) => a + b;
            export const multiply = (a, b) => a * b;
            export const subtract = (a, b) => a - b;
            export const divide = (a, b) => a / b;

                // ou export { sum, multiply, subtract, divide };

            // main.js
            import * as calculator from "./arquivo.js"; // tudo agora no objeto "calculator" com atributo

            console.log(calculator.sum(2, 2)); // 4

                // obs.: O novo objeto "calculator" não é extensível, então não pode ter adições de propriedades, dentro de main.js, como fazendo "calculator.rest = (a,b) => a % b;"
            ```

---

### ♻️ Princípios de Clean Code e refatoração

> Dicas aplicadas no projeto <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-01">Jogo da Advinhação</a>.

* Agrupar iguais com iguais no código (variáveis juntas, eventos, criação de funções, etc);
* Variáveis e funções o mais semânticas possíveis, não importa se o nome ficar grande;
* Optar por criar funções ou variáveis que retornam valor booleano de forma separada, para depois colocar como escutador, ou em uma condicional, por exemplo.

> Dicas aplicadas no projeto <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03">Calculadora de IMC</a>.

* Não importa se a variável ficar grande, deixe semântica;
* Funções enchutas e específicas;
* Evitar comentários desnecessários, como dizendo quais são as variáveis, quais os eventos e etc. O ideal é o código estar limpo e entendível ao ponto de estas coisas serem percebidas com facilidade e não precisarem ser comentadas;
* **Limpar e encurtar código != só diminuir linhas**: Diminuir linhas é ótimo, mas não é o mesmo que ter código limpo se não dá pra entender a lógica. Pense em encurtar, mas de repente **atribuindo a uma variavel/função com nome semântico** pra dar pra entender, ou **usar mais funções prototype**, como a própria isNaN;
* Regra do escoteiro: sempre melhore/refatore o código quando pegar nele. Sempre vai ter algo pra melhorar. (segundo Bob, mais de 80% da vida do programador é refatorando, seja no desenvolvimento, seja na manutenção de um determinado projeto);
* Em um caso em que precisei jogar na tela uma mensagem, precisei fazer várias ações apra isso. Então, por serem várias, a ideia foi agrupar num lugar só e dar um nome pra isso. Depois só chamar a função com esse nome que resume todo o ato e show de bola, ficou melhor pra entender. **Lembra sempre que é sobre isso:** se dá pra juntar tudo que tá relacionado em um único lugar e dar um nome semântico pra essa parada, faça, porque vai ficar melhor de entender o que está acontecendo depois.
* Agrupar metódos dentro de um <a href="https://github.com/lucyanovidio/rocketseat-explorer/tree/main/nivel-05/stage/desafio-03/js/modal.js">objeto literal</a> quando convir é uma ideia de juntar tudo em um único lugar, "responsável" pelas ações relacionadas a determinado elemento - que dá nome ao objeto. Para métodos de abrir e fechar modal por exemplo, manipulando a DOM por classe CSS. Porque chamar `Modal.open()` deixa muito mais claro o que tá acontecendo do que `modal.classList.add("open")` e etc. Deixa mais limpo, entendível e manutenível;
* Modularizar separarando em arquivos com nomes semânticos também

> OBS.: 
> - DICA 1: Comece com funçõeszonas mesmo, grandes, com tudo o que você precisa fazer. Depois vc vai refatorando fazendo funções menores, criando lógicas de agrupamento de métodos e estrutura de dados como foi para o modal e alert error, melhorando semântica de variáveis e etc. Só depois de fazer td q agt entende o que realmente vai ser necessário e vai ter sentido de ser feito.
> - DICA 2: DÊ SEMPRE O SEU MELHOR E NÃO SURTA POR NÃO FAZER MAIS. Se hoje você pode melhorar a semântica de uma variável de uma forma, faça. Amanhã você aprende algo novo e melhora suas ideias sobre refatoração e já vai estar criando estruturas de dados semanticas super lógicas, coerentes e entendíveis. Faz o que sabe, mas faz. Não feche os olhos pro que você pode fazer hoje e não surta por não saber fazer mais agora.


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
* Opte por usar `.addEventListener` para eventos ao invés de `onclick` ou outro método de evento com prefíxo "on". Ele pode gerar bugs em aplicações grandes. Opte também por separar as responsabilidades nunca deixando método para evento no corpo do documento HTML, mas no arquivo .js.




<br>

### ...

> Em construção
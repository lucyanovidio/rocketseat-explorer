# Anotações

### 💻 Introdução a programação, lógica e algoritmos com JavaScript e conceitos - Stage 4

Este módulo é sobre: Variáveis, operadores matemáticos, tipos de dados no JavaScript, operadores comparativos, estruturas de repetição e condicionais, funções no JavaScript e como utilizá-las.

---

### Variáveis

Alocação de espaço da memória para determinado valor de elemento, tendo ele um tipo, e um propósito no programa.

Formas de escrever:
* camelCase: escrevemos `myName`
* snakeCase: esrevemos `my_name`

### Declaração e atribuição (assignment)

Declarar é usar **let**, **const** ou **var** + o nome da variável. Exemplo:

```
let myName, myLastname; // 2 variáveis diferentes
```

* let: *let it change* - declaração que permite que conteúdo da variável seja mudado ao longo do código
* const: *constante* - declaração de variável que não poderá ter seu conteúdo mudado ao long do programa
* var: *variable* - declaração que permite que o conteúdo seja mudado, mas não recomendado o uso por possibilidade de ploblemas no código, devido ao *hoisting*, podendo ser substituida, então, por *let*.

### hoisting

Quando declaramos uma variável com *var* e a chamamos antes da atribuição, acontece o *hoisting* (do inglês elevação), que joga acima do chamamento da variável para que esta seja reconhecida, já que o JavaScript lê de cima para baixo. Porém ela é elevada sem a atribuição de valor, e portanto retorna *undefined*.

O hoisting também acontece com funções quando chamadas antes da criação, porém como são criadas ao mesmo tempo que "recebem valor", não retornam *undefined*, sendo elevadas com sua funcionalidade.

### Tipos de dados

JS é uma linguagem fracamente tipada e dinâmica, então não precisa dizer tipo na declaração de variáveis. Estes, no entanto, podem mudar a medida que se reatribui o valor da variável.

* Tipos Primitivos (não podem ser mudados): string, number, boolean, etc.
    * String: Cadeia de caracteres (usamos "" ou '' tanto faz, mas usamos a duplas qnd o string de dentro tiver aspas simples - ou template strings)
        <br> Exemplo: `let myName = "Lucyan";`
    * Number: Números
        <br> Exemplo: `let num = 2;`
    * Boolean: *true* ou *false*
        <br> Exemplo: `let isLucyan = myName === "Lucyan" // true`
* Tipos Estruturais (falam de organização de dados, estrutura de dados): Objetos, funções, arrays
    * Objetos: elemento com propriedades/atributos e funcionalidades/métodos (funções).
        <br> Exemplo:
        ```
        const myName = {
            firstName: "Lucyan",
            lastName: "Soares",
            nickName: "Ellan"
        }

        console.log(myName.lastName); // Soares
        ```
        > Objetos podem conter funções, arrays e até outros objetos dentro de si, mas é recomendado que se organize objetos com atributos apenas com tipos semelhantes
    * Funções: elementos que agrupam código para ser reutilizado em outro momento. Espressa funcionalidade podendo receber 
    argumentos. Tipos: named functions, funções anônimas, arrow functions, funções construtoras e callback functions.
        <br> Exemplo:

        ```
        // named function

        function sayMyName() {
            console.log("Lucyan");
        }

        sayMyName(); // Lucyan
        ```
    * Array: cadeia de elementos, agrupa vários elementos em si, podendo estes serem de tipos iguais ou diferentes.
        <br> Exemplo:
        ```
        let names = ["Lucyan", "Fernanda", "Ricardo", "Maria"];
        ```
* Tipo Primitivo Estrutural: null

Pra ver o tipo, usa o: `typeof + variável`

### Escopo - visibilidade do elemento

* Escopo global: variáveis/funções/elementos que podem ser usados em todo o programa
* Escopo de bloco/ escopo local (block-statement, block-scoped): elementos que são usados somente dentro de seus blocos, retornando erro (" *is not defined*") caso chamados fora
> o *hoisting* com o *var* também acontece para variáveis locais, menos para funções

### Outras anotações

* Concatenação (strings): `elemento + elemento`
* template literals / tamplate strings: `` (usado para inserir quebra de linha em uma string, interpolações e outras coisas)
* Interpolação: usar `${conteúdo}` dentro de template literals (alternativa para concatenação)
    * O conteúdo pode ser uma variável, função, operação matemática, o que quiser
* ECMAScript: orgão que padroniza o js, quais os tipos de dados, a sintaxe, etc.

<br>

### ... parei no exercicio de aula 2
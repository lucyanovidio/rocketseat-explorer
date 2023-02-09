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
> o *hoisting* com o *var* também acontece para variáveis locais. Com funções não.

### Outras anotações

* Concatenação (strings): `elemento + elemento`
* template literals / tamplate strings: `` (usado para inserir quebra de linha em uma string, interpolações e outras coisas)
* Interpolação: usar `${conteúdo}` dentro de template literals (alternativa para concatenação)
    * O conteúdo pode ser uma variável, função, operação matemática, o que quiser
* ECMAScript: orgão que padroniza o js, quais os tipos de dados, a sintaxe, etc.
* Palavra reservada: nome pras coisas já definidas no JS, tipo o "typeof". E aí essas palavras a gente não consegue usar pra, por ex, por como nome de variável ou de função, porque já existe, e vai dar erro.

### Manipulando Arrays

> Considere cada exemplo sendo mostrado no console com um "console.log" para dar os resultados mostrados ao lado 

* **push**: Adiciona um elemento no fim de um array. Ex.: `['a'].push('b') // ['a','b']`;
* **pop**: Remove um elemento do fim de um array. Ex.: `['a','b'].pop() // ['a']`;
* **unshift**: Adiciona um elemento no início de um array. Ex.: `['a'].unshift('b') // ['b','a']`;
* **shift**: Remove um elemento do início de um array. Ex.: `['b','a'].shift() // ['a']`;
> Obs.: Os métodos acima podem ser usados para configurar algorítmos de **pilha** e **fila**. Para uma **pilha** (LIFO - *last in, first out*), onde o último que entra é o primeiro a sair, podemos usar *push* seguido do *pop*. Já para uma **fila** (FIFO - *first in, first out*), onde o primeiro que entra é o primeiro a sair, podemos usar *push* seguido do *shift*.
* **slice**: Obter alguns elementos específicos do array. Como argumentos deste método, passamos a posição do primeiro elemento até a posição do último elemento que queremos remover + 1 (após, para "abraçar os elementos"). Ex.: `['a','b','c','d'].slice(1, 3) // ['b','c']`
    * Obs.: Após o uso do método, o array original não é afetado, ou seja, não removemos nada do array, apenas buscamos nele o que queríamos para determinado fim.
* **splice**: Remover de fato elementos específicos do array. Como argumentos, passamos a posição inicial do recorte de remoção de elementos, seguido da quantidade de elementos queremos remover após o inicial. Ex.: <br>

```
let myArray = ['a','b','c','d'];

console.log(myArray.splice(1, 3)); // ['b','c','d']
console.log(myArray); // ['a']
```
-
   * Obs.: Repare que ao chamar a execução do método, vemos os elementos que removemos. Já chamando o array em si ("myArray") ele mostra o que sobrou após a remoção. Poderíamos também atribuir `myArray.splice(1, 3)` a uma variável, dependendo do objetivo.
* **indexOf**: Diz a posição do elemento no array. Ex.: `['a','b'].indexOf('b') // 1`
    * Obs.: Eu poderia fazer algo assim, pro caso dos elementos e suas posições no array se darem de forma dinâmica em um programa:

```
let index = array.indexOf(x);
array.splice(index, 1); 

// Tirei do array um elemento x que não desejo nele e cuja posição eu não sei
```

### Prototype

JS é uma *prototype-based language*, linguagem baseada em protótipos, que são coisas feitas previamente antes de outra final. Isso porque JS tem muitas coisas já prontas em si pra cada tipo de dado, e isso que é o grande lance do JS.

Os elemento que a gente cria vem com um "protótipo ascendente" (ou seja, anterior ao que a gente criou), que é um conjunto de propriedades já definidas antes no JS, dentro do __ proto __ dele.
- `__proto__`: protótipo dos elementos, o protótipo ascendente.
- Prototype chain (cadeia de protótipo): o ato do elemento q eu criei puxar um protótipo ascentente a ele, e outro, e outro, o quantos tiverem, puxando suas props e etc, formando essa cadeia.

Se agt faz uma variável do tipo string, ou só escreve ela direto, colocando o proto em seguida, tipo `"lucyan".__proto__` no console, ele mostra pra gente o que ele puxa só por ser uma string, todas as coisas pré-definidas de antes, ou seja, um protótipo do tipo string, e ainda tbm puxa um "proto" do tipo objeto por conta dessa questão de cadeia (isso porque ao que parece os elementos por debaixo dos panos estão encapsulados em objetos mesmp que a gente não veja).

> E AÍ A QUESTÃO É: As paradas que aparecem qnd chama no `__proto__` e tals são funções e propriedades do dado que, conforme a gente vai aprendendo e decorando, usando e vendo como serve, a gente vai aprendendo a manipular dados como ninguém. O próprio "length" é uma dessas coisas.

## Type conversion/ typecasting x Type coersion

* **Type conversion/ typecasting**: Quando a gente muda o tipo de dado um elemento para outro tipo intencionalmente. Ex.:
```
Number("9") // 9
String(9) // "9"
```
* **Type coersion**: Quando o prórpio JS muda o tipo de dado de um elemento para outro tipo devido a algo. Ex.:
```
console.log("9" + 5 + 2); // "952" - JS concatenou transformando em string
console.log(Number("9") + 5 + 2) // 16 - Essa seria a forma correta
```

## Outros métodos

> Métodos `__proto__` do tipo number

* toFixed: Reduz as casas decimais de um número quebrado. Recebe como argumento o número de casas decimais desejadas. Ex.: 
```
let num = 33.333333;
console.log(num.toFixed(2)); // 33.33
```
* 

<br>

### ...

> Em construção

<!-- parei no data-manipulation, no replace -->
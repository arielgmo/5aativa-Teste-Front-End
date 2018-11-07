# 5aativa-Teste-Front-End

## Instruções

Teste de Front-End:

O Candidato deve seguir as seguintes instruções do teste:


- O Teste deverá ser entregue em no máximo 72horas;

- O Candidato deve subir o código do teste em seu próprio perfil do github, gitlab, bitbucket ou afins;

- Mandar o link do repositório assim que finalizar o teste por e-mail;


O Teste:


- Criar uma aplicação em ReactJS;

- Aplicar o layout passado pela ferramenta Zeplin;

- O candidato deve acessar a API da Marvel https://developer.marvel.com e listar os personagens como no exemplo (https://www.marvel.com/characters);
- A página deve conter uma busca que filtra os personagens e uma ordenação de “A-Z” e “Z-A”;

- As imagens necessárias para o teste serão enviadas para você


Instruções técnicas:

- Utilize as ferramentas disponíveis na internet para entregar o melhor resultado possível;

- Não se preocupe em finalizar o teste completamente, o que queremos saber de você é:

                - Seus conhecimentos técnicos;

                - Sua capacidade de contornar problemas;

                - Sua lógica de programação;

                - Qualidade e organização do código;

                - Sua capacidade de ler uma documentação e construir uma aplicação;


## Considerações minhas

-Resolvi fazer uma estrutura simples sem dividir em mais folders dentro dos components, por ter poucos components e julguei ser meio sem sentido dividir mais.

-Não estou certo de qual melhor forma de fazer o request dos personagens e de armazenar as informações no redux, porem vou usar a solução que achei melhor

-Não achei o logo da marvel pra baixar na api, então resolvi usar uma img da internet do logo deles mesmo.

-Talvez caso o codigo fosse crescer no MainContentContainer seria legal criar um componente só para os botões, talvez dividir em mais componentes tambem, mas por hora para não ficar complicando gerenciamento de estado e props, resolvi deixar tudo em um componente só.

-Resolvi evitar biblioteca de componentes para usar o css de maneira mais flexivel com 2 exceções, o sistemas de grid/row/col do antd e o sistema de icons/buttons do antd por precisar usar os icons de algum lugar, o dropbox de select que fiz talvez devesse ter feito com a biblioteca do antd, mas resolvi deixar um pouco feio mesmo sem usar componentes do antd, para manter a coesão.

-Podia ter usado font-awesome ou qualquer sistema para icons, resolvi usar antd, por já estar usando a lib para usar sistema de grid/row/col

-Dentro dos cards tinha algo como o nome real e o nome de heroi do personagem, porem na api não havia essa separação, as vezes vinham personagens com ambos os nomes apenas com nome e descrição, mas como não quis separar a string com alguma regra pois eu não conheço a extensão toda da api e não sei se qualquer regra que criar vai poder ser aplicada pra tudo, eu resolvi usar só um nome e deixar o card um pouco mais feio infelizmente.

-Eu usei bastante as propriedades de css do zeppelin, então talvez a aplicação não fique tão reativa a diferentes tamanhos de resolução, mas mexendo no css seria possivel.

-A opção para ter multiplas linhas com truncate não tem uma solução simples de css, poderia ser resolvida facilmente com textbox de bibliotecas de componentes, mas por ter optado em não usar biblioteca de componentes resolvi fazer um truncate sem os 3 pontos(...).

-Como a troca de ordem e a troca de paginas fazem requisições seria necessario bloquear o usuario em quanto a requisição ainda não retornou e foi exibida, porem como fazer validações é um pouco trabalhoso, não tive tempo de fazer, porem desenvolvi de forma que seria facil adicionar essas validações.

-Acredit0 que o select com characters do modelo mudaria de pagina ou componente para mostrar uma lista diferente, por questão de estar um pouco fora do escopo no momento e de tempo não desenvolvi essa feature, considerando que as apis tem informações diferentes pra cada categoria, precisaria de um trabalho maiorzinho dependendo.

-Talvez um arquivo de constantes fosse necessario se tivessemos mais constantes que só o tamanho da pagina que adicionei no arquivo mesmo.

-Depois de terminar o componente MainContentContainer, já no final do prazo, eu reparei que o css e o metodo render, ficaram mais longos que eu imaginava que eles iam ficar, seria legal dividir em mais metodos o render e talvez quebrar o componente em 3 ou 4 outro componentes pra não stackar 100 linhas de css se possivel.

# Sumarizador de textos
Esta solução visa extrair de um conjunto de sentenças, aquela(s) que melhor representa(m) o conteúdo e o seu contexo. Por exemplo, pode-se resumir um conjunto de comentários sobre uma marca e assim entender, de forma mais direta e rápida, o que os consumidores estão pensando.

## Objetivos
Realizar uma varredura por um conjunto de sentenças e retornar aquelas que são mais importantes para o entendimento global do conteúdo.

## Restrições
A presente solução possui as seguintes restrições:
- São aceitos até o momento apenas arquivos no formato Excel (.xlsx).
- Os comentários devem estar distribuídos em uma coluna chamada Comment.
- Caso exista uma coluna de categorização (opcional) dos comentários, esta coluna deve se chamar Group.
- O arquivo de entrada deve ser armazenado na pasta INPUT com o nome comments (comments.xlsx).
- O modelo aceita textos no idioma Português.
- Não há limitação para a quantidade de linhas (comentários). Isso apenas terá influência no custo da execução e no tempo de processamento.
 
## Dados de Entrada
Para execução do modelo os dados devem obedecer as restrições supracitadas. Portanto, o arquivo de entrada comments.xlsx deverá ter a seguinte estrutura:

-	**Comment *(texto)*:** Texto que se deseja resumir.
-	**Group *(texto)*:** Categoria do texto (não obrigatório).


(<a href="doc/comments.xlsx" download="comments.xlsx">Baixe o template dos dados de entrada aqui</a>)


## Parâmetros

#### Opcionais

-	**group_comment = *0/1*:** Por padrão, esse parâmetro está configurado como 0. Isso significa que cada comentário possui uma ou mais categorias, isto é, os dados de entrada possuem uma coluna de comentários (Comment) e uma categórica (Group). Nesse cenário, o modelo irá condensar todos os textos que pertencem a uma mesma categoria e então realizar o resumo de todo o corpus gerado. Caso o arquivo de entrada contenha apenas uma coluna contendo os comentários, o parâmetro group_comment deverá ser configurado como 1 e dessa forma, o modelo considerará todas as linhas de texto para realizar o resumo.

## Outputs
A execução do modelo irá gerar um arquivo chamado summary.xlsx. Este arquivo terá uma estrutura muito semelhante aos dados de entrada, como mostrado abaixo:

-	**Summary *(texto)*:** Texto resumido.
-	**Groups *(texto)*:** Categoria do texto resumido (caso exista nos dados de entrada).

(<a href="doc/summary.xlsx" download="summary.xlsx">Baixe um exemplo da saída gerada aqui</a>)

## Preço
Esta solução tem seu preço atrelado ao número de execuções do modelo bem como ao tamanho da base de entrada (volume de comentários).



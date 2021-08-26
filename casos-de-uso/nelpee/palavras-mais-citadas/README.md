# Most Cited Words
Ferramenta que recebe uma base de comentarios e cria uma base com as expressões de 2 e 3 palavras mais frequentes na base.

## Objetivos
Mapear os tópicos mais frequentes aborados pelos autores dos comentários para geração de insights.

## Restrições
A presente solução possui as seguintes restrições:

- São aceitos apenas aquivos excel (.xlsx).
- Os comentarios devem estar distribuídos em uma coluna chamada "Comment".
- A solução se aplica apenas para o idioma português (BR).
- O arquivo de entrada deve ser armazenado na pasta INPUT com o nome "comments.xlsx".
- Não há limitação para a quantidade de linhas (comentários). Isso apenas terá influência no custo da execução e no tempo de processamento.
 
## Dados de Entrada
Para execução do modelo os dados devem obedecer as restrições supracitadas. Portanto, o arquivo de entrada comments.xlsx deverá ter a seguinte estrutura:

-	**ID *(int)*:** Código identificador do comentáio.
-	**Comment *(texto)*:** Texto do comentário.

Dados de exemplo devem ser incluídos, referenciados com link, da seguinte forma:
(<a href="doc/comments.xlsx" download="comments.xlsx">Baixe o template de dados aqui</a>)

## Parâmetros

-	**irrelevant_words = *List of strings*:** Por padrão, esse parâmetro está configurado como uma lista vazia. Caso seja introduzida uma lista com palavras, essas serão desconsideradas dos comentários para evitar a geração de ngrams irrelevantes. Exemplos de palavras irrelevantes são: "pode", "ser", "estar"

## Outputs
A execução do modelo irá gerar um arquivo chamado ngrams.xlsx. Este arquivo conterá uma base com as ocorrências dos ngrams, indicando os comentários em que foram encontrados

-	**ID *(int)*:** Código identificador do comentáio.
-	**ngram *(texto)*:** expressão encontrada naquele comentário.
-	**ngram_index *(int)*:** índice associado à expressão encontrada.

Dados de exemplo devem ser incluídos, referenciados com link, da seguinte forma:
(<a href="doc/data_outp.xlsx" download="data_outp.xlsx">Baixe o template de dados aqui</a>)

## Preço
Esta solução tem seu preço atrelado ao número de execuções do modelo bem como ao tamanho da base de entrada (volume de comentários).
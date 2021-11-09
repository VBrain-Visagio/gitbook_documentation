# Análise de Sentimentos
A solução recebe como entrada uma planilha de comentários e classifica o sentimento de cada comentário em Positivo, Negativo, Misto ou Neutro.

## Objetivos
A partir de textos de entrada, classificar o sentimento de cada texto em Positivo, Negativo, Misto ou Neutro.

## Restrições
O modelo possui as seguintes restrições:
* O modelo aceita soluções nos idiomas português, inglês e espanhol
* O arquivo de entrada deve estar no formato xlsx

## Dados de Entrada
Como entrada do modelo temos a base Comments, com os textos cujos sentimentos serão classificados pelo modelo.

O link a seguir possui exemplos das bases de input.
(<a href="doc/INPUT.zip" download="INPUT.zip">baixe exemplos de input aqui</a>)

### Comments *(Comentários)*
Planilha no formato Excel chamada comments.xlsx e contando as colunas obrigatórias ID e comment.

-	**ID *(inteiro)*:** Identificador do comentário. Cada comentário deve ter um identificador único. Como exemplo de identificador, você pode utilizar números inteiros, enumerando cada comentário.
-	**Comment *(texto)*:** Comentário a ser classificado.


## Parâmetros
Não há parâmetros a serem configurados no modelo.

## Outputs
A saída do modelo é o arquivo Sentiment, correspondente aos sentimentos dos textos de entrada.

Um exemplo da base retornada pode ser encontrada no link a seguir.
(<a href="doc/OUTPUT.zip" download="OUTPUT.zip">baixe um exemplo de output aqui</a>)


## Preço
O custo de utilização da solução é proporcional à quantidade e tamanho dos textos classificados.



# Análise de Satisfação
Esta solução tem como objetivo identificar o nível de satisfação do cliente dado o comentário realizado. Um exemplo é quando uma empresa realizada um atendimento ao cliente e precisa entender se o cliente ficou insatisfeito, para assim tentar um novo contato ou utilizar o dado em futuras melhorias nas jornadas do cliente.

## Objetivos
Identificar o nível de satisfação do cliente nas interações realizadas com a marca.

## Restrições
A solução possui as seguintes restrições:
- São aceitos até o momento apenas arquivos no formato Excel (.xlsx).
- Devem ser obedecidos exatamente os padrões de input definidos em Dados de Entrada
- O modelo aceita textos nos idiomas Português e Inglês.
- Não há limitação para a quantidade de comentários. Isso apenas terá influência no custo da execução e no tempo de processamento.

## Dados de Entrada
Existem dois dados de entrada para a solução: a base Comments, a ser classificada, e a base Training, utilizada para treinar o modelo de regressão logística utilizado na classificação do comentário

O link a seguir possui exemplos das bases de input.
(<a href="doc/data.zip" download="data.zip">Baixe os exemplos aqui.</a>)

### Comments *(Comentários)*
Planilha no formato Excel chamada comments.xlsx e contando as colunas obrigatórias ID e comment.

-	**ID *(inteiro)*:** Identificador do comentário. Cada comentário deve ter um identificador único. Como exemplo de identificador, você pode utilizar números inteiros, enumerando cada comentário.
-	**Comment *(texto)*:** Comentário a ser classificado.

### Training *(Rótulos)*
Arquivo Excel chamado training.xlsx. Este documento possui uma série de comentários já classificados de uma base pública de pesquisas de satisfação que reune respostas para diversos segmentos.

Esta planilha deve possuir os seguintes campos.
-	**Comment *(texto)*:** Texto com o comentário realizado na pesquisa
-	**Label *(texto)*:** Rótulo de satisfação referente à aquele comentário. Pode ser ter os valores de "elogio", "neutro" ou "reclamação". Durante o treinamento do modelo, os rótulos são transformados em "SATISFEITO", "NEUTRO" e "INSATISFEITO, respectivamente.

## Parâmetros

#### Opcionais
-	**sentence-transformer *(string)*:** Indica qual o modelo de sentence-transformer que será utilizado para a criação dos embeddings. Esses embeddings serão utilizados como features para o modelo de regressão logística
-	**log_regr_solver *(string)*:** Parâmetro para definir qual o solver utilizado pela regressão logística. Como padrão é utilizado o liblinear. Para mais infos, (<a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html">consulte o site do scikit-learn através desse link.</a>)
-	**log_regr_loss *(string)*:** Parâmetro para definir qual o algoritmo de regularização que será utilizado no treinamento da regressão logística. Como padrão é utilizado "l2" (Ridge Regression). Para mais infos, (<a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html">consulte o site do scikit-learn através desse link.</a>)


## Outputs
Como saída, a solução retorna a base Labeled Comments com os comentários categorizados. 

Um exemplo da base retornada pode ser encontrada no link a seguir.
(<a href="doc/data.zip" download="data.zip">Baixe os exemplos aqui.</a>)

### Labeled Comments *(Comentários Rotulados)*
Arquivo no formado Excel chamado comments_labeled.xlsx. Esta planilha contém os comentários categorizados.

-	**ID *(inteiro)*:** Código identificador do comentário original.
-	**Comment *(texto)*:** Comentário classificado
-   **Satisfaction_Label *(texto)*:** Rótulo de satisfação definido para o texto

## Preço
O preço desta solução é relacionado ao tamanho da base de comentários e à utilização da GPU para a aceleração do processamento.
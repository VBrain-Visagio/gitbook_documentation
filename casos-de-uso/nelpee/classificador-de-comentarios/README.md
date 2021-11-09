# Classificador de Comentários

Esta solução tem como objetivo classificar comentários em categorias definidas pelo usuário. Como exemplo de uso, um usuário pode inserir como input uma base de comentários de um E-Commerce de roupas e classificar as avaliações pelos seguintes temas: Tecido, Costura, Pintura, Estampa, entre outras. O modelo aceita qualquer categoria e não exige uma base de treino para a classificação.

## Objetivos

Categorizar uma base de comentários com categorias definidas pelo usuário.

## Restrições

A solução possui as seguintes restrições:

* São aceitos até o momento apenas arquivos no formato Excel (.xlsx).
* Devem ser obedecidos exatamente os padrões de input definidos em Dados de Entrada
* O modelo aceita textos nos idiomas Português e Inglês.
* Não há limitação para a quantidade de comentários. Isso apenas terá influência no custo da execução e no tempo de processamento.

## Dados de Entrada

Existem dois dados de entrada para a solução: a base Comments, a ser classificada, e a base Labels, definindo as categorias da classificação.

O link a seguir possui exemplos das bases de input. ([baixe exemplos de input aqui](doc/data\_input.zip))

### Comments _(Comentários)_

Planilha no formato Excel chamada comments.xlsx e contando as colunas obrigatórias ID e comment.

* **ID **_**(inteiro)**_**:** Identificador do comentário. Cada comentário deve ter um identificador único. Como exemplo de identificador, você pode utilizar números inteiros, enumerando cada comentário.
* **Comment **_**(texto)**_**:** Comentário a ser classificado.

### Labels _(Rótulos)_

Arquivo Excel chamado labels.xlsx. Este documento deve possuir classes e exemplos de termos e palavras-chaves que irão ser usados para classificar os comentários. Cada Label desta planilha deve possuir exemplos de termos que podem descrever esta Label. Ela possui duas colunas: Label e Example.

Como exemplo temos duas labels: Reembolso e Pagamento. A label Reembolso pode estar associada aos termos "Reembolso", "Devolução do dinheiro" e "Ressarcimento" e a label Pagamento pode estar associada aos termos "Boleto" ou "Fatura". Os termos são colocados na coluna Example. O classificador irá usar os exemplos para aprimorar sua classificação e retornar a Label que melhor descreve o comentário.

Esta planilha deve possuir os seguintes campos.

* **Example **_**(texto)**_**:** Termo que descreve a respectiva Label. Vários termos podem ser utilizados para a mesma Label. Caso sejam inseridas diversos termos para a mesma Label, o modelo irá considerar as diversas opções durante a classificação, podendo ter um resultado mais acurado.
* **Label **_**(texto)**_**:** Nome da classe à qual o respectivo termo na coluna Example pertence. Label será o nome dado à classe ao fim da categorização.

## Parâmetros

#### Opcionais

* **classification\_type **_**(texto)**_**:** Caso 'Multi-label' (padrão), permite que o modelo classifique o mesmo comentário em mais de uma categoria. Caso 'Single-label', o comentário é associado a apenas uma classe.
* **device **_**(inteiro)**_**:** Este parâmetro indica se o modelo será executado em CPU ou em GPU. Para a execução em CPU (modo padrão), deve possuir o valor -1. Para execução em GPU, deve possuir um inteiro correspondente à GPU utilizada (geralmente 0).

## Outputs

Como saída, a solução retorna a base Labeled Comments com os comentários categorizados.

Um exemplo da base retornada pode ser encontrada no link a seguir. ([baixe um exemplo de output aqui](doc/comments\_labeled.xlsx))

### Labeled Comments _(Comentários Rotulados)_

Arquivo no formado Excel chamado comments\_labeled.xlsx. Esta planilha contém os comentários categorizados.

Caso a classificação seja configurada para Multi-label, o mesmo comentário será replicado em diferentes linhas, cada linha representando uma classe.

* **ID **_**(inteiro)**_**:** Código identificador do comentário original.
* **Comment **_**(texto)**_**:** Comentário classificado
* **Label **_**(texto)**_**:** Classe do comentário

## Preço

O preço desta solução é relacionado ao tamanho da base de comentários e à utilização da GPU para a aceleração do processamento.

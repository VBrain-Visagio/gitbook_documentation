Previsão de Demanda
=======================================

Este módulo foi desenvolvido para realizar previsões de demanda para o varejo, caracterizado pela existência de grande número de produtos, distribuídos e armazenados em diferentes lojas para atendimento ao consumidor final.
São disponibilizados diferentes versões de modelos, cada qual com características e aplicabilidade distintas que são descritas a seguir.

Os modelos de previsão desenvolvidos consideram, em sua maioria, inputs com granularidade diárias. As previsões de vendas, entretanto, podem ser realizadas com agregações semanais ou superiores, dependendo do modelo e configurações selecionadas. Alguns modelos podem ser executados sem a premissa de haver um histórico de vendas prévio para todos os produtos, podendo tratar tanto lançamento quanto produtos cíclicos ou coleções.


## Modelos Implementados

- DeepAR+ (AWS Forecast):
- Média móvel: Modelo básico que não precisa ser pré-treinado e rápida execução. Utilizado para ...


## Inputs

### Histórico de Vendas
- Data
- Item
- Local
- Quantidade

Além das informações básicas acima, algumas informações podem ser fornecidas para aumentar as dimensões (ou quebras) das previsões realizadas. Por exemplo, caso desejemos uma previsão segmentada num nível superior ao nível item + local, é necessário inserir a coluna desejada com os históricos de vendas correspondente.

### Séries Relacionadas (opcional)

### Tabela de Características dos Produtos (opcional)


## Parâmetros de Execução

## Outputs





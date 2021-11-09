# Roteirização de Força de Campo

Este modelo foi desenvolvido para otimizar as rotas de atendimento a serviços de campo, sejam esses relacionados a chamados técnicos ou entregas/coletas de pedidos, através de uma frota de veículos e/ou equipe de profissionais

## Objetivos

* Realizar o máximo de serviços dentro das janelas de atendimento cadastradas
* Minimizar o custo total relacionado ao atendimento dos serviços

## Restrições

* Limitação de veículos permitidos ao atendimento de demandas
* Limitação da capacidade do veículo para atendimento às demandas
* Atendimento a grupos de demanda realizada por um mesmo veículo
* Tempo mínimo para planejamento de um trecho (aplicado quando trechos exigem um tempo de planejamento mínimo, como no caso de necessidade de compra de passagens aéreas)
* Inclusão de SLA de atendimento de demanda
* Janelas de atendimento

## Dados de Entrada

Os dados de entrada do otimizador são fornecidos através em um arquivo em formato excel ([baixe o template de dados aqui](doc/data\_input.xlsx)), organizado em abas, conforme detalhamento abaixo:

### Location _(Localidade)_

* **id** (texto): identificador único para a localidade
* **lat** (float): latitude
* **long** (float): longitude
* (opcional) **accommodation\_cost** (float): custo de acomodação de um profissional na respectiva localidade. Utilizado quando o modelo é configurado para permitir períodos de descanso fora da base.

### (opcional) CostMatrix _(Loja)_

* **Código da loja **_**(texto)**_**:** identificador único da loja
* **Id da localidade **_**(texto)**_**:** código correspondente à localidade informada na planilha ‘Location’

### (opcional) Worker _(Profissional)_

### (opcional) Vehicle _(Veículo)_

### Route _(rota)_

### (opcional) Depot _(depósito)_

### (opcional) Item _(item)_

### (opcional) Inventory _(estoque)_

### Visit _(visit)_

### (opcional) Demand _(demand)_

## Parâmetros

Para execução do modelo de otimização é necessário que sejam informados alguns parâmetros. Alguns desses são obrigatórios e outros opcionais, de uso mais avançado. Esse parâmetros são informados tanto através da API, quando dos aplicativos disponibilizados para uso, podendo a descrição e formato variarem conforme a interface utilizada.

#### Obrigatórios

* **start\_date **_**(texto)**_**:** data de início da otimização, no formato "YYYY-MM-DD"
* **store\_id **_**(texto)**_**:** lista de códigos de lojas a serem otimizadas. Caso não seja informado, o modelo otimizará todas as lojas cadastradas no arquivo de entrada de dados.
* **role\_id **_**(texto)**_**:** lista de códigos de funções a serem otimizadas. Caso não seja informado, o modelo otimizará todas as funções cadastradas no arquivo de entrada de dados.
* **max\_horizon **_**(inteiro)**_**:** horizonte em dias, a partir da data de início, que será definido para a otimização.

#### Opcionais

* **max\_solution\_time **_**(inteiro)**_**:** tempo máximo em segundos para o otimizador encontrar o resultado ótimo. Caso o tempo seja atingido sem que o valor ótimo seja alcançado, o otimizador retornará o melhor valor obtido.
* **objective\_function **_**(lista )**_**:** lista em ordem de prioridade dos objetivos a serem buscados pelo otimizador. Possíveis valores são "demand\_fulfillment", "holiday\_compensation", "priority\_working\_days", , "working\_days", "preferable\_rests", "workforce\_balance" e "working\_hours"

## Outputs

Ao final da execução da roteirização é gerado um relatório com as informações a seguir:

### Rotas de Atendimento

Arquivo no formato csv contendo as seguintes colunas:

* **task **_**(texto)**_**:** identificador único da alocação
* **start **_**(texto)**_**:** início do dia de trabalho no formato "YYYY-MM-DD HH:MM"
* **finish **_**(texto)**_**:** término do dia de trabalho no formato "YYYY-MM-DD HH:MM"
* **resource **_**(texto)**_**:** código correspondente a um dos colaboradores informados na planilha 'Employee'
* **store **_**(texto)**_**:** código correspondente a uma das lojas informadas na planilha 'Store'
* **type **_**(texto)**_**:** tipo da alocação assumindo um dos seguintes valores:
  * "allocation": alocação normal
  * "compensation": dia de compensação de folga
  * "extra": indicação de necessidade de pessoal na janela informada

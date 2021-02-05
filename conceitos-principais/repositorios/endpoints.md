---
description: Documentação de todos os endpoints para manipulação de repositórios
---

# Endpoints

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/repository" %}
{% api-method-summary %}
Obter Repositórios
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna uma lista de **Repositórios** para o **Client** atual**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="from\_date" type="string" %}
Data mínima para pesquisar \(Formato: AAAAMMDDHHMM\)
{% endapi-method-parameter %}

{% api-method-parameter name="to\_date" type="string" %}
Data máxima para pesquisar \(Formato: AAAAMMDDHHMM\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Lista de **repositórios** para a chave {_organization\_id, application\_id, client\_id_}
{% endapi-method-response-example-description %}

```
[
  "202011232005725016",
  "202011232005713993",
  "202011232005497236"
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes ou parâmetros de _query_ malformados
{% endapi-method-response-example-description %}

```
{
  "error": "Missing organization_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="post" host="https://vbrain.visagio.com" path="/api/v1/repository" %}
{% api-method-summary %}
Criar Repositórios
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que cria um novo **Repositório** para o **Client** atual**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-form-data-parameters %}
{% api-method-parameter name="file" type="object" required=false %}
ZIP contendo todos os dados de entrada ou um   
arquivo do tipo .csv, .xlsx ou .json
{% endapi-method-parameter %}

{% api-method-parameter name="params" type="object" required=false %}
Json contendo os parâmetros comuns do repositório
{% endapi-method-parameter %}

{% api-method-parameter name="metadata" type="object" required=false %}
Json contendo os metadados do repositório
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
Informações sobre o **repositório** criado
{% endapi-method-response-example-description %}

```
{
  "message": "Repository created successfully",
  "repository_id": "202009231629398695"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes
{% endapi-method-response-example-description %}

```
{
  "error": "Missing organization_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/repository/:repository\_id" %}
{% api-method-summary %}
Obter informações de um Repositório
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna informações detalhadas de um **Repositório** específico**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="repository\_id" type="string" required=true %}
Id do **Repositório** criado anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Informações detalhadas do **Repositório**
{% endapi-method-response-example-description %}

```
{
  "repository_id": "202009231629398695",
  "name": "Test Repository",
  "input": [
    "data_input.xlsx",
    "auxiliary.xlsx"
  ],
  "created_on": "2020-09-23_16:29:39",
  "created_by": "vbrain_user",
  "params": true,
  "jobs": [
    "f6d3fedc-a92e-4024-aaa4-1384159ef0c7",
    "44379b2e-f4bf-443d-b758-d05a48f3689a",
    "38ccda59-beef-4237-9348-860a308b6c92"
  ],
  "metadata": {
    "name": "Test Repository",
    "more_data": 42
  }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes
{% endapi-method-response-example-description %}

```
{
  "error": "Missing organization_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
O id do **Repositório** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid repository_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://vbrain.visagio.com" path="/api/v1/repository/:repository\_id" %}
{% api-method-summary %}
Excluir um Repositório
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que exclui um **Repositório** específico e todas as suas **Execuções.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="repository\_id" type="string" required=true %}
Id do **Repositório** criado anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Mensagem de sucesso
{% endapi-method-response-example-description %}

```
{
  "message": "Repository and jobs deleted"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes
{% endapi-method-response-example-description %}

```
{
  "error": "Missing application_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
O id do **Repositório** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid repository_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Erro ao excluir o **Repositório**
{% endapi-method-response-example-description %}

```
{
  "error": "Error deleting repository folder"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/repository/:repository\_id/input" %}
{% api-method-summary %}
Baixar input de um Repositório
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna a pasta de _input_ de um **Repositório** específico**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="repository\_id" type="string" required=true %}
Id do **Repositório** criado anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Binário do zip da pasta de _input_ do **Repositório**
{% endapi-method-response-example-description %}

```
<binário do zip>
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes
{% endapi-method-response-example-description %}

```
{
  "error": "Missing organization_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
O id do **Repositório** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid repository_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/repository/:repository\_id/params" %}
{% api-method-summary %}
Obter parâmetros de um Repositório
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna o _json_ dos parâmetros de um **Repositório** específico**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="repository\_id" type="string" required=true %}
Id do **Repositório** criado anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=false %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
_Json_ do arquivos de parâmetros do **Repositório**
{% endapi-method-response-example-description %}

```
{
  "a": 10,
  "b": 20,
  "hyperparam": "Hyperparam_Example"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
Informações do _header_ faltantes
{% endapi-method-response-example-description %}

```
{
  "error": "Missing organization_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
O id do **Repositório** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid repository_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}


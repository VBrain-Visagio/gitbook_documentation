---
description: Documentação de todos os endpoints para manipulação de execuções
---

# Endpoints

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job" %}
{% api-method-summary %}
Obter Execuções
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna uma lista de **Execuções** para o **Client** e **Repositório** atual**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="repository\_id" type="string" required=true %}
Id do **Repositório** criado anteriormente
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
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
Lista de **execuções** para a chave {_organization\_id, application\_id, client\_id, repository\_id_}
{% endapi-method-response-example-description %}

```
[
  "f6d3fedc-a92e-4024-aaa4-1384159ef0c7",
  "44379b2e-f4bf-443d-b758-d05a48f3689a",
  "38ccda59-beef-4237-9348-860a308b6c92"
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

{% api-method method="post" host="https://vbrain.visagio.com" path="/api/v1/job/execute" %}
{% api-method-summary %}
Criar Execuções
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que cria uma nova **Execução** para o **Client** e **Repositório** atual**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
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
  "message": "Job created",
  "job_id": "2e065d31-b19f-486a-85ab-b69afab282b5"
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

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id" %}
{% api-method-summary %}
Obter informações de uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna informações detalhadas de uma **Execução** específica**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
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

{% api-method method="delete" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id" %}
{% api-method-summary %}
Excluir uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que exclui uma **Execução** específica.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
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
  "message": "Jobs deleted"
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
O id da **Execução** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid job_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Erro ao excluir a **Execução**
{% endapi-method-response-example-description %}

```
{
  "error": "Error deleting job folder"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id/result" %}
{% api-method-summary %}
Obter resultados de uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna um _json_ com o resultado de uma **Execução** específica**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Resultado da **Execução** finalizada
{% endapi-method-response-example-description %}

```
{
  "output": {
    "value": 600,
    "more_results": "So long, and thanks for all the fish"
  }
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=202 %}
{% api-method-response-example-description %}
Mensagem indicando que a **Execução** ainda não finalizou
{% endapi-method-response-example-description %}

```
{
  "message": "Job not yet finished"
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
O id da **Execução** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid job_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
A **Execução** finalizou com erro
{% endapi-method-response-example-description %}

```
{
  "error": "Job failed"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id/params" %}
{% api-method-summary %}
Obter parâmetros de uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna um _json_ com os parâmetros de uma **Execução** específica**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
_Json_ do arquivo de parâmetros da **Execução**
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
  "error": "Missing application_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
O id da **Execução** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid job_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id/output" %}
{% api-method-summary %}
Baixar output de uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna a pasta de _output_ de uma **Execução** específica**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Binário do zip da pasta de _output_ da **Execução**
{% endapi-method-response-example-description %}

```
<binário do zip>
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=202 %}
{% api-method-response-example-description %}
Mensagem indicando que a **Execução** ainda não finalizou
{% endapi-method-response-example-description %}

```
{
    "message": "Job not yet finished"
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
O id da **Execução** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid job_id"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
A **Execução** finalizou com erro
{% endapi-method-response-example-description %}

```
{
  "error": "Job failed"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://vbrain.visagio.com" path="/api/v1/job/:job\_id/logs" %}
{% api-method-summary %}
Baixar logs de uma Execução
{% endapi-method-summary %}

{% api-method-description %}
_Endpoint_ que retorna a pasta de _log_ de uma **Execução** específica**.**
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="job\_id" type="string" required=true %}
Id da **Execução** criada anteriormente
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="username" type="string" required=true %}
Usuário utilizando a API
{% endapi-method-parameter %}

{% api-method-parameter name="organization\_id" type="string" required=true %}
Nome da **Organização**
{% endapi-method-parameter %}

{% api-method-parameter name="application\_id" type="string" required=true %}
Nome da **Aplicação**
{% endapi-method-parameter %}

{% api-method-parameter name="client\_id" type="string" required=true %}
Nome do **Client**
{% endapi-method-parameter %}

{% api-method-parameter name="x-api-key" type="string" required=true %}
API-Key gerada 
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Binário do zip da pasta de _log_ da **Execução**
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
O id da **Execução** não existe
{% endapi-method-response-example-description %}

```
{
  "error": "Invalid job_id"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}




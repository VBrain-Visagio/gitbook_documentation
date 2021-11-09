---
description: Documentação de todos os endpoints para manipulação de execuções
---

# Endpoints

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job" method="get" summary="Obter Execuções" %}
{% swagger-description %}
_Endpoint_

 que retorna uma lista de 

**Execuções**

 para o 

**Client**

 e 

**Repositório**

 atual**.**
{% endswagger-description %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="repository:id" type="string" required="true" in="header" %}
Id do 

**Repositório**

 criado anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-parameter name="from:date" type="string" in="query" %}
Data mínima para pesquisar (Formato: AAAAMMDDHHMM)
{% endswagger-parameter %}

{% swagger-parameter name="to:date" type="string" in="query" %}
Data máxima para pesquisar (Formato: AAAAMMDDHHMM)
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
[
  "f6d3fedc-a92e-4024-aaa4-1384159ef0c7",
  "44379b2e-f4bf-443d-b758-d05a48f3689a",
  "38ccda59-beef-4237-9348-860a308b6c92"
]
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing organization_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid repository_id"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/execute" method="post" summary="Criar Execuções" %}
{% swagger-description %}
_Endpoint_

 que cria uma nova 

**Execução**

 para o 

**Client**

 e 

**Repositório**

 atual**.**
{% endswagger-description %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-parameter name="file" type="object" required="false" in="body" %}
ZIP contendo todos os dados de entrada ou um

\


arquivo do tipo .csv, .xlsx ou .json
{% endswagger-parameter %}

{% swagger-parameter name="params" type="object" required="false" in="body" %}
Json contendo os parâmetros comuns do repositório
{% endswagger-parameter %}

{% swagger-parameter name="metadata" type="object" required="false" in="body" %}
Json contendo os metadados do repositório
{% endswagger-parameter %}

{% swagger-response status="201" description="" %}
```
{
  "message": "Job created",
  "job_id": "2e065d31-b19f-486a-85ab-b69afab282b5"
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing organization_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid repository_id"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id" method="get" summary="Obter informações de uma Execução" %}
{% swagger-description %}
_Endpoint_

 que retorna informações detalhadas de uma 

**Execução**

 específica**.**
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
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
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing organization_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid repository_id"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id" method="delete" summary="Excluir uma Execução" %}
{% swagger-description %}
_Endpoint_

 que exclui uma 

**Execução**

 específica.
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
{
  "message": "Jobs deleted"
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing application_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid job_id"
}
```
{% endswagger-response %}

{% swagger-response status="500" description="" %}
```
{
  "error": "Error deleting job folder"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id/result" method="get" summary="Obter resultados de uma Execução" %}
{% swagger-description %}
_Endpoint_

 que retorna um 

_json_

 com o resultado de uma 

**Execução**

 específica**.**
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
{
  "output": {
    "value": 600,
    "more_results": "So long, and thanks for all the fish"
  }
}
```
{% endswagger-response %}

{% swagger-response status="202" description="" %}
```
{
  "message": "Job not yet finished"
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing application_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid job_id"
}
```
{% endswagger-response %}

{% swagger-response status="500" description="" %}
```
{
  "error": "Job failed"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id/params" method="get" summary="Obter parâmetros de uma Execução" %}
{% swagger-description %}
_Endpoint_

 que retorna um 

_json_

 com os parâmetros de uma 

**Execução**

 específica**.**
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
{
  "a": 10,
  "b": 20,
  "hyperparam": "Hyperparam_Example"
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing application_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid job_id"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id/output" method="get" summary="Baixar output de uma Execução" %}
{% swagger-description %}
_Endpoint_

 que retorna a pasta de 

_output_

 de uma 

**Execução**

 específica**.**
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
<binário do zip>
```
{% endswagger-response %}

{% swagger-response status="202" description="" %}
```
{
    "message": "Job not yet finished"
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing organization_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid job_id"
}
```
{% endswagger-response %}

{% swagger-response status="500" description="" %}
```
{
  "error": "Job failed"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/job/:job:id/logs" method="get" summary="Baixar logs de uma Execução" %}
{% swagger-description %}
_Endpoint_

 que retorna a pasta de 

_log_

 de uma 

**Execução**

 específica**.**
{% endswagger-description %}

{% swagger-parameter name="job:id" type="string" required="true" in="path" %}
Id da 

**Execução**

 criada anteriormente
{% endswagger-parameter %}

{% swagger-parameter name="username" type="string" required="true" in="header" %}
Usuário utilizando a API
{% endswagger-parameter %}

{% swagger-parameter name="organization:id" type="string" required="true" in="header" %}
Nome da 

**Organização**
{% endswagger-parameter %}

{% swagger-parameter name="application:id" type="string" required="true" in="header" %}
Nome da 

**Aplicação**
{% endswagger-parameter %}

{% swagger-parameter name="client:id" type="string" required="true" in="header" %}
Nome do 

**Client**
{% endswagger-parameter %}

{% swagger-parameter name="x-api-key" type="string" required="true" in="header" %}
API-Key gerada
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
<binário do zip>
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```
{
  "error": "Missing organization_id"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="" %}
```
{
  "error": "Invalid job_id"
}
```
{% endswagger-response %}
{% endswagger %}

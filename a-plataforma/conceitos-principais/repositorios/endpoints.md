---
description: Documentação de todos os endpoints para manipulação de repositórios
---

# Endpoints

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository" method="get" summary="Obter Repositórios" %}
{% swagger-description %}
_Endpoint_

 que retorna uma lista de 

**Repositórios**

 para o 

**Client**

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

{% swagger-parameter name="from:date" type="string" in="query" %}
Data mínima para pesquisar (Formato: AAAAMMDDHHMM)
{% endswagger-parameter %}

{% swagger-parameter name="to:date" type="string" in="query" %}
Data máxima para pesquisar (Formato: AAAAMMDDHHMM)
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
[
  "202011232005725016",
  "202011232005713993",
  "202011232005497236"
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
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository" method="post" summary="Criar Repositórios" %}
{% swagger-description %}
_Endpoint_

 que cria um novo 

**Repositório**

 para o 

**Client**

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
  "message": "Repository created successfully",
  "repository_id": "202009231629398695"
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
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository/:repository:id" method="get" summary="Obter informações de um Repositório" %}
{% swagger-description %}
_Endpoint_

 que retorna informações detalhadas de um 

**Repositório**

 específico**.**
{% endswagger-description %}

{% swagger-parameter name="repository:id" type="string" required="true" in="path" %}
Id do 

**Repositório**

 criado anteriormente
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

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository/:repository:id" method="delete" summary="Excluir um Repositório" %}
{% swagger-description %}
_Endpoint_

 que exclui um 

**Repositório**

 específico e todas as suas 

**Execuções.**
{% endswagger-description %}

{% swagger-parameter name="repository:id" type="string" required="true" in="path" %}
Id do 

**Repositório**

 criado anteriormente
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
  "message": "Repository and jobs deleted"
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
  "error": "Invalid repository_id"
}
```
{% endswagger-response %}

{% swagger-response status="500" description="" %}
```
{
  "error": "Error deleting repository folder"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository/:repository:id/input" method="get" summary="Baixar input de um Repositório" %}
{% swagger-description %}
_Endpoint_

 que retorna a pasta de 

_input_

 de um 

**Repositório**

 específico**.**
{% endswagger-description %}

{% swagger-parameter name="repository:id" type="string" required="true" in="path" %}
Id do 

**Repositório**

 criado anteriormente
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
  "error": "Invalid repository_id"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://vbrain.visagio.com" path="/api/v1/repository/:repository:id/params" method="get" summary="Obter parâmetros de um Repositório" %}
{% swagger-description %}
_Endpoint_

 que retorna o 

_json_

 dos parâmetros de um 

**Repositório**

 específico**.**
{% endswagger-description %}

{% swagger-parameter name="repository:id" type="string" required="true" in="path" %}
Id do 

**Repositório**

 criado anteriormente
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

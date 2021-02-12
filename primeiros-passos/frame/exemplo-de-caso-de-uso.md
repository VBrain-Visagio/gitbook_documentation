---
description: Um caso de uso simples para explicar os conceitos básicos do VBrain
---

# Exemplo de Caso de Uso

## Configurações Iniciais

```python
import requests

#declaração de variáveis do header
headers = {'organization_id':'<nome da sua organização>',
           'application_id':'Tutorial',
           'client_id':'<nome do client utilizado>',
           'username':'<seu username>',
           'x-api-key':'<apikey gerada previamente>'}
```

O primeiro passo para utilizar a API é configurar os _headers_ da requisição a ser feita para a plataforma. Para isso, basta substituir os valores no dicionário acima para as suas credenciais.

Caso não possua uma API-Key, siga as instruções em [Configurações Iniciais](../configuracoes-iniciais.md).

## Criando um repositório

```python
repository_id = requests.post('https://vbrain.visagio.com/api/v1/repository',
                              headers = headers).json()['repository_id']
headers['repository_id'] = repository_id
print(f'O repositório criado possui id {repository_id}')
```

Com as credenciais devidamente configuradas, o próximo passo é criar um [**Repositório**](../../conceitos-principais/repositorios/) ****para ser utilizado na **Execução**.

Para o caso de uso atual estaremos criando um **Repositório** vazio, ou seja, sem arquivos na pasta de _Input._ Cada aplicação possui um padrão de quais arquivos são necessários e/ou opcionais para a execução, como pode ser visto na [seção de aplicações](../../aplicacoes/catalogo-de-aplicacoes/). A aplicação "Tutorial" não necessita de nenhum arquivo para funcionamento.

Mais detalhes sobre o funcionamento do **Repositório** podem ser encontrados em:

{% page-ref page="../../conceitos-principais/repositorios/" %}

## Iniciando uma Execução

```python
parametros_execucao = {'a':10,'b':20}

job_id = requests.post('https://vbrain.visagio.com/api/v1/job/execute',
                       headers = headers,
                       json = {'params':parametros_execucao}).json()['job_id']
print(f'O job criado possui id {job_id}')
```

O _repository\_id_ retornado previamente será utilizado para a criação de uma **Execução.**

A aplicação "Tutorial" recebe como parâmetros duas variáveis, $$a$$e $$b$$ _,_ que serão utilizadas para calcular o resultado final de $$a*b$$. Em outras aplicações esses parâmetros serão as suas datas para previsão de demandas, restrições para roteirização, etc...

Tais parâmetros são enviados ao _endpoint_ `/job/execute` __por meio do _json_ da requisição, dentro da chave _"params"._ Além dos parâmetros é possível enviar metadados da **Execução**, porém tal técnica está fora do escopo desse caso de uso.

Mais detalhes sobre o funcionamento da **Execução** podem ser encontrados em:

{% page-ref page="../../conceitos-principais/execucoes/" %}

## Acompanhando a Execução

```python
import time

response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}',
                        headers = headers)
                        
attempt = 0
while response.status_code != 200: #enquanto a execução não terminou
    if attempt >= 12: # timeout máximo de execução de 120 segundos
        raise Exception(f'Problema na requisicao a /api/v1/job/{job_id}')
        
    print(f"Aplicação em execução! Status atual: {response.json()['job_status']}")

    time.sleep(10) #aguarda 10 segundos para checar novamente
    
    response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}',
                            headers = headers)
    attempt += 1
                            
print(f"Aplicação em execução! Status atual: {response.json()['job_status']}")
```

Após a criação da **Execução** será retornado um _job\_id,_ que __será utilizado para acompanhamento da **Execução** por meio do _endpoint_ _`/job/<job_id>`_.

Diversas informações são retornadas por esse _endpoint_, sendo as principais o status da **Execução**:

* Enquanto a **Execução** estiver na fila ou em andamento, `response.status_code` retornará **202** e _job\_status_ dentro do _json_ retornará _queued_ ou _started,_ respectivamente.
* Quando a **Execução** terminar, com erro ou com sucesso,`response.status_code` retornará **200** e _job\_status_ dentro do _json_ retornará _failed_ ou _finished,_ respectivamente.

## Recuperando o Resultado

```python
response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}/result',
                      headers = headers)
                 
if response.ok: #se finalizou com sucesso, printa o resultado
    result = response.json()['output']
    print(f'A execução finalizou corretamente com resultado: {result}')
else: # se houve erro, reporta o erro
    print(f'A execução finalizou com erro.')
```

Por fim, a última etapa consiste em checar o resultado da **Execução** criada previamente. 

Caso a resposta possua código de status **200**, `response.ok`retornará verdadeiro, acessando o resultado em seguida dentro do _json_ da resposta. Caso contrário, uma mensagem de erro será exibida.

## Código Completo

{% tabs %}
{% tab title="Python" %}
```python
import requests

#declaração de variáveis do header
headers = {'organization_id':'<nome da sua organização>',
           'application_id':'Tutorial',
           'client_id':'<nome do client utilizado>',
           'username':'<seu username>',
           'x-api-key':'<apikey gerada previamente>'}
                
# primeiro passo: criando um repositório vazio
repository_id = requests.post('https://vbrain.visagio.com/api/v1/repository',
                              headers = headers).json()['repository_id']
headers['repository_id'] = repository_id
print(f'O repositório criado possui id {repository_id}')

# segundo passo: utilizando o repositório para execução da execução
parametros_execucao = {'a':10,'b':20}

job_id = requests.post('https://vbrain.visagio.com/api/v1/job/execute',
                       headers = headers,
                       json = {'params':parametros_execucao}).json()['job_id']
print(f'O job criado possui id {job_id}')

# terceiro passo: acompanhando o andamento da execução
import time

response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}',
                        headers = headers)
                        
attempt = 0
while response.status_code != 200: #enquanto a execução não terminou
    if attempt >= 12: # timeout máximo de execução de 120 segundos
        raise Exception(f'Problema na requisicao a /api/v1/job/{job_id}')
        
    print(f"Aplicação em execução! Status atual: {response.json()['job_status']}")

    time.sleep(10) #aguarda 10 segundos para checar novamente
    
    response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}',
                            headers = headers)
    attempt += 1
                            
print(f"Aplicação em execução! Status atual: {response.json()['job_status']}")
                            
# quarto passo: 
response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}/result',
                      headers = headers)
                 
if response.ok: #se finalizou com sucesso, printa o resultado
    result = response.json()['output']
    print(f'A execução finalizou corretamente com resultado: {result}')
else: # se houve erro, reporta o erro
    print(f'A execução finalizou com erro.')
```
{% endtab %}
{% endtabs %}

Mais casos de uso e outras aplicações estão disponíveis em:

## Aprofundando o Conhecimento

Agora que já possui um conhecimento inicial sobre a utilização da plataforma do VBrain, recomendamos continuar para a próxima seção:


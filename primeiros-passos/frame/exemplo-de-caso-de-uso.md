# Exemplo de Caso de Uso

## Configurações Iniciais

```python
import requests

#declaração de variáveis do header
headers = {'organization_id':'<nome da sua organização>',
           'application_id':'<nome da applicação>',
           'client_id':'<nome do client utilizado>',
           'username':'<seu username>',
           'x-api-key':'<apikey gerada previamente>'}
```

## Código Completo:

{% tabs %}
{% tab title="Python" %}
```python
import requests

#declaração de variáveis do header
headers = {'organization_id':'<nome da sua organização>',
           'application_id':'<nome da applicação>',
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

while response.status_code != 200: #enquanto a execução não terminou
    print(f"Aplicação em execução! Status atual: {response.json()['status']}")
    time.sleep(5) #aguarda 5 segundos para checar novamente
    
    response = requests.get(f'https://vbrain.visagio.com/api/v1/job/{job_id}',
                            headers = headers)
                            
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




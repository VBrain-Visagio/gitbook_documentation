# Guia Rápido

## 📚 O Mínimo Necessário

Tendo em mãos as credenciais necessárias e um ambiente de desenvolvimento corretamente configurado, alguns conceitos básicos da plataforma serão explicados para correto entendimento de como utilizar o VBrain.

O VBrain se apoia em alguns conceitos essenciais para a utilização correta da plataforma, que são:

* [Organizações, Aplicações e Clients](../../conceitos-principais/estrutura-basica/)
* [Repositórios](../../conceitos-principais/repositorios/)
* [Execuções](../../conceitos-principais/execucoes/)

### Organizações, Aplicações e Clients

O primeiro conceito essencial do VBrain é a estrutura hierárquica que existe para permitir 

Desta forma, temos que um usuário pode estar em uma ou mais **organizações**, cada uma com múltiplos **clients**.

|  | **Organization 1** | **Organization 2** | **Organization N** |
| :--- | :---: | :---: | :---: |
| **Application 1** | _Client 1, Client 2_ |  | _Client 5_ |
| **Application 2** | _Client 4_ | _Client 3_ |  |
| **Application N** | _Client N_ |  |  |

Desta forma, as informações necessárias para utilização da plataforma são compostas de 5 partes:

1. **Organization\_id:** O nome da empresa que está utilizando a plataforma
2. **Application\_id:** O nome da aplicação que está sendo utilizada
3. **Client\_id:** O nome do "projeto" 
4. **Username:** O usuário que está utilizando ****
5. **API-Key:** Uma chave que somente você possui acesso e que dá acesso à plataforma

{% hint style="warning" %}
Caso você perca a sua **API-Key** entre em contato com o time para geração de uma nova
{% endhint %}

Esse conceitos são explicados em maior detalhe na seção:

{% page-ref page="../../conceitos-principais/estrutura-basica/hierarquia.md" %}

## 💪 Mãos à Obra! 

Na próxima página iremos colocar os conhecimentos adquiridos em prática e executar nossa primeira aplicação!

{% page-ref page="exemplo-de-caso-de-uso.md" %}


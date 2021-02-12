# Guia Rápido

## 📚 O Mínimo Necessário

Tendo em mãos as credenciais necessárias e um ambiente de desenvolvimento corretamente configurado, alguns conceitos básicos da plataforma serão explicados para correto entendimento de como utilizar o VBrain.

O VBrain se apoia em alguns conceitos essenciais para a utilização correta da plataforma, que são:

* [Organizações, Aplicações e Clients](../../conceitos-principais/estrutura-basica/)
* [Repositórios](../../conceitos-principais/repositorios/)
* [Execuções](../../conceitos-principais/execucoes/)

### Organizações, Aplicações e Clients

O primeiro conceito para entender a utilização do VBrain é a sua estrutura básica de acessos, que se divide em:

1. **Organization\_id:** O nome da empresa que está utilizando a plataforma
2. **Application\_id:** O nome da aplicação que está sendo utilizada
3. **Client\_id:** O nome do "projeto" 

Tal divisão existe para garantir que em uma mesma **Organização** diversas áreas possam utilizar uma mesma **Aplicação** de forma independente, como pode ser visto a seguir:

|  | **Organization 1** | **Organization 2** | **Organization N** |
| :--- | :---: | :---: | :---: |
| **Application 1** | _Client 1, Client 2_ |  | _Client 5_ |
| **Application 2** | _Client 4_ | _Client 3_ |  |
| **Application N** | _Client N_ |  |  |

No caso acima, _Organization 1_ tem dois clients para a _Application 1_, o _Client 1_ e o _Client 2_. Uma forma de entender melhor a situação é imaginar o exemplo de uma empresa de telefonia:

* A área de vendas deseja fazer um projeto utilizando a aplicação de previsão de demanda
* A área de marketing também quer utilizar a mesma aplicação, porém sem permitir acesso dos seus dados ou resultados à área de vendas

{% hint style="info" %}
A existência de **clients** permite que múltiplas áreas ou times de uma mesma **organização** utilizem uma mesma **aplicação** de forma independente e segura.
{% endhint %}

Esse conceitos são explicados em maior detalhe na seção:

{% page-ref page="../../conceitos-principais/estrutura-basica/" %}

### Repositórios

O **Repositório** é essencialmente uma pasta onde são salvos os arquivos de _Input_, parâmetros da execução e _Output_ das **Execuções**, sendo ponto central do fluxo de utilização da plataforma.

Esse conceitos são explicados em maior detalhe na seção:

{% page-ref page="../../conceitos-principais/repositorios/" %}

### Execuções

Uma **Execução** é basicamente a utilização da aplicação. Os arquivos passados no **Repositório** juntamente com os parâmetros enviados serão utilizados pela aplicação para gerar o resultado esperado.

Um **Repositório** pode ser utilizado por múltiplas **Execuções**, reutilizando os arquivos de _Input_ com a possibilidade de alterar parâmetros. Isso possibilita a realização de estratégias de _Otimização de Hiperparâmetros_ ou de testes para _fine tuning_ de modelos.

Esse conceitos são explicados em maior detalhe na seção:

{% page-ref page="../../conceitos-principais/execucoes/" %}

## 💪 Mãos à Obra! 

Na próxima página iremos colocar os conhecimentos adquiridos em prática e executar nossa primeira aplicação!

As informações necessárias para utilização da plataforma são as seguintes:

1. **Organization\_id:** O nome da empresa que está utilizando a plataforma
2. **Application\_id:** O nome da aplicação que está sendo utilizada
3. **Client\_id:** O nome do "projeto" 
4. **Username:** O usuário que está utilizando ****
5. **API-Key:** Uma chave que somente você possui acesso e que dá acesso à plataforma

{% hint style="warning" %}
Caso você perca a sua **API-Key** entre em contato conosco para geração de uma nova
{% endhint %}

Tendo em mãos tais informações, podemos partir para a próxima página:

{% page-ref page="exemplo-de-caso-de-uso.md" %}


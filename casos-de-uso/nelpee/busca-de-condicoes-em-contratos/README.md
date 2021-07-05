# Busca de Condições em Contratos
Esta solução tem como objetivo realizar a busca de condições diversas em contratos. Esta solução faz uma busca inteligente a partir de termos inseridos pelo usuário e traz os trechos do contrato relacionados à busca feita. A busca leva em consideração o contexto das condições do contrato e é capaz de fazer buscas robustas, mesmo que os termos inseridos não estejam exatamente no texto do contrato. A solução irá interpretar o que é para ser buscado e trazer os trechos de interesse encontrado nos documentos.

## Objetivos
Buscar condições em contratos de forma robusta, trazendo trechos de interesse como resultados.

## Restrições
As restrições desta solução são as seguintes:
- Os contratos a serem processados devem estar dentro de uma pasta chamada CONTRATOS
- Dentro da pasta CONTRATO, cada contrato deve ter sua pasta com seus documentos (mais detalhes na seção Dados de Entrada). As pastas de cada contrato podem ser em formato zip, se preferível.
- São aceitas as seguintes extensões de documentos: PDF, DOCX, JPEG, JPG e PNG
- O modelo aceita documentos escaneados e não escaneados
- O modelo aceita contratos nos idiomas Português, Inglês e Espanhol
- A planilha Query (mais detalhes na seção Dados de Entrada) aceita termos em Português, Inglês ou Espanhol.
- O modelo não faz a tradução das buscas em Query de um idioma para o outro. Caso seja necessário o cadastro de uma busca para que o modelo a avalie considerando mais de um idioma, a busca deve ser cadastrada em cada um dos idiomas desejados.
- Não há limitação para a quantidade de documentos ou páginas dos contratos. Isso apenas terá influência no custo da execução e no tempo de processamento.
- O modelo não distingue qual documento deve ser processado ou não. Ele irá processar todos os documentos de todos os contratos. Caso algum documento não tenha que ser processado, deve-se desconsiderar este documento na interpretação dos resultados ou não incluí-lo nos Dados de Entrada.

## Dados de Entrada
Para o funcionamento do modelo, devem ser inseridos como Dados de Entrada os contratos a serem processados. Os contratos devem estar dentro de uma pasta chamada CONTRATOS. Dentro desta pasta, deve haver uma pasta por contrato, com os documentos dos respectivos contratos.

Também deve ser inserido um arquivo Excel com o nome Query.xlsx, com termos que descrevem as condições a serem buscadas.

O link a seguir possui um exemplo de input para esta solução:

(<a href="doc/input_example.zip" download="input_example.zip">Baixe o template de dados aqui</a>)

### Query
Arquivo Excel chamado Query.xlsx. Este documento deve possuir termos que irão ser usados para encontrar as condições desejadas nos contratos. As termos devem pertencer ao assunto da condição a ser buscada. 

Esta planilha deve possuir os seguintes campos.
-	**Search *(texto)*:** Termo que descreve a condição a ser buscada. Vários termos podem ser utilizados para a mesma condição. Caso sejam inseridas diversos termos para a mesma condição, o modelo irá considerar as diversas opções durante a busca, podendo ter um resultado mais acurado.
-	**Label *(texto)*:** Nome da classe à qual o respectivo termo na coluna Search pertence. Label será o nome dado à classe dos textos encontrados com os respectivos termos.

Como exemplo, pode-se ter os seguintes termos em Search: Lei Geral de Proteção de Dados, Confidencialidade, Segurança da Informação. Estes termos podem pertencer à Label LGDP e Confidencialidade. Os textos encontrados na busca que pertencerem a este assunto serão rotulados como LGPD e Confidencialidade.

### Contratos 
Pasta chamada CONTRATOS. Dentro desta pasta, deve haver uma pasta por contrato. Cada pasta de contrato deve ter seus respectivos documentos dentro. As pastas de contratos podem estar no formato .zip. Todos os arquivos dentro da pasta CONTRATOS serão processados. Apenas não serão processados arquivos com extensões não suportadas pelo modelo. As extensões suportadas são PDF, DOCX, JPG, JPEG e PNG.

## Parâmetros

#### Opcionais
-	**contract_name *(texto)*:** Este parâmetro é o nome da pasta do contrato a ser processado. Caso não seja inserido este parâmetro, serão processados todos os contratos da pasta CONTRATOS.  
-	**device *(inteiro)*:** Este parâmetro indica se o modelo será executado em CPU ou em GPU. Para a execução em CPU (modo padrão), deve possuir o valor -1. Para execução em GPU, deve possuir um inteiro correspondente à GPU utilizada (geralmente 0).

## Outputs
Como output, este modelo retorna uma arquivo CSV chamado SearchResult.csv. Este arquivo possui as condições encontradas no contrato a partir dos parâmetros de busca feitos com a planilha Query. O caractere separador deste arquivo CSV é ';'.

O link a seguir possui um exemplo de output para esta solução:

(<a href="doc/SearchResult.xlsx" download="SearchResult.xlsx">Baixe o exemplo de output aqui</a>)

### Search Result
Arquivo no formato CSV chamado SearchResult.csv com os seguintes campos.

-	**CodContrato *(texto)*:** Código do contrato mapeado. Este código é o nome da pasta do contrato.
-	**Documento *(texto)*:** Documento do contrato ao qual este resultado se refere. 
-	**Pagina *(inteiro)*:** Página do documento onde o texto foi encontrado.
-	**Texto *(texto)*:** Texto encontrado no contrato, de acordo com a busca feita.
-	**Classificacao *(texto)*:** Rótulo do texto encontrado. Os rótulos são correspondentes às opções dadas na coluna Labels de Query.
-	**Score *(inteiro)*:** Grau de confiança do modelo de que o texto encontrado pertence à respectiva classe. Quanto mais próximo de 1 o score, maior o grau de confiança neste resultado.

## Preço
Esta solução tem seu preço atrelado ao número de páginas processadas. A utilização da GPU para a execução do modelo também tem impacto no aumento preço.
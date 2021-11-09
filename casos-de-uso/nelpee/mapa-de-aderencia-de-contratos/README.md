# Mapa de Aderência de Contratos

Esta solução tem como objetivo gerar um mapa de indicadores avaliando uma massa de contratos em relação a um contrato exemplo. Como exemplo de uso, se você possuir um contrato modelo, pode utilizar esta solução para avaliar quanto outros contratos são parecidos com o seu contrato modelo. Com isso, é possível gerar indicadores de aderência contratual.

## Objetivos

Avaliar a aderência de um ou mais contratos, comparando-os a contratos modelos.

## Restrições

As restrições desta solução são as seguintes:

* Os contratos a serem mapeados devem estar dentro de uma pasta chamada CONTRATOS
* Dentro da pasta CONTRATO, cada contrato deve ter sua pasta com seus documentos (mais detalhes na seção Dados de Entrada). As pastas de cada contrato podem ser em formato zip, se preferível.
* São aceitas as seguintes extensões de documentos: PDF, DOCX, JPEG, JPG e PNG
* O modelo aceita documentos escaneados e não escaneados
* O modelo aceita contratos nos idiomas Português, Inglês e Espanhol
* O Banco de Cláusulas (mais detalhes na seção Dados de Entrada) aceita condições em Português, Inglês ou Espanhol.
* O modelo não faz a tradução das condições do Banco de Cláusulas de um idioma para o outro. Caso seja necessário o cadastro de uma condição para que o modelo a avalie considerando mais de um idioma, a condição deve ser cadastrada em cada um dos idiomas desejados.
* Não há limitação para a quantidade de documentos ou páginas dos contratos. Isso apenas terá influência no custo da execução e no tempo de processamento.
* O modelo não distingue qual documento deve ser mapeado ou não. Ele irá mapear todos os documentos de todos os contratos. Caso algum documento não tenha que ser mapeado, deve-se desconsiderar este documento na interpretação dos resultados ou não incluí-lo nos Dados de Entrada.

## Dados de Entrada

Para o funcionamento do modelo, devem ser inseridos como Dados de Entrada os contratos a serem processados. Os contratos devem estar dentro de uma pasta chamada CONTRATOS. Dentro desta pasta, deve haver uma pasta por contrato, com os documentos dos respectivos contratos.

Também deve ser inserido um arquivo Excel com o nome BancoDeClausulas.xlsx, com as condições do modelo de contrato com o qual os demais contratos serão comparados.

O link a seguir possui um exemplo de input para esta solução:

([Baixe o template de dados aqui](doc/input\_example.zip))

### Banco de Cláusulas

Arquivo Excel chamado BancoDeClausulas.xlsx. Este documento deve possuir as condições template, com as condições dos demais contratos serão comparadas. Deve possuir os seguintes campos.

* **Título **_**(texto)**_**:** Título da cláusula cadastrada
* **Texto **_**(texto)**_**:** Texto da cláusula cadastrada
* **Grupo **_**(texto)**_**:** Grupo de cláusulas ao qual esta cláusula pertence. Por exemplo, Condições Gerais, se for uma cláusula de seu documento de Condições Gerais, ou LGPD, se for uma cláusula de seu documento de LGPD. Este campo pode ser preenchido livremente. Caso não deseje utilizar este campo, ele deve ser preenchido com o Título.
* **Idioma **_**(texto)**_**:** Idioma da cláusula cadastrada. Por exemplo, Inglês, Português ou Espanhol.
* **Monitorar **_**(texto)**_**:** Deve ser preenchido com "Sim" ou "Não". Serão consideradas no processamento apenas as cláusulas marcadas com "Sim".

### Contratos

Pasta chamada CONTRATOS. Dentre desta pasta, deve haver uma pasta por contrato. Cada pasta de contrato deve ter seus respectivos documentos dentro. As pastas de contratos podem estar no formato .zip. Todos os arquivos dentro da pasta CONTRATOS serão processados. Apenas não serão processados arquivos com extensões não suportadas pelo modelo. As extensões suportadas são PDF, DOCX, JPG, JPEG e PNG.

## Parâmetros

#### Opcionais

* **contract\_name **_**(text)**_**:** Este parâmetro é o nome da pasta do contrato a ser processado. Caso não seja inserido este parâmetro, serão processados todos os contratos da pasta CONTRATOS.

## Outputs

Como output, este modelo retorna uma arquivo Excel chamado ScoreContratos.xlsx. Este arquivo possui o mapeamento de aderência dos contratos, comparando-os com as condições do contrato modelo cadastrado no Banco De Cláusulas.

O link a seguir possui um exemplo de output para esta solução:

([Baixe o exemplo de output aqui](doc/ScoreContratos.xlsx))

### Score dos Contratos

Arquivo no formato Excel chamado ScoreContratos.xlsx com os seguintes campos.

* **CodContrato **_**(texto)**_**:** Código do contrato mapeado. Este código é o nome da pasta do contrato.
* **Documento **_**(texto)**_**:** Documento do contrato ao qual este resultado se refere
* **Clausula **_**(texto)**_**:** Título da cláusula à qual este resultado se refere
* **Grupo **_**(texto)**_**:** Grupo da cláusula à qual este resultado se refere
* **Idioma **_**(texto)**_**:** Idioma da cláusula à qual este resultado se refere
* **Score **_**(inteiro)**_**:** Score de 0 a 100 indicando o quão próximo o texto encontrado neste contrato é da respectiva cláusula do modelo. O score 100 indica que foi encontrado exatamente a cláusula do template no documento.
* **Pagina **_**(inteiro)**_**:** Página do documento onde maior parte da cláusula foi encontrada.

## Preço

Esta solução tem seu preço atrelado ao número de páginas processadas.

# Speech to Text
Esta solução tem como objetivo transcrever o conteúdo de arquivos de áudio em texto.

## Objetivos
Transcrever o conteúdo de áudios em texto.

## Restrições
A solução possui as seguintes restrições:
- São aceitos até o momento apenas arquivos nos formatos mp3, mp4, wav, flac, ogg, amr e webm.
- O modelo aceita áudios nos idiomas Português, Inglês e Espanhol.

## Dados de Entrada
A entrada do modelo são os arquivos de áudio a serem transcritos.

O link a seguir possui exemplos das bases de input.
(<a href="doc/INPUT.zip" download="INPUT.zip">baixe exemplos de input aqui</a>)

## Parâmetros

#### Opcionais
-	**language *(texto)*:** Código correspondente ao idioma do áudio. Deve estar entre as seguintes opções: Português ('pt-BR'), Inglês ('en-US') e Espanhol ('es-ES'). O parâmetro padrão é Português.

## Outputs
Como saída, a solução retorna a base Transcriptions com as transcrições dos áudios. 

Um exemplo da base retornada pode ser encontrada no link a seguir.
(<a href="doc/OUTPUT.zip" download="OUTPUT.zip">baixe um exemplo de output aqui</a>)

### Transcriptions *(Transcrições)*
Arquivo no formado json chamado transcriptions.json, contendo as informações dos áudios transcritos.

-	**FilePath *(texto)*:** Nome do arquivo de áudio transcrito
-	**Transcription *(texto)*:** Transcrição do conteúdo do áudio

## Preço
O preço desta solução é relacionado à duração dos áudios transcritos.




# Speech to Text

Esta solução tem como objetivo transcrever o conteúdo de arquivos de áudio em texto.

## Objetivos

Transcrever o conteúdo de áudios em texto.

## Restrições

A solução possui as seguintes restrições:

* São aceitos até o momento apenas arquivos nos formatos mp3, mp4, wav, flac, ogg, amr e webm.
* O modelo aceita áudios nos idiomas Português, Inglês e Espanhol.

## Dados de Entrada

A entrada do modelo são os arquivos de áudio a serem transcritos.

O link a seguir possui exemplos das bases de input. ([baixe exemplos de input aqui](doc/INPUT.zip))

## Parâmetros

#### Opcionais

* **language **_**(texto)**_**:** Código correspondente ao idioma do áudio. Deve estar entre as seguintes opções: Português ('pt-BR'), Inglês ('en-US') e Espanhol ('es-ES'). O parâmetro padrão é Português.

## Outputs

Como saída, a solução retorna a base Transcriptions com as transcrições dos áudios.

Um exemplo da base retornada pode ser encontrada no link a seguir. ([baixe um exemplo de output aqui](doc/OUTPUT.zip))

### Transcriptions _(Transcrições)_

Arquivo no formado json chamado transcriptions.json, contendo as informações dos áudios transcritos.

* **FilePath **_**(texto)**_**:** Nome do arquivo de áudio transcrito
* **Transcription **_**(texto)**_**:** Transcrição do conteúdo do áudio

## Preço

O preço desta solução é relacionado à duração dos áudios transcritos.

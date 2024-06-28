# Concat - PDF Catalogs
<br><br><br>
<div align="center">

  ![](public/img/Logo.png)

</div>

<div align="center">

  ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=plastic&logo=nestjs&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white)
  ![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=plastic&logo=node.js&logoColor=white)
  ![OpenAI](https://img.shields.io/badge/openai-%23000000.svg?style=plastic&logo=openai&logoColor=white)
  ![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=plastic&logo=jest&logoColor=white)

</div>

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

- `app.module.ts`: Módulo principal do projeto, responsável por configurar as dependências e módulos do NestJS.
- `main.ts`: Arquivo de entrada do projeto, onde a aplicação é inicializada.
- `app.e2e-spec.ts`: Arquivo de teste de integração, que executa testes de API.
- `pdf-formater`: Diretório responsável pela formatação dos PDFs, contendo os seguintes arquivos:
- `pdf-formater.service.ts`: Serviço responsável pela lógica de formatação dos PDFs.
- `pdf-formater.controller.ts`: Controlador responsável pela rota de formatação dos PDFs.
- `pdf-formater.module.ts`: Módulo do NestJS responsável pela configuração do controlador e serviço de formatação.
- `ocr-azure`: Diretório responsável pela integração com o serviço de OCR Azure, contendo os seguintes arquivos:
- `ocr-azure.service.ts`: Serviço responsável pela leitura de imagens e extração de texto.
- `ocr-azure.controller.ts`: Controlador responsável pela rota de leitura de imagens.
- `ocr-azure.module.ts`: Módulo do NestJS responsável pela configuração do controlador e serviço de OCR Azure.
- `openai-gpt`: Diretório responsável pela integração com o serviço OpenAI GPT, contendo os seguintes arquivos:
- `openai-gpt.service.ts`: Serviço responsável pela integração com o serviço OpenAI GPT.
- `openai-gpt.controller.ts`: Controlador responsável pela rota de processamento do GPT.
- `openai-gpt.module.ts`: Módulo do NestJS responsável pela configuração do controlador e serviço de OpenAI GPT.


## Configuração de Variáveis de Ambiente
Para configurar corretamente as variáveis de ambiente do projeto, você precisará criar um arquivo `.env` na raiz do projeto e definir as seguintes variáveis:

- `PORT`: Define a porta em que a aplicação será executada.
- `OPENAI_KEY`: Chave de API necessária para acessar os serviços da OpenAI.
- `OPENAI_CHAT_ENDPOINT`: Endpoint para comunicação com a API de chat da OpenAI.
- `OPENAI_GPT_MODEL`: Modelo utilizado para as operações de Generative Pre-trained Transformer (GPT) da OpenAI.
- `AZURE_DI_ENDPOINT`: Endpoint para acesso aos serviços de Document Intelligence da Azure.
- `AZURE_DI_KEY`: Chave de acesso para os serviços de Document Intelligence da Azure.
- `PROMPT`: Prompt usado para definir o comportamento do GPT.
- `PROMPT_ACTION`: Ação associada ao prompt para interações com o GPT.

<small>* Você pode criar um `.env.development` e um `.env.production` para diferenciar ambientes de homologação e produção</small>
<br>
<small>* Certifique-se de não compartilhar essas informações sensíveis com outras pessoas ou publicá-las em um repositório público.</small>

## Como Executar
Para executar o projeto, siga os passos abaixo:

- Instale as dependências do projeto executando `yarn install`.
- Inicie a aplicação com o comando `yarn start` para produção ou `yarn start:dev` para homologação.


## Endpoints
A aplicação possui o seguinte endpoint:

| Endpoint | Método HTTP | Tipo de Dados | Request | Response |
| --- | --- | --- | --- | --- |
| /process-pdf | POST | application/json | Envio do PDF em base64 | JSON baseado no PDF |

#### Exemplo de request `/process-pdf`
```JSON
{
    "archiveName": "teste",
    "base64": "JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL01lZGlhQm94IFswIDAgNTk1LjI4MCA4NDEuODkwXQovVHJpbUJveCBbMC4wMDAgMC4wMDAgNTk1LjI4MCA4NDEuODkwXQovUmVzb3VyY2VzIDIgMCBSCi9Hcm91cCA8PCAvVHlwZSAvR3JvdXAgL1MgL1RyYW5zcGFyZW5jeSAvQ1MgL0RldmljZVJHQiA+PiAKL0NvbnRlbnRzID..."
}
```
#### Exemplo de response `/process-pdf`
```JSON
{
    "content": [
        {
            "code": [
                "7908345017581"
            ],
            "dimension": [
                "1.8 Liters"
            ],
            "value": "R$ 15,50",
            "quantity": "BX 12/1",
            "taxes": [
                "IPI"
            ],
            "supplier": [
                "Supplier A"
            ],
            "product": "Product A"
        },
        ...
    ]
}
```

**A resposta depende inteiramente do que você definir no prompt.<br> A resposta exemplificada é baseado no prompt que uso comercialmente, não disponibilizado no código Open Source.<br> A ideia é que o CONCAT se adapte ao seu tipo de necessidade, logo você precisa definir seu prompt para sua regra de negócio, ou entre em contato comigo pelo email `danielbarros.dev.contato@gmail.com`<br>**

## Em Desenvolvimento
Este projeto ainda está em desenvolvimento. Novas funcionalidades e melhorias estão sendo implementadas regularmente.

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato comigo ou abrir uma Issue.

Obrigado por utilizar o Projeto Concat - Catálogos em PDF!

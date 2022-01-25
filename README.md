# API Notas Escolares

Esta API usa [Node.js](https://nodejs.org/en/), certifique-se que possui instalado em sua máquina.

Criação do banco de dados está no arquivo create-db.sql

NOTA: Infelizmente não consegui terminar o planejado em tempo hábil. Apenas a parte do docker não está completa.

## Instalação

Para baixar a API deverá seguir as instruções abaixo:

```bash
  git clone https://github.com/gomeshud/mini-api-notas-escolares.git
  cd mini-api-notas-escolares
```

## Referências da API

URL Aluno:
```
 http://localhost:8081
```

URL Professor:
```
 http://localhost:8082
```

## Rotas do Professor
#### Buscar notas de todos alunos

```http
  GET /v1/notas-aluno
```

#### Buscar de notas por ID

```http
  GET /v1/notas-aluno/${id}
```
| Parâmetro    | Tipo     | Descrição                           |
| :----------- | :------- | :---------------------------------- |
|     `ID`     | `int` | **Requirido** ID do aluno           |

#### Inserir novo aluno

```http
  POST /v1/aluno
```
| Parâmetro    | Tipo     | Descrição                           |
| :----------- | :------- | :---------------------------------- |
|     `NOME`     | `string` | **Requirido** Nome do aluno       |


```
{
    name: "Nome do aluno",
}
```

#### Inserir notas de aluno

```http
  POST /v1/notas
```
| Parâmetro | Tipo     | Descrição                        |
| :-------- | :------- | :------------------------------- |
| `ID`      | `string` | **Requirido** ID do aluno        |
| `n1`      | `int` | **Requirido** Nota 1   |
| `n2`      | `int` | **Requirido** Nota 2   |
| `n3`      | `int` | **Requirido** Nota 3   |
| `n4`      | `int` | **Requirido** Nota 4   |

O corpo da requisição deverá conter:
```
{
    aluno_id: "ID do aluno",
    n1: "Nota 1",
    n2: "Nota 2",
    n3: "Nota 3",
    n4: "Nota 4",
}
```



## Rota do Aluno

#### Buscar de notas por ID

```http
  GET /v1/aluno/${id}
```
| Parâmetro    | Tipo     | Descrição                           |
| :----------- | :------- | :---------------------------------- |
|     `ID`     | `int` | **Requirido** ID do aluno           |

## Variáveis de ambiente

Para executar este projeto, você precisará adicionar as variáveis de ambiente seguindo o arquivo .env.example

Será necessário alterar o nome para .env e preencher seguindo as instruções abaixo

`DB_URL`: URI do Banco de dados. Foi utilizado um banco de dados criado no [elephantsql](https://www.elephantsql.com/).

## Como executar
Infelizmente não tive tempo hábil para finalizar todos os requisitos, as APIs estão completas.

MAS o docker ainda não está funcionando.

Para executar as APIs, deve-se entrar em cada diretório (aconselho utilizar 2 terminais) e usar os comandos a seguir:

```bash
  cd api-aluno
```
e em outro terminal

```bash
  cd api-professor
```

#### Para instalar as bibliotecas:

```bash
  npm install
```

#### Para iniciar o servidor Node.js:

```bash
  npm start
```


## DOCKER

Em testes, consegui subir os containers de cada API, mas ao utilizar o Insomnia e Postman, obtive algum erro de conexão entre o host e o container.

Executei os comandos abaixo para criar uma network e iniciar as APIs.

```bash
    docker network create app-network
```

```bash
    docker-compose up -d
```

Lembrando que em cada diretório (api-aluno e api-professor) deve conter o .env com a URL do banco de dados e a porta.

Em breve espero conseguir desvendar este contratempo.

Caso queira ajudar, toda ajuda/conselho será bem-vinda!


## Especificações técnicas

**Servidor:** Node.js, Express.js

**Banco de dados:** PostgreSQL

## Autor

- [@gomesHud](https://www.github.com/gomeshud)

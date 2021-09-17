
## Disclaimer 


O Github bloqueia os arquivos .env -> sendo assim, antes de rodar criem um arquivo .env na raiz e colem as seguinte variáveis 

~~~javascript
DATABASE_USER=postgres
DATABASE_PASSWORD=senha
DATABASE_NAME=backend
~~~

### Também escrevam os seguintes comandos no prompt

- npm install yarn -g  _Instala o gerenciador de pacotes yarn de modo global (-g)_

- yarn install _instala as dependências presentes no package.json_

***

- yarn add express   _Framework para desenvolvimento de rotas e apis de backend_

- yarn add pg  _Postgres (banco de dados)_

- yarn add knex _QueryBuilder_

- yarn add nodemon -D   _Restart automatico ao mudar algo no codigo_

- yarn add uuid  _Gerador de id gigante (pegar o objeto v4)_

- Criar script no package.json para te facilitar o seu desenvolvimento

  "scripts": {
    "dev": "nodemon src/server.js", 
    "start": "node src/server.js"
  }

- Criar o knexfile do knex 
    yarn knex init

- yarn add dotenv _Para variaveis de ambiente_
    - Definir as variaveis no arquivo .env
    - Importar no arquivo que uso essas variaveis
    - require("dotenv").config()

- yarn knex migrate:make create_crew _Cria uma migrate vazia_

- yarn knex migrate:latest _Executa ultima migrate, cada migrate é uma alteração no schema das tabelas de um banco de dados_

- yarn knex seed:make crews  _Serve pra ter dados padrao ao criar uma tabela_

- yarn knex seed:run  _Executa as seeds_

- docker-compose up -d _Executa tudo que esta no docker compose_ 

- docket  exec -it backend_db_1 bash _Acessa o container do docker que esta em execução_

- psql -U postgres _maneira de acessar o postgres atraves da cmd_

- \dt  _mostra todas as tabelas em um bd_
CREATE DATABASE backend; _Cria um novo banco de dados com o nome backend_

## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**
    
### Instalar o Modulos do Node

    npm install 
### Instalar as dependência 

    npm install dotenv
    npm install mysql2
### Adicionar configurações do Banco de dados no arquivo .env 
    MYSQLDB_HOST=
    MYSQLDB_USER=
    MYSQLDB_PASSWORD=
    MYSQLDB_PORT=
    MYSQLDB_DATABASE=


### Entrar no banco de dados 

     docker exec -it teste-backend-mysqldb-1 mysql -u root -p 

### No banco de dados, devera ser criada as tabelas 

         
    CREATE TABLE pessoa (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tipo_pessoa ENUM('fisica', 'juridica') NOT NULL,       
        nome VARCHAR(40),
        cpfResponsavel VARCHAR(11) NULL,                        
        cnpj VARCHAR(14) NULL,                                 
        celular VARCHAR(9),
        telefone VARCHAR(8),
        email VARCHAR(100),
        emailConfirmacao VARCHAR(100),
        situacao ENUM('ativa', 'inativa') DEFAULT 'ativa' 
    );


        CREATE TABLE endereco (
            id INT AUTO_INCREMENT PRIMARY KEY,
            cep VARCHAR(8),
            logradouro VARCHAR(255),
            numero VARCHAR(10),
            complemento VARCHAR(255),
            cidade VARCHAR(255),
            bairro VARCHAR(255),
            estado VARCHAR(2),
            pessoa_id INT,                                         
            FOREIGN KEY (pessoa_id) REFERENCES pessoa(id) ON DELETE CASCADE
        );
     
### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
### Para testar o endpoint utilizar a rota:

      http://localhost:{numerodaSuaPora}/pessoa/cadastrar

### Exemplo de JSON para testar a rota: 

          {
      "pessoa": {
        "tipo_pessoa": "fisica",
        "nome": "João da Silva",
        "cpfResponsavel": "12345678900",
        "cnpj": null,
        "celular": "999999999",
        "telefone": "333333333",
        "email": "joao@email.com",
        "emailConfirmacao": "joao@email.com",
        "situacao": "ativa"
      },
      "endereco": {
        "cep": "12345678",
        "logradouro": "Rua Exemplo",
        "numero": "123",
        "complemento": "Apto 101",
        "cidade": "Cidade Exemplo",
        "bairro": "Bairro Exemplo",
        "estado": "EX"
      }
    }
    {
      "pessoa": {
        "tipo_pessoa": "juridica",
        "nome": "Empresa Exemplo LTDA",
        "cpfResponsavel": null,
        "cnpj": "12345678000195",
        "celular": "999999999",
        "telefone": "333333333",
        "email": "empresa@email.com",
        "emailConfirmacao": "empresa@email.com",
        "situacao": "ativa"
      },
      "endereco": {
        "cep": "87654321",
        "logradouro": "Avenida Exemplo",
        "numero": "456",
        "complemento": "Sala 202",
        "cidade": "Cidade Empresarial",
        "bairro": "Bairro Corporativo",
        "estado": "XP"
      }
    }
    
    

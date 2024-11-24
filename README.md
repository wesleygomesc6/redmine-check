# RedmineCheck

Este aplicativo auxilia na fiscalização do contrato da através da interação com a api do redmine, facilitando a checagem dos serviços executados pelos profissionais da empresa terceirizada.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

## Alterações no valor da UST

```
environments.ts && environment.prod.ts
```

## Deploy no servidor

- Após o build, compacte a pasta gerada dentro do diretório 'dist' no formato zip.
- Acesse o servidor da aplicação.
  - Host: host
  - Senha: password
- Apague o arquivo 'redmine-check.zip' na pasta 'home/admin' e faça o upload do arquivo gerado no passo anterior.
- Logue como root:
  - su -
  - senha: password
- Execute o comando:
  `unzip /home/admin/redmine-check.zip -d /opt/tomcat/webapps/`

Vai perguntar se deseja substituir os arquivos existentes na pasta. Digite 'A' (maiúscula) e pressione 'Enter'.

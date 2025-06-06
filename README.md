# Sistema de Achados e Perdidos Comunitário

## 📝Descrição do Projeto
 
Objetos pessoais são frequentemente esquecidos ou perdidos em locais públicos como escolas, parques, bibliotecas e centros comunitários. A falta de um sistema eficiente para gerenciar esses itens dificulta sua devolução aos respectivos donos.

Este projeto tem como objetivo desenvolver uma aplicação web simples e funcional que permita o registro e a consulta de itens perdidos e encontrados. A plataforma visa facilitar a comunicação entre quem perdeu e quem encontrou objetos, promovendo uma solução acessível e colaborativa para situações do cotidiano.

Por meio de uma interface intuitiva, os usuários poderão cadastrar descrições de objetos encontrados ou realizar buscas por itens perdidos, contribuindo para uma maior taxa de recuperação e devolução desses pertences.

## ✨ Funcionalidades
     
* **Cadastro de itens**:
   * Descrição, categoria, data, localização e contato
   * Upload de foto (opcional)
   * Definição do status: Perdido ou Encontrado

* **Busca avançada**:
   * Listagem completa de todos os itens registrados
   * Filtros por categoria, localização e status (perdido/encontrado)
   * Barra de pesquisa por palavras-chave

* **Gerenciamento de itens**:
   * Edição/remoção de itens via código único gerado no cadastro

## 🛠️ Tecnologias Utilizadas

### Backend
 * **Node.js** com **Express.js**: Gerenciamento de rotas e estrutura da API REST
 * **Prisma ORM**: Manipulação e modelagem do banco de dados
 * **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional

🔹 O backend fornece uma API REST com suporte completo a operações **CRUD**.

### Frontend
 * **React.js** com **Vite**: Interface leve e responsiva
 * **Tailwind CSS**: Estilização moderna e utilitária
 * **Axios**: Comunicação com a API backend

## 🚀 Como Executar o Projeto

### Pré-requisitos
 * [Node.js](https://nodejs.org/)
 * [PostgreSQL](https://www.postgresql.org/)
 * [Git](https://git-scm.com/)

### Clone o repositório
```bash
git clone https://github.com/ShaylaKumari/Sistema-de-Achados-e-Perdidos-Comunitario.git
cd Sistema-de-Achados-e-Perdidos-Comunitario
```

### Acesse a pasta do backend
```bash
cd backend
```

### Configure o ambiente
Copie o arquivo de exemplo `.env.example` para `.env` e ajuste com os dados do seu ambiente:
```bash
cp .env.example .env
```

### Instale as dependências
```bash
npm install
```

### Gere os arquivos Prisma e aplique as migrações
```bash
npx prisma migrate dev
```

### Inicie o servidor
```bash
npm run dev
```

### Acesse a pasta do frontend
```bash
cd ../frontend
```

### Instale as dependências
```bash
npm install
```

### Inicie a aplicação
```bash
npm run dev
```

## 📌 Fluxo de Trabalho com Branches

Este projeto adota um fluxo de trabalho baseado em branches específicas por função. A branch `main` está protegida e não aceita push direto, garantindo que todo o código passe por revisão antes de ser integrado.

### 👨‍💻 Processo de Contribuição

Siga os passos abaixo para garantir uma colaboração organizada e sem conflitos:

1. **Atualize a branch principal localmente**
   
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Acesse sua branch de desenvolvimento**

   ```bash
   git checkout nome-da-sua-branch
   ```

 3. **Realize as alterações necessárias no código**

 4. **Adicione, faça commit das mudanças e envie suas alterações**

    ```bash
    git add .
    git commit -m "breve descrição da funcionalidade"
    git push origin nome-da-sua-branch
    ```

 5. **Crie um Pull Request no GitHub para branch `main`**

 6. **Após aprovação, o merge será feito na main**

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## ✉️ Contato
Equipe de desenvolvimento:

* Ananda Shayla - [GitHub](https://github.com/ShaylaKumari)
* Carlos Eduardo - [GitHub](https://github.com/CarlosEduardoVdeOliveira)
* Emily Rizo - [GitHub](https://github.com/emilyrizo)
* Helen Santos - [GitHub](https://github.com/sunHelen12)
* Juliana Andrade - [GitHub](https://github.com/andradeju)
* Murilo Gomes - [GitHub](https://github.com/murilogomesl)

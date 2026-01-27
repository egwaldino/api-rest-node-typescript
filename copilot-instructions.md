# Instruções do Projeto: API REST Node.js com TypeScript

## Visão Geral

Este documento descreve os padrões e conceitos gerais para o desenvolvimento de uma API REST utilizando Node.js e TypeScript. O projeto segue boas práticas de arquitetura backend, focando em escalabilidade, manutenibilidade e segurança.

## Tecnologias e Ferramentas

- **Node.js**: Ambiente de execução JavaScript no servidor
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Express.js**: Framework web para Node.js
- **Banco de Dados**: PostgreSQL/MySQL com ORM (Prisma/TypeORM)
- **Autenticação**: JWT (JSON Web Tokens)
- **Validação**: Joi ou express-validator
- **Testes**: Jest e Supertest
- **Documentação**: Swagger/OpenAPI
- **Versionamento**: Git
- **Containerização**: Docker (opcional)

## Estrutura do Projeto

```
api-node-typescript/
├── src/
│   ├── controllers/     # Controladores da API
│   ├── models/         # Modelos de dados
│   ├── routes/         # Definição das rotas
│   ├── services/       # Lógica de negócio
│   ├── middlewares/    # Middlewares personalizados
│   ├── utils/          # Utilitários
│   ├── config/         # Configurações
│   └── types/          # Tipos TypeScript
├── tests/              # Testes
├── docs/               # Documentação
├── package.json
├── tsconfig.json
├── .env.example
├── Dockerfile
└── README.md
```

## Conceitos Gerais

### 1. Arquitetura REST

- **Recursos**: Cada entidade é um recurso com URI única
- **Verbos HTTP**: GET, POST, PUT, DELETE
- **Códigos de Status**: Uso adequado (200, 201, 400, 401, 404, 500)
- **Stateless**: Cada requisição é independente

### 2. Princípios SOLID

- **S**: Single Responsibility Principle
- **O**: Open/Closed Principle
- **L**: Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Inversion Principle

### 3. Padrões de Design

- **MVC**: Model-View-Controller (adaptado para API)
- **Repository Pattern**: Abstração do acesso a dados
- **Service Layer**: Lógica de negócio separada
- **Middleware Pattern**: Interceptação de requisições

### 4. Segurança

- Validação de entrada
- Sanitização de dados
- Autenticação e autorização
- Rate limiting
- CORS
- Helmet.js para headers de segurança

### 5. Tratamento de Erros

- Erros centralizados
- Logs estruturados
- Respostas consistentes de erro

## Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 18+)
- npm ou yarn
- TypeScript
- Banco de dados (PostgreSQL/MySQL)

### Instalação

```bash
npm install
```

### Configuração

1. Copie `.env.example` para `.env`
2. Configure as variáveis de ambiente
3. Execute as migrações do banco (se aplicável)

### Execução

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start

# Testes
npm test
```

## Desenvolvimento

### Estrutura de Código

- Use TypeScript para tipagem forte
- Separe responsabilidades em camadas
- Implemente validação em todas as entradas
- Use async/await para operações assíncronas
- Documente funções e classes

### Padrões de API

- URLs em kebab-case: `/api/users`
- Respostas JSON padronizadas
- Versionamento: `/api/v1/resource`
- Paginação para listas
- Filtros e ordenação

### Testes

- Testes unitários para serviços
- Testes de integração para rotas
- Cobertura mínima de 80%
- Mocks para dependências externas

## Boas Práticas

- Commits semânticos
- Code reviews obrigatórios
- CI/CD pipeline
- Monitoramento e logs
- Documentação atualizada
- Versionamento semântico

## Troubleshooting

- Verifique logs de erro
- Valide configurações de ambiente
- Teste endpoints isoladamente
- Use ferramentas de debug (VS Code Debugger)

## Próximos Passos

1. Implementar autenticação JWT
2. Adicionar validação de entrada
3. Configurar banco de dados
4. Criar primeiros endpoints
5. Implementar testes
6. Documentar API com Swagger

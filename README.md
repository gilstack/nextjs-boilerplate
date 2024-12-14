
# WebApp Boilerplate

Este projeto é um boilerplate configurado para aplicações modernas com **Next.js 15**, **TypeScript**, **Tailwind CSS** e suporte à multilanguage com **Tolgee**. Ele é otimizado para desenvolvimento de aplicações dinâmicas e escaláveis, com ferramentas modernas de linting, testes e automação de commits.

## 🚀 Tecnologias

O boilerplate utiliza as seguintes tecnologias e bibliotecas para oferecer uma base sólida para o desenvolvimento de aplicações web:

- **Next.js 15** – Framework React para desenvolvimento de aplicativos full-stack.
- **TypeScript** – Superset do JavaScript para tipagem estática e melhores práticas.
- **Tailwind CSS** – Framework de CSS utilitário para estilização rápida e responsiva.
- **Tolgee** – Biblioteca de multilanguage para internacionalização (i18n).
- **Jest** – Framework de testes para garantir a qualidade do código.
- **Prettier** e **ESLint** – Ferramentas para formatação e linting de código.
- **Husky** e **Lint-Staged** – Ferramentas de automação de commits e hooks de pré-commit.

## 🔧 Dependências

- **@tolgee/react**: Suporte para integração com Tolgee em aplicações React.
- **clsx**: Utilitário para manipulação dinâmica de classes CSS.
- **tailwind-merge**: Ferramenta para mesclar classes CSS do Tailwind de forma segura.
- **tailwind-variants**: Extensão para criar variantes reutilizáveis com Tailwind CSS.
- **autoprefixer**: Ferramenta para adicionar prefixos de CSS automaticamente.
- **husky** e **lint-staged**: Para configurar hooks de pré-commit e garantir qualidade de código.

## 🛠️ Scripts

Este projeto vem com uma série de scripts úteis para desenvolvimento, build e testes:

- **`npm run dev`** – Inicia o servidor de desenvolvimento.
- **`npm run build`** – Cria uma versão otimizada para produção.
- **`npm run start`** – Inicia o servidor em modo produção.
- **`npm run lint`** – Executa o ESLint para análise de código.
- **`npm run test`** – Executa os testes com Jest.
- **`npm run test:coverage`** – Executa os testes com cobertura de código.
- **`npm run prepare`** – Configura o Husky para hooks de git.

## 📦 Instalação

Para configurar o ambiente de desenvolvimento, siga as instruções abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/gilstack/webapp-boilerplate.git
   cd webapp
   ```

2. Instale as dependências com **pnpm**:

   ```bash
   pnpm install
   ```

   > **Nota**: Este projeto usa `pnpm` como gerenciador de pacotes, portanto, certifique-se de tê-lo instalado. Caso não tenha, você pode instalá-lo com o comando:
   >
   > ```bash
   npm install -g pnpm
   ```

## 🧪 Testes

Este boilerplate vem configurado com o Jest para testes unitários e de integração. Para rodar os testes, utilize o comando:

```bash
pnpm test
```

Ou, se quiser rodar os testes em modo de cobertura:

```bash
pnpm test:coverage
```

## 🎨 Estilos

Este projeto utiliza o **Tailwind CSS** para estilização, o que permite um desenvolvimento rápido e flexível. Para configurar e personalizar o Tailwind, basta editar o arquivo `tailwind.config.js`.

Para adicionar novas variantes ou configurações de estilo, utilize o pacote **tailwind-variants**.

## 🌍 Internacionalização

A biblioteca **Tolgee** está configurada para permitir fácil adição de traduções e suporte multilíngue. Para começar, edite os arquivos de idioma em `src/locales/` e utilize os hooks do Tolgee para renderizar conteúdo traduzido no seu aplicativo.

## 🚀 Deploy

O deploy para produção pode ser feito de forma simples utilizando o comando:

```bash
pnpm build
pnpm start
```

Isso criará uma versão otimizada da aplicação e a iniciará em modo de produção.

## ⚙️ Configurações Adicionais

Este projeto está configurado para utilizar os seguintes padrões:

- **ESLint** e **Prettier** para garantir a qualidade do código.
- **Husky** e **Lint-Staged** para automação de pré-commit.
- **Commitlint** para garantir que as mensagens de commit sigam um padrão consistente.

## 📄 Licença

Este projeto está sob a licença **UNLICENSED**.

## 🧑‍💻 Contribuindo

Sinta-se à vontade para contribuir com este projeto. Se você encontrar algum bug ou tiver sugestões de melhorias, abra um **issue** ou **pull request**.

## 👥 Contribuidores

Agradecemos aos seguintes contribuidores pelo apoio ao projeto:

- [luas10c](https://github.com/luas10c)
- [gilstack](https://github.com/gilstack)

---

> Esse boilerplate foi criado para fornecer uma base robusta e escalável para desenvolvimento web com **Next.js**, **TypeScript** e **Tailwind CSS**. Aproveite e faça modificações para adequar o projeto às suas necessidades!

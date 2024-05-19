# MovieFlix

Este projeto é um aplicativo Vue.js para exibir, gerenciar e visualizar filmes e séries. Utiliza Vue Router para navegação entre páginas e Pinia para gerenciamento de estado. Os usuários podem ver listas de filmes e séries, detalhes individuais e salvar favoritos.

## Tecnologias Utilizadas

- Vue.js 3
- Vue Router
- Pinia
- Tailwind CSS

## Estrutura do Projeto

- `src/`
  - `assets/` - Arquivos estáticos
  - `components/` - Componentes reutilizáveis
  - `views/` - Páginas do aplicativo
  - `stores/` - Gerenciamento de estado com Pinia
  - `App.vue` - Componente raiz
  - `main.ts` - Arquivo de entrada principal
  - `router/` - Configuração de rotas
  - `styles/` - Arquivos de estilos

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/FelipeLTavares/movieflix.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd movieflix
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

Para rodar o aplicativo em ambiente de desenvolvimento, utilize:

```sh
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) para visualizar o projeto no navegador.

## Rotas

- `/` - Lista das mídias mais populares
- `/filmes` - Lista de filmes
- `/series` - Lista de séries
- `/favoritos` - Lista de favoritos
- `/filme/:id` - Detalhes de um filme específico
- `/serie/:id` - Detalhes de uma série específica

## Gerenciamento de Estado

Utiliza Pinia para gerenciamento de estado, armazenando informações sobre mídias, página atual, total de páginas, estado de carregamento e erros.

## Veja online

Veja o projeto online em: https://movieflix-eight-sigma.vercel.app/

## Licença

Este projeto está licenciado sob a MIT License.

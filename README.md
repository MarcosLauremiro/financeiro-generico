# Projeto Financeiro Genérico

Este projeto é uma aplicação financeira genérica desenvolvida em React. Ele oferece funcionalidades para gerenciar despesas e receitas, apresentando uma interface de usuário intuitiva. O projeto utiliza componentes reutilizáveis, estilos globais e um estado local para rastrear e exibir transações financeiras.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`/src`**: Contém todos os arquivos relacionados ao código-fonte.
  - **`/components`**: Armazena os componentes React utilizados na aplicação.
  - **`/styles`**: Inclui arquivos CSS para redefinição de estilos, estilos globais e estilos específicos de componentes.
  - **`App.js`**: Arquivo principal que integra todos os componentes para renderizar a aplicação.

## Componentes

### Header

O cabeçalho da aplicação, que pode incluir um logotipo ou informações de navegação.

### Assaid

Um componente para adicionar novas transações financeiras, como despesas ou receitas. Ele interage com o estado local para manter a lista atualizada.

### SectionCards

Exibe a lista de transações financeiras em forma de cartões, permitindo a visualização e remoção de itens.

## Estilos

Os estilos globais estão divididos em dois arquivos:

- **`ResetStaled.css`**: Reseta os estilos padrão do navegador para garantir uma aparência consistente.

- **`GlobalStyled.css`**: Fornece estilos globais compartilhados por vários componentes.

- **`MainStyled.css`**: Estilos específicos para o componente principal (`MainStyled`).

## Estado Local

O componente `App` utiliza o estado local (`useState`) para gerenciar a lista de transações financeiras. Essa lista é passada como propriedade para os componentes `Assaid` e `SectionCards`, permitindo a adição e exibição de transações em tempo real.

## Executando o Projeto

1. Certifique-se de ter o Node.js instalado.

2. Execute `npm install` para instalar as dependências.

3. Execute `npm start` para iniciar o servidor de desenvolvimento.

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para acessar a aplicação financeira.

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades específicas, adicionando funcionalidades como categorização de transações, gráficos estatísticos ou integração com APIs financeiras.

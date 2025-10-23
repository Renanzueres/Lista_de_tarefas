# 📋 Lista de Tarefas (To-Do List)

Este é um projeto de Lista de Tarefas (To-Do List) desenvolvido com foco em JavaScript puro, HTML5 e CSS3. A aplicação permite ao usuário gerenciar suas tarefas diárias de forma simples e interativa, com todas as informações salvas diretamente no `localStorage` do navegador.

## 🖥️ Visualização

*(Recomenda-se adicionar um screenshot ou GIF da aplicação em funcionamento aqui)*

![Visualização da Lista de Tarefas](https://i.imgur.com/link-para-sua-imagem.png)

## ✨ Funcionalidades

O projeto conta com as seguintes funcionalidades:

* **Adicionar Tarefas:** Adicione novas tarefas usando o campo de entrada (funciona com o botão "Adicionar" ou com a tecla "Enter").
* **Editar Tarefas:** Clique no ícone de lápis (✏️) para editar o texto de uma tarefa diretamente na lista.
* **Marcar como Concluída:** Clique no **texto** da tarefa para riscá-la (e clique novamente para desmarcar).
* **Remover Tarefas:** Remova tarefas individualmente clicando no ícone de lixeira (❌).
* **Limpar Concluídas:** Remova todas as tarefas já concluídas com um único botão.
* **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador, mantendo seu estado mesmo após fechar ou recarregar a página.
* **IDs Únicos:** Cada tarefa possui um ID único (baseado em `Date.now()`) para garantir que a edição e remoção sejam seguras, mesmo com tarefas de texto idêntico.
* **Estado Vazio:** Exibe uma mensagem amigável ("Nenhuma tarefa por aqui! 🥳") quando a lista está vazia.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias web fundamentais:

* **HTML5:** Estrutura semântica do projeto.
* **CSS3:** Estilização moderna, utilizando Flexbox para layout e transições suaves.
* **JavaScript (ES6+):**
    * Manipulação dinâmica do DOM (criação de elementos, `createElement`).
    * Gerenciamento de eventos (`addEventListener`, `.onclick`).
    * Armazenamento local (`localStorage`) para persistência de dados.

## 🚀 Como Executar

Este é um projeto front-end estático. Não é necessária nenhuma instalação ou build.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git](https://github.com/Renanzueres/Lista_de_tarefas.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd Lista_de_tarefas
    ```

3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

E pronto! A aplicação estará funcionando.

## 📄 Licença

Este projeto está sob a licença MIT.

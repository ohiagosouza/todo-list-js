# To-Do List App

Este é o Backend de uma lista de tarefas criado com JavaScript.

## Funcionalidades

- Adicionar novas tarefas à lista.
- Marcar tarefas como concluídas.
- Excluir tarefas da lista.

## Como usar

1. Clone este repositório para o seu ambiente local.
   ```
   git clone https://github.com/ohiagosouza/todo-list-js.git
   ```
2. Digite o código.

   ```
   npm run dev
   ```

3. Abra o `Postman` ou outra plataforma de API
4. Cole o endereço `localhost:3000/checklists` no campo URL e mude o método para POST
5. Clique em **body**, depois marque a opção **raw** e mude o tipo para _json_.
6. Adicione a estrutura do novo Checklist
7. Suas tarefas serão salvas localmente, então você pode fechar e reabrir o aplicativo sem perder suas tarefas.

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal.
- `style.css`: Estilos CSS para o aplicativo.
- `script.js`: Código JavaScript para funcionalidades da lista de tarefas.

## Contribuindo

Se você quiser contribuir com melhorias para este aplicativo, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

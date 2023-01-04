class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('List Contacts from API');
  }

  show() {
    // Exibir UM registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();

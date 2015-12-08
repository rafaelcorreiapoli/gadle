AutoForm.hooks({
  insertTransportadoraForm: {
    onSuccess() {
        toastr.success('Transportadora criada com sucesso: ' + this.insertDoc.name, 'Successo');
        FlowRouter.go('transportadoras.index');
      },
      onError(formType, error) {
        toastr.error(error.toString(), 'Erro');
      },
  }
});

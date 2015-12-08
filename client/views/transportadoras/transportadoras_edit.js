Template.transportadorasEdit.helpers({
  transportadora: function() {
    return Transportadora.findOne({
      _id: FlowRouter.getParam('id')
    });
  }
});

AutoForm.hooks({
  updateTransportadorasForm: {
    onSuccess() {
        toastr.success('Transportadora editado com sucesso: ' + this.currentDoc.nome, 'Sucesso');
        FlowRouter.go('transportadoras.index');
      },
      onError(formType, error) {
        toastr.error(error.toString, 'Erro');
      },
  }
});

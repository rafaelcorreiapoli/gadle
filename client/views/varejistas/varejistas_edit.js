Template.varejistasEdit.helpers({
  technology: function() {
    return Technologie.findOne({
      _id: FlowRouter.getParam('id')
    });
  }
});

AutoForm.hooks({
  updateTechnologiesForm: {
    onSuccess() {
        toastr.success('Varejista editado com sucesso: ' + this.currentDoc.nome, 'Sucesso');
        FlowRouter.go('varejistas.index');
      },
      onError(formType, error) {
        toastr.error(error.toString, 'Error');
      },
  }
});

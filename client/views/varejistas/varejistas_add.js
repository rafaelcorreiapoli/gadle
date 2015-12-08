AutoForm.hooks({
  insertVarejistasForm: {
    onSuccess() {
      toastr.success('Varejista criado com sucesso: ' + this.insertDoc.name, 'Success');
      FlowRouter.go('varejistas.index');
    },
    onError(formType, error) {
      toastr.error(error.toString(), 'Error');
    },
  }
});

removeConfirmation = function(name, callback) {
  swal({
    title: 'Tem certeza?',
    text: 'Você não poderá mais recuperar o documento "' + name + '"',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Sim, deletar!',
    closeOnConfirm: false
  }, () => {
    callback();
  });
};

removeSuccess = function() {
  swal('Deletado!', 'O documento foi delatado.', 'success');
};

removeError = function() {
  swal('Error!', 'O documento não foi deletado.', 'danger');
};


handleTableClick = function(event, callback) {
    console.log(event);
    let dataTable = $(event.target).closest('table').DataTable();
    let rowData = dataTable.row(event.currentTarget).data();
    if (!rowData) return; // Won't be data if a placeholder row is clicked
    callback(rowData);
};

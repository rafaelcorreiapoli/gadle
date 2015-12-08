Template.varejistas.events({
  'click tbody > tr': function(event) {
    handleTableClick(event, (rowData) => {
      FlowRouter.go('varejistas.view', {id: rowData._id});
    });
  }
});

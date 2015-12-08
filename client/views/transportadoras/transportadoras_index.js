Template.transportadoras.onCreated(function() {

});

Template.transportadoras.events({
  'click tbody > tr': function(event) {
    handleTableClick(event, (rowData) => {
      FlowRouter.go('transportadoras.view', {id: rowData._id});
    });
  }
});


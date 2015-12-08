TabularTables.Varejistas = new Tabular.Table({
  name: 'VarejistasList',
  collection: Varejistas,
  sub: new SubsManager(),
  pub: 'tabularVarejistasList',
  autoWidth: false,
  responsive: true,
  stateSave: true,
  extraFields: ['_id'],
  columns: [{
    title: 'Name',
    data: 'name',
    width: '90%'
  }, {
    title: 'Actions',
    tmpl: Meteor.isClient && Template.varejistasActions,
    width: '10%'
  }],
  bPaginate: true
});

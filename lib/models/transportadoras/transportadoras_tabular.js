TabularTables.Transportadoras = new Tabular.Table({
  name: 'TransportadorasList',
  collection: Transportadoras,
  sub: new SubsManager(),
  pub: 'tabularTransportadorasList',
  autoWidth: false,
  responsive: true,
  stateSave: true,
  extraFields: ['_id'],
  columns: [
    {
      title: 'Name',
      data: 'name',
      width: '50%'
    },
    {
      title: 'Actions',
      tmpl: Meteor.isClient && Template.transportadorasActions,
      width: '10%'
  }],
  bPaginate: true
});

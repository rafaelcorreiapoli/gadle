TabularTables.Veiculos = new Tabular.Table({
  name: 'VeiculosList',
  collection: Veiculos,
  sub: new SubsManager(),
  pub: 'tabularVeiculosList',
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
      title: 'Country',
      data: 'country',
      width: '40%'
    },
    {
      title: 'Actions',
      tmpl: Meteor.isClient && Template.veiculosActions,
      width: '10%'
  }],
  bPaginate: true
});

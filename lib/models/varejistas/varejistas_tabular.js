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
    title: 'Nome',
    data: 'nome',
    width: '90%'
  }, {
    title: 'Ações',
    tmpl: Meteor.isClient && Template.varejistasActions,
    width: '10%'
  }],
  bPaginate: true
});

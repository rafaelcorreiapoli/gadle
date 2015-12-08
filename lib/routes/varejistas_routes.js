let varejistasRoutes = FlowRouter.group({
  prefix: '/varejistas',
  name: 'Varejistas'
});

varejistasRoutes.route('/', {
  name: 'varejistas.index',
  title: 'Varejistas',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'varejistas'});
  }
});


varejistasRoutes.route('/add', {
  name: 'varejistas.add',
  parent: 'varejistas.index',
  title: 'Adicionar Varejista',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'varejistasAdd'});
  },
});

varejistasRoutes.route('/:id/view', {
  name: 'varejistas.view',
  parent: 'varejistas.index',
  title() {
    let varejista = Varejistas.findOne({_id: FlowRouter.getParam('id')});
    return varejista && varejista.name;
  },
  subscriptions(params) {
    this.register('varejista', subs.subscribe('varejista', params.id));
  },
  action() {
    BlazeLayout.render('defaultLayout', {main: 'varejistasView'});
  },
});


varejistasRoutes.route('/:id/edit', {
  name: 'varejistas.edit',
  parent: 'varejistas.view',
  title: 'Editar Varejista',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'varejistasEdit'});
  },
  subscriptions(params) {
    this.register('varejista', subs.subscribe('varejista', params.id));
  }
});


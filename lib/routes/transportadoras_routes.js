let transportadorasRoutes = FlowRouter.group({
  prefix: '/transportadoras',
  name: 'Transportadoras'
});

transportadorasRoutes.route('/', {
  name: 'transportadoras.index',
  title: 'Transportadoras',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'transportadoras'});
  }
});


transportadorasRoutes.route('/add', {
  name: 'transportadoras.add',
  parent: 'transportadoras.index',
  title: 'Adicionar Transportadora',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'transportadorasAdd'});
  },
});

transportadorasRoutes.route('/:id/view', {
  name: 'transportadoras.view',
  parent: 'transportadoras.index',
  title() {
    let transportadora = Transportadoras.findOne({_id: FlowRouter.getParam('id')});
    return transportadora && transportadora.name;
  },
  subscriptions(params) {
    this.register('transportadora', subs.subscribe('transportadora', params.id));
  },
  action() {
    BlazeLayout.render('defaultLayout', {main: 'transportadorasView'});
  },
});


transportadorasRoutes.route('/:id/edit', {
  name: 'transportadoras.edit',
  parent: 'transportadoras.view',
  title: 'Editar Transportadora',
  action() {
    BlazeLayout.render('defaultLayout', {main: 'transportadorasEdit'});
  },
  subscriptions(params) {
    this.register('transportadora', subs.subscribe('transportadora', params.id));
  }
});


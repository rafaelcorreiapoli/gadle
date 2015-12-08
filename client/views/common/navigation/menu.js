Template.menu.helpers({
  items: function() {
    return [
      {
        regex: '^users',
        name: 'Usuários',
        icon: 'fa fa-users',
        roles: ['god', 'admin'],
        submenu: [
          {
            name: 'Listar',
            linkTo: 'users.index',
            roles: ['god', 'admin']
          },
          {
            roles: ['god', 'admin'],
            linkTo: 'users.add',
            name: 'Novo'
          }
        ]
      },
      {
        regex: '^transportadoras',
        name: 'Transportadoras',
        icon: 'fa fa-truck',
        roles: ['god', 'admin'],
        submenu: [
          {
            roles: ['god', 'admin'],
            linkTo: 'transportadoras.index',
            name: 'Listar'
          },
          {
            roles: ['god', 'admin'],
            linkTo: 'transportadoras.add',
            name: 'Novo'
          }
        ]
      },
      {
        regex: '^varejistas',
        name: 'Varejistas',
        icon: 'fa fa-briefcase',
        roles: ['god', 'admin'],
        submenu: [
          {
            roles: ['god', 'admin'],
            linkTo: 'varejistas.index',
            name: 'Listar'
          },
          {
            roles: ['god', 'admin'],
            linkTo: 'varejistas.add',
            name: 'Novo'
          }
        ]
      },

      {
        regex: '^veiculos',
        name: 'Veículos',
        icon: 'fa fa-car',
        roles: ['god', 'admin'],
        submenu: [
          {
            roles: ['god', 'admin'],
            linkTo: 'veiculos.index',
            name: 'Listar',
          },
          {
            roles: ['god', 'admin'],
            linkTo: 'veiculos.add',
            name: 'Novo'
          }
        ]
      },
      {
        regex: '^entregas',
        name: 'Entregas',
        icon: 'fa fa-map-o',
        roles: ['god', 'admin'],
        submenu: [
          {
            roles: ['god', 'admin'],
            linkTo: 'entregas.index',
            name: 'Listar',
          },
          {
            roles: ['god', 'admin'],
            linkTo: 'entregas.add',
            name: 'Novo'
          }
        ]
      }
    ];
  }
});

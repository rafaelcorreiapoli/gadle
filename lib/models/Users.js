//                                       //
//                 SCHEMAS               //
//                                       //

//
// Profile
//
ProfileSchema = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  fullName: {
    type: String,
    autoValue: function() {
      let firstName = this.field('profile.firstName');
      let lastName = this.field('profile.lastName');
      if (firstName.isSet && lastName.isSet) {
        return firstName.value + ' ' + lastName.value;
      }
    },
    autoform: {
      omit: true
    },
    optional: true
  },
  birth: {
    type: Date,
    optional: true,
    autoform: {
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        format: 'yyyy/mm/dd',
        language: 'en-US'
      }
    }
  },
  gender: {
    type: String,
    optional: true,
    allowedValues: ['Male', 'Female'],
    autoform: {
      label: 'Gender',
      type: 'select-radio-inline',
      options: [{
        value: 'Male',
        label: 'Male'
      }, {
        value: 'Female',
        label: 'Female'
      }]
    }
  },
  address: {
    type: String,
    optional: true,
    autoform: {
      label: 'Address',
    }
  },
  telephone: {
    type: String,
    optional: true,
    autoform: {
      type: 'telefone'
    }
  },
  cellphone: {
    type: String,
    optional: true,
    autoform: {
      type: 'celular'
    }
  },
  about: {
    type: String,
    optional: true,
    autoform: {
      type: 'textarea',
      rows: 6
    }
  },
  imageId: {
    type: String,
    optional: true
  }
});

//
// Invite
//
InviteSchema = new SimpleSchema({
  email: {
    type: String,
    autoform: {
      label: 'Email'
    }
  },
  roles: {
    type: String,
    allowedValues: ['admin', 'usuario'],
    autoform: {
      label: 'Role',
      firstOption: 'Select a role',
      type: 'selectize',
      options: [{
        value: 'admin',
        label: 'Admin'
      }, {
        value: 'usuario',
        label: 'Usuário'
      }, ]
    }
  }
});


//
// Users
//
Meteor.users.Schema = new SimpleSchema({
  emails: {
    type: [Object],
    autoform: {
      omit: true
    },
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  profile: {
    type: ProfileSchema,
    optional: true,
    autoform: {
      omit: true
    }
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    autoform: {
      omit: true
    }
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  status: {
    type: Object,
    blackbox: true,
    optional: true
  },
  active: {
    type: Boolean,
    autoValue() {
      return false;
    }
  }
});

Meteor.users.attachSchema(Meteor.users.Schema);
Meteor.users.attachBehaviour('timestampable');

//                                       //
//                 EXTENSIONS            //
//                                       //
Meteor.users.quickList = function() {
  return this.find().map(function(c) {
    let nome = c.profile.nomeCompleto ? c.profile.nomeCompleto : c.emails[0].address;
    return {
      label: nome,
      value: c._id
    };
  });
};

//                                       //
//                 HELPERS               //
//                                       //
Meteor.users.helpers({
  role() {
    let roles = Roles.getRolesForUser(this._id);
    return roles[0];
  },
  link() {
    return FlowRouter.path('users.view', {
      id: this._id
    });
  },
  identification() {
    return this.profile && this.profile.fullName ? this.profile.fullName : this.emails[0].address;
  },
  profileImage() {
    return Images.findOne({_id: this.profile.imageId});
  }
});

//                                       //
//                 DATATABLE             //
//                                       //
TabularTables.Users = new Tabular.Table({
  name: 'UsersList',
  pub: 'tabular_UsersList',
  collection: Meteor.users,
  sub: new SubsManager(),
  autoWidth: false,
  responsive: true,
  stateSave: true,
  extraFields: ['_id', 'profile', 'emails'],
  columns: [{
    title: 'Email',
    data: 'emails.0.address',
    tmpl: Meteor.isClient && Template.nameLink,
    tmplContext(rowData) {
      return {
        name: rowData.emails && rowData.emails[0].address,
        link: rowData.link()
      };
    },
    width: '20%',
    sType: 'html'
  }, {
    title: 'Nome completo',
    data: 'profile.fullName',
    width: '60%'
  }, {
    title: 'Grupo',
    data: 'role()',
    render(val) {
      return formatRole(val, true);
    },
  }, {
    title: 'Ações',
    tmpl: Meteor.isClient && Template.usersActions,
    width: '10%'
  }],
  bLengthChange: false,
  bPaginate: true,
  type: 'html'
});

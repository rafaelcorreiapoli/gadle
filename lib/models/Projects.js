Projects = new Mongo.Collection('Projects');
//                                       //
//                 SCHEMA                //
//                                       /
ScenariosSchema = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: [DescriptionSchema]
    },
    imgs: {
        type: [ImagesSchema]
    },
    technologiesId: {
        type: [String]
    },
    attachmentsId: {
        type: [String],
    }
});
//
// Projects
//
Projects.Schema = new SimpleSchema({
  //  Name of the given technology
  name: {
    type: String
  },
  description: {
    type: String
  },
  evId: {
    type: String
  },
  url: {
    type: String
  },
  organizationId: {
    type: String
  },
  technologiesId: {
    type: [String]
  },
  attachmentsId: {
    type: [String]
  },
  scenarios: {
    type: [ScenariosSchema]
  },
});

Projects.attachSchema(Projects.Schema);
Projects.attachBehaviour('timestampable');

//                                       //
//                 EXTENSIONS            //
//                                       //
Projects.quickList = function(query) {
  return this.find(query).map(function(c) {
    return {
      label: c.name,
      value: c._id
    };
  });
};

//                                       //
//                 SECURITY              //
//                                       //

if (Meteor.isServer) {
  Projects.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}

//                                       //
//                 HOOKS                 //
//                                       //

//                                       //
//                 HELPERS               //
//                                       //

Projects.helpers({
  link: function() {
    return FlowRouter.path('projects.view', {
      id: this._id
    });
  },
});


//                                       //
//                 DATATABLE             //
//                                       //

TabularTables.Projects = new Tabular.Table({
  name: 'ProjectsList',
  collection: Projects,
  sub: new SubsManager(),
  pub: 'tabularProjectsList',
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
    tmpl: Meteor.isClient && Template.projectsActions,
    width: '10%'
  }],
  bPaginate: true
});
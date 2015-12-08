Template.varejistasActions.helpers({
  beforeRemove() {
    return function(collection, id) {
      let doc = collection.findOne(id);
      removeConfirmation(doc.nome, () => {
        this.remove();
      });
    };
  },
  onSuccess() {
    return function() {
      removeSuccess();
    };
  },
  onError() {
    return function() {
      removeError();
    };
  }
});

Template.varejistasActions.events({
  'click #btn-edit': function(e) {
    e.stopPropagation();
    FlowRouter.go('varejistas.edit', {id: this._id});
  },
  'click #btn-remove': function(e) {
    e.stopPropagation();
  }
});

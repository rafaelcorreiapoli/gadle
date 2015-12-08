Meteor.publishComposite('tabularTransportadorasList', function(tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));
  this.unblock();
  return {
    find() {
      this.unblock();
      return Transportadoras.find({_id: {$in: ids}}, {fields: fields});
    },
  };
});

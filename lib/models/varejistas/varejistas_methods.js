Varejistas.methods = {};

Varejistas.methods.add = new ValidatedMethod({
  name: 'Varejistas.methods.add',
  validate: Schemas.Varejista.validator(),
  run(doc) {
    return Varejistas.insert(doc);
  }
});

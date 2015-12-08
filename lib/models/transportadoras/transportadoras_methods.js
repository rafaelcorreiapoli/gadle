Transportadoras.methods = {};

Transportadoras.methods.add = new ValidatedMethod({
  name: 'Transportadoras.methods.add',
  validate: Schemas.Transportadora.validator(),
  run(doc) {
    return Transportadoras.insert(doc);
  }
});

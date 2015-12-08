Veiculos.methods = {};

Veiculos.methods.add = new ValidatedMethod({
  name: 'Veiculos.methods.add',
  validate: Schemas.Veiculo.validator(),
  run(doc) {
    return Veiculos.insert(doc);
  }
});

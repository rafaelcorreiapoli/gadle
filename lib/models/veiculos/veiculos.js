Veiculos = new Mongo.Collection('veiculos');

Schemas.Veiculo = new SimpleSchema({
   name: {
    type: String
  },
  description: {
    type: String
  },
  // This is the createdBy field
  // author: {
  //   type: String,
  // },
  content: {
    type: [Schemas.Content],
    optional: true
  }
});

Veiculos.attachSchema(Schemas.Veiculo);
Veiculos.attachBehaviour('timestampable');


Transportadoras = new Mongo.Collection('transportadoras');

Schemas.Transportadora = new SimpleSchema({
  nome: {
    type: String
  },
  teste: {
    type: Boolean
  }
});

Transportadoras.attachSchema(Schemas.Transportadora);
Transportadoras.attachBehaviour('timestampable');

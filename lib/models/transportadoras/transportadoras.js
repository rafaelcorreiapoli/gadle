Transportadoras = new Mongo.Collection('transportadoras');

Schemas.Transportadora = new SimpleSchema({
  nome: {
    type: String
  }
});

Transportadoras.attachSchema(Schemas.Transportadora);
Transportadoras.attachBehaviour('timestampable');

Transportadoras = new Mongo.Collection('transportadoras');

Schemas.Transportadora = new SimpleSchema({
  name: {
    type: String
  }
});

Transportadoras.attachSchema(Schemas.Transportadora);
Transportadoras.attachBehaviour('timestampable');

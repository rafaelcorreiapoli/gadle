Varejistas = new Mongo.Collection('vareijistas');

Schemas.Varejista = new SimpleSchema({
  name: {
    type: String
  },
});

Varejistas.attachSchema(Schemas.Varejista);
Varejistas.attachBehaviour('timestampable');

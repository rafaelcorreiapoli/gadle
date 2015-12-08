Varejistas = new Mongo.Collection('vareijistas');

Schemas.Varejista = new SimpleSchema({
  nome: {
    type: String
  },
});

Varejistas.attachSchema(Schemas.Varejista);
Varejistas.attachBehaviour('timestampable');

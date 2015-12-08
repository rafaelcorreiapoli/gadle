//
//  SimpleSchema Messages
//

SimpleSchema.messages({
  required: '[label] é necessário',
  minString: '[label] precisa ter no mínimo [min] caracteres',
  maxString: '[label] não pode ter mais que [max] caracteres',
  minNumber: '[label] precisa ser no minimo [min]',
  maxNumber: '[label] não pode exceder [max]',
  minDate: '[label] precisa ser em ou depois de [min]',
  maxDate: '[label] não pode ser depois de [max]',
  badDate: '[label] não é uma data válida',
  minCount: 'Você precisa especificar no mínimo [minCount] valores',
  maxCount: 'Você não pode especificar mais do que [maxCount] valores',
  noDecimal: '[label] precisa ser um número inteiro',
  notAllowed: '[value] não é um valor permitido',
  expectedString: '[label] precisa ser um texto',
  expectedNumber: '[label] precisa ser um número',
  expectedBoolean: '[label] precisa ser um valor booleano',
  expectedArray: '[label] precisa ser um array',
  expectedObject: '[label] precisa ser um objeto',
  expectedConstructor: '[label] precisa ser do tipo [type]',
  regEx: [
    {msg: '[label] falhou na expressão regular'},
    {exp: SimpleSchema.RegEx.Email, msg: '[label] precisa ser um e-mail válido'},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: '[label] precisa ser um e-mail válido'},
    {exp: SimpleSchema.RegEx.Domain, msg: '[label] precisa ser um domínio válido'},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: '[label] precisa ser um domínio válido'},
    {exp: SimpleSchema.RegEx.IP, msg: '[label] precisa ser um endereço IPv4 ou IPv6 válido'},
    {exp: SimpleSchema.RegEx.IPv4, msg: '[label] precisa ser um endereço IPv4 válido'},
    {exp: SimpleSchema.RegEx.IPv6, msg: '[label] precisa ser um endereço IPv6 válido'},
    {exp: SimpleSchema.RegEx.Url, msg: '[label] precisa ser uma URL válida'},
    {exp: SimpleSchema.RegEx.Id, msg: '[label] precisa ser um ID alfanumérico'}
  ],
  keyNotInSchema: '[key] não é válida no modelo'
});

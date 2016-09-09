/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      minLength: 2,
      required: true
    },
    middleName:{
      type: 'string',
      minLength: 2
    },
  lastName: {
      type: 'string',
      minLength: 2,
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      email: true
  },
    homePhone: {
      type: 'string',
      required: true,
      regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  },
    cellPhone: {
      type: 'string',
      required: true,
      regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  },
  yearsWorked: {
    type: 'integer'
  },
    password: {
      type: 'string',
      required: true,
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/
  }
  }
};
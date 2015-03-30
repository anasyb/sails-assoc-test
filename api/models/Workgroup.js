/**
* Workgroup.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    //Relationships
    members: {
        collection: 'user',
        via: 'groups'
    },

    //Attributes
    fullName : { type: 'string' },

    nickName : { type: 'string' },

    // performance : { type: 'float' },

    // performanceHistory : { type: 'array' }
  }
};

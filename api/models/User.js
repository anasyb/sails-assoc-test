/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        //Relationships
        groups: {
            collection: 'workgroup',
            via: 'members',
            dominant: true
        },

        //Attributes
        firstName : { type: 'string' },

        lastName : { type: 'string' },

        nickName : { type: 'string' },

        //override sails toJSON so that association arrays are maintained
        //TODO this is a hack!!
        //toJSON: 'I am not a function!'
    },
};
























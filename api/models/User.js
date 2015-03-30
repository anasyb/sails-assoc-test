/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        //Relationships
        // account: {
        //     model: 'account',
        //     via: 'owner'
        // },
        // courses: {
        //     collection: 'course',
        //     via: 'owner'
        // },
        // mentoring: {
        //     collection: 'user',
        //     via: 'mentoredBy',
        //     dominant: true
        // },
        // mentoredBy: {
        //     collection: 'user',
        //     via: 'mentoring'
        // },
        groups: {
            collection: 'workgroup',
            via: 'members',
            dominant: true
        },

        //Attributes
        firstName : { type: 'string' },

        lastName : { type: 'string' },

        nickName : { type: 'string' },

        // performance : { type: 'float' },

        // performanceHistory : { type: 'array' }

        //override sails toJSON so that association arrays are maintained
        //TODO this is a hack!!
        //toJSON: 'I am not a function!'
    },

    // policies: {
    //     findOne: [],
    //     pols: {
    //         somepol: function(req, records){ return true },
    //     }
    // }
};
























Settings = new Meteor.Collection('settings', {

  'schema' : new SimpleSchema({

    createDate: {
      type: Date,
      label: 'createDate'
    },
    displayName: {
      type: String,
      label: 'displayName'
    },
    userId: {
      type: String,
      label: 'userId'
    }
  })
});


/*
 * Add query methods like this:
 *  Settings.findPublic = function () {
 *    return Settings.find({is_public: true});
 *  }
 */

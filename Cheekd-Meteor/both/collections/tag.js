Tag = new Meteor.Collection('tag', {

  'schema' : new SimpleSchema({

    createDate: {
        type: Date,
        label: 'createDate',
        defaultValue: new Date(),
        optional:true
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
 *  Tag.findPublic = function () {
 *    return Tag.find({is_public: true});
 *  }
 */

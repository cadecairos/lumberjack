var JS  = require('jstest'),
    Profile = require('../');

JS.Test.describe('Profile', function() { with(this) {
  it('exists', function() { with(this) {
    assert(Profile);
  }});

  describe('Default Values', function() { with(this) {
    var p = new Profile(),
        data = p.getData();

    it('Defaults lastActive', function() { with(this) {
      assert(data.lastActive);
      assert(typeof data.lastActive === "number");
    }});
    it('Defaults firstContribution', function() { with(this) {
      assertNot(data.firstContribution);
      assertEqual(data.firstContribution, null);
    }});
    it('Defaults latestContribution', function() { with(this) {
      assertNot(data.latestContribution);
      assertEqual(data.latestContribution, null);
    }});
    it('Defaults contributor', function() { with(this) {
      assertNot(data.contributor);
      assertEqual(data.contributor, false);
    }});
    it('Defaults eventHost', function() { with(this) {
      assertNot(data.eventHost);
      assertEqual(data.eventHost, false);
    }});
    it('Defaults createdAt', function() { with(this) {
      assert(data.createdAt);
      assert(typeof data.createdAt === "number");
    }});
    it('Defaults deletedAt', function() { with(this) {
      assertNot(data.deletedAt);
      assertEqual(data.deletedAt, null);
    }});
  }});
}});

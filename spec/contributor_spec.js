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
      assertNot(data.lastActive);
      assertEqual(data.lastActive, null);
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

  describe('updates', function() { with(this) {
    it('updates lastActive', function() { with(this) {
      var p = Profile({
        lastActive: "2014-01-01T00:00:00.000Z"
      });
      p.updateProfile({
        event_type: "test",
        timestamp: "2014-01-01T01:00:00.000Z"
      });

      assertEqual("2014-01-01T01:00:00.000Z", p.getData().lastActive);
    }});

    it('updates lastActive if timestamp is newer', function() { with(this) {
      var p = Profile({
        lastActive: "2014-01-01T00:00:00.000Z"
      });
      p.updateProfile({
        event_type: "test",
        timestamp: "2013-01-00T01:00:00.000Z"
      });

      assertEqual("2014-01-01T00:00:00.000Z", p.getData().lastActive);
    }});
  }});
}});

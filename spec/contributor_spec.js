var JS  = require('jstest'),
    Profile = require('../');

JS.Test.describe('Profile', function() { with(this) {
  it("exists", function() { with(this) {
    assert(Profile);
  }});
}});

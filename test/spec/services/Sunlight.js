'use strict';

describe('Service: Sunlight', function () {

  // load the service's module
  beforeEach(module('siftScienceApp'));

  // instantiate service
  var Sunlight;
  beforeEach(inject(function (_Sunlight_) {
    Sunlight = _Sunlight_;
  }));

  it('should do something', function () {
    expect(!!Sunlight).toBe(true);
  });

});

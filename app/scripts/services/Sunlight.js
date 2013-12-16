'use strict';

angular.module('siftScienceApp')
  .service('Sunlight', function Sunlight() {
    return function(queryString, callback){
      $.ajax({
        url: 'http://congress.api.sunlightfoundation.com/'+ queryString +'apikey=cf7e14552d4b4c428c1c268ea1a56df6',
        type: 'GET',
        success: function(stuff){callback(stuff)},
        failure: function(e){throw new Error(e)}
      });
    }
  });

'use strict';

angular.module('siftScienceApp')
  .controller('MainCtrl', function ($scope, Sunlight) {
    Sunlight('legislators?per_page=all&', function(stuff){
      $scope.legislators = stuff.results;
      $scope.$digest();
      getVotes();

    });
    $scope.data = {};
    function getVotes(){
      for (var i = 0; i < $scope.legislators.length; i++){
        Sunlight('/votes?voter_ids.' + $scope.legislators[i].bioguide_id + '__exists=true&fields=voters&', function(stuff){
          debugger;
          $scope.data[$scope.legislators[i].bioguide_id] = {};
          $scope.data[$scope.legislators[i].bioguide_id].votes = stuff.results;
        });
      }
    }
  });

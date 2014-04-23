'use strict';

angular.module('carappApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

(function() {
  'use strict';

  angular
    .module('todoWithAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

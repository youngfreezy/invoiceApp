app

.service('Currency', function () {

  var service = {};

  service.all = function () {
    return [{
      name: 'Canadian Dollar ($)',
      symbol: 'CAD $ '
    }, {
      name: 'Euro (€)',
      symbol: '€'
    }, {
      name: 'Indian Rupee (₹)',
      symbol: '₹'
    }, {
      name: 'Norwegian kroner (kr)',
      symbol: 'kr '
    }, {
      name: 'US Dollar ($)',
      symbol: '$'
    }];
  };

  return service;

});
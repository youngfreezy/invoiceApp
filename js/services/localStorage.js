app

.factory('LocalStorage', [

  function () {

    var Service = {};



    var hasInvoice = function () {
      return !(localStorage['invoice'] === '' || localStorage['invoice'] === null);
    };

    // Returns a stored invoice (false if none is stored)
    Service.getInvoice = function () {
      if (hasInvoice()) {
        return JSON.parse(localStorage['invoice']);
      } else {
        return false;
      }
    };

    Service.setInvoice = function (invoice) {
      localStorage['invoice'] = JSON.stringify(invoice);
    };

  

    // Clears a stored invoice
    Service.clearinvoice = function () {
      localStorage['invoice'] = '';
    };

    // Clears all local storage
    Service.clear = function () {
      localStorage['invoice'] = '';

    };

    return Service;

  }
]);
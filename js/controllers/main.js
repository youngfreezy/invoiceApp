app

.controller('InvoiceCtrl', ['$scope', '$http', 'defaultInvoice', 'LocalStorage', 'Currency',
  function ($scope, $http, defaultInvoice, LocalStorage, Currency) {


    var invoice = LocalStorage.getInvoice();

    $scope.invoice = invoice ? invoice : defaultInvoice;



    $scope.addItem = function () {
      $scope.invoice.items.push({
        qty: 0,
        cost: 0,
        description: ""
      });
    };

    $scope.currencySymbol = '$';
    $scope.availableCurrencies = Currency.all();

    $scope.availableItems = [{
      name: "Basic Plan"
    }, {
      name: "Professional Plan"
    }, {
      name: "Enterprise"
    }, {
      name: "Custom"
    }, {
      name: "Consulting"
    }, {
      name: "Analytics"
    }];
    $scope.show = false;

    $scope.createInvoice = function () {
      $scope.show = true;
    };

    $scope.removeItem = function (item) {
      $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
    };


    var invoiceSubTotal = function () {
      var total = 0.00;
      angular.forEach($scope.invoice.items, function (item) {
        total += (item.qty * item.cost);
      });
      return total;
    };


    var calculateTax = function () {
      return (($scope.invoice.tax * invoiceSubTotal()) / 100);
    };


    $scope.calculateGrandTotal = function () {
      saveInvoice();
      return calculateTax() + invoiceSubTotal();
    };


    $scope.clearLocalStorage = function () {
      var confirmClear = confirm('Are you sure you would like to delete the invoice?');
      if (confirmClear) {
        LocalStorage.clear();
        $scope.invoice.items = [];
        setInvoice(defaultInvoice);
      }
    };

    // Sets the current invoice to the given one
    var setInvoice = function (invoice) {
      $scope.invoice = invoice;
      saveInvoice();
    };


    // Saves the invoice in local storage
    var saveInvoice = function () {
      LocalStorage.setInvoice($scope.invoice);
    };


  }
]);
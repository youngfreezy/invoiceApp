app

.controller('InvoiceCtrl', ['$scope', '$http', 'defaultInvoice', 'LocalStorage', 'Currency',
  function ($scope, $http, defaultInvoice, LocalStorage, Currency) {

    // Set defaults
    $scope.currencySymbol = '$';

    var invoice = LocalStorage.getInvoice();
    $scope.invoice = invoice ? invoice : defaultInvoice;


    $scope.availableCurrencies = Currency.all();

    $scope.addItem = function () {
      $scope.invoice.items.push({
        qty: 0,
        cost: 0,
        description: ""
      });
    };




    $scope.removeItem = function (item) {
      $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
    };


    $scope.invoiceSubTotal = function () {
      var total = 0.00;
      angular.forEach($scope.invoice.items, function (item, key) {
        total += (item.qty * item.cost);
      });
      return total;
    };


    $scope.calculateTax = function () {
      return (($scope.invoice.tax * $scope.invoiceSubTotal()) / 100);
    };

    // Calculates the grand total of the invoice
    $scope.calculateGrandTotal = function () {
      saveInvoice();
      return $scope.calculateTax() + $scope.invoiceSubTotal();
    };

    // Clears the local storage
    $scope.clearLocalStorage = function () {
      var confirmClear = confirm('Are you sure you would like to clear the invoice?');
      if (confirmClear) {
        LocalStorage.clear();
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

    // Runs on document.ready
    angular.element(document).ready(function () {
      // Set focus
      document.getElementById('invoice-number').focus();


    });

  }
]);
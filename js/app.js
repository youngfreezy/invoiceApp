var app = angular.module('invoiceApp', []);
app


.constant('defaultInvoice', {
  tax: 13.00,
  invoice_number: 12,
  customer_info: {
    name: 'Acme Paper Company',
    web_link: 'www.acme.com',
    address1: '1 Infinite Loop',
    address2: 'Bethesda, MD, US',
    zipcode: '20814'
  },
  company_info: {
    name: 'SteelBrick',
    web_link: 'www.steelbrick.com',
    address1: '1730 S El Camino Real, Suite 580',
    address2: 'San Mateo, CA',
    zipcode: '94402'
  },
  items:[
     // { qty: 12, description: 'Marketing Bundle', cost: 12.00 }
  ]
});
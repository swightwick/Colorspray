var Xray = require('x-ray');
var x = Xray({
    filters: {
    trim: function (value) {
        return typeof value === 'string' ? value.trim() : value
    },
    reverse: function (value) {
        return typeof value === 'string' ? value.split('').reverse().join('') : value
    },
    slice: function (value, start , end) {
        return typeof value === 'string' ? value.slice(start, end) : value
    }
    }
});

x('https://www.graff-city.com/spray-cans-c128/spray-paint-cans-c76/molotow-spray-paint-c91/molotow-premium-spray-paint-p92', '.product-price-breaks-table', [{
  name: 'span.product-price-breaks-table__product-name span',
  color: '.product-price-breaks-table__swatch@style | slice:17,24'
  // color: 'span@style 
}])



.write('molowtow.json')

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

x('https://www.graff-city.com/spray-cans-c128/spray-paint-cans-c76/kobra-spray-paint-c88/kobra-hp-spray-paint-p1426', '.js-product-price-breaks-table table tbody', [{
  name: '.product-price-breaks-table__product-name',
  color: '.product-price-breaks-table__swatch@style | slice:18,25'
}])

.write('kobra.json')

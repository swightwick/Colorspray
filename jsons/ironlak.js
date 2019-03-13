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

x('https://ironlak.com.au/ironlak/', '.form-option', [{
  name: 'span@title',
  color: 'span@style | slice:18,25',
  brand: 'ironlak'
}])

.write('ironlak.json')

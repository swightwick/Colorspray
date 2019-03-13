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

x('https://www.montanacolors.com/en/productos/hardcore/', '.m-grid_colors', [{
  name: 'figcaption',
  color: 'span@style | slice:17,30'
}])

.write('mtn.json')

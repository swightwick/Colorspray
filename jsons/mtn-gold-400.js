var Xray = require('x-ray');
var x = Xray();

x('https://www.montana-cans.com/en/spray-cans/montana-spray-paint/gold-400ml-artist-paint/montana-gold-400ml-colors', '.color-variant-item', [{
  name: 'label@data-title',
  color: 'label@data-hex',
}])

.write('mtn-gold-400.json')

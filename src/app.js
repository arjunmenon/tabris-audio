const {ImageView, fs, Button, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message',
  id: 'submit'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'Tabris.js rocks!';
});

// let fsButton = new Button({
//   centerX: 0, top: ["#submit",100],
//   text: 'Open File System'
// }).appendTo(ui.contentView);

// fsButton.on('select', () => {
//   // textView.text = 'Tabris.js rocks!';
//   fs.readDir(fs.cacheDir);
// });



// let file = fs.cacheDir + '/test.png';

// let imageView = new ImageView({
//   centerX: 0, centerY: 0, width: 400, height: 200,
//   background: '#aaaaaa'
// }).appendTo(ui.contentView);

// fetch('http://lorempixel.com/400/200/')
//   .then(res => res.arrayBuffer())
//   .then(data => fs.writeFile(file, data))
//   .then(() => imageView.image = file)
//   .then(() => console.log('image:', file))
//   .catch(err => console.error(err));
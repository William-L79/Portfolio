$(function() {

  //   let shape = new mojs.Shape({
  //   shape:        'circle',  // shape "circle" is default
  //   radius:       25,        // shape radius
  //   fill:         'white',   // same as 'transparent'
  //   stroke:       '#F64040', // or 'cyan'
  //   strokeWidth:  5,         // width of the stroke
  //   isShowStart:  true,      // show before any animation starts
  //   x: 'rand(-250,250)',     // Random position Y when f5
  //   y: 'rand(-250,250)',
  //   radiusX: 50       // Random position Y when f5
  // });

  // //   let polygon = new mojs.Shape({
  // //     shape: 'polygon',
  // //     fill: 'green',
  // //     radius: 50,
  // //     isShowStart: true,
  // // });

  //   let zigzag = new mojs.Shape({
  //     shape: 'zigzag',
  //     points: 19,
  //     fill: 'none',
  //     stroke: 'white',
  //     radius: 50,
  //     isShowStart: true,
  // });

  //     let curve= new mojs.Shape({
  //     shape: 'curve',
  //     points: 4,
  //     fill: 'none',
  //     stroke: 'white',
  //     radius: 50,
  //     isShowStart: true,
  //     x: 100,
  //     y: 100
  // });

  var shape = new mojs.Shape({
  shape:        'circle',
  stroke:       'white',
  fill:          'none',
  scale:         { 0 : 5 },

  duration:      2000,
  delay:         1000,
  easing:        'cubic.out',
  repeat:        1
}).play();
});



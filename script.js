$(function() {
  var strings = ['Hello, world', 'ls -la ~/Desktop', 'foobar', 'ifconfig | grep inet', 'rsync -avhuz . ~/Desktop'],
      canvas = $('.canvas')[0],
      wrapperWidth = $('.canvas-wrapper').width(),
      wrapperHeight = $('.canvas-wrapper').height(),
      ctx = canvas.getContext('2d'),
      type = function(str, x, y) {
        var chars = str.split(''),
            queue = [],
            delay = 0,
            drawChar = function(delay, char, x, y) {
              setTimeout(function() { ctx.fillText(char, x, y); }, delay);
            };
        
        ctx.font = 'normal ' + (Math.round(Math.random() * 8) + 10) + 'px "Share Tech Mono", sans-serif';
        
        for(var i = 0, len = chars.length; i < len; i++) {
          var charWidth = ctx.measureText(chars[i]).width;
              
          x += charWidth;
          delay += Math.round(Math.random() * 100) + 100;
              
          queue.push({
            x: x,
            char: chars[i],
            delay: delay
          });
        }
        
        for(var i = 0, len = queue.length; i < len; i++) {
          var c = queue[i];
          
          drawChar(c.delay, c.char, c.x, y);
        }
      };
  
  // Draw in random location
    // Make sure not overlapping
  // Draw at random intervals
  // Clear existing items at random intervals
  
  canvas.width = wrapperWidth;
  canvas.height = wrapperHeight;
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  
  for(var i = 0; i < strings.length; i++) {
    var x = Math.round(Math.random() * wrapperWidth),
        y = Math.round(Math.random() * wrapperHeight);

    type(strings[i], x, y);
  }
});

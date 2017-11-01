window.onload = function() {

  var canvas = document.getElementById('sky');
  var ctx = canvas.getContext('2d');

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var mf = 100;
  var flakes = [];

  for(var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * W,       // appear anywhere between x axis of window
      y: Math.random() * H,       // appear anywhere between y axis of window
      r: Math.random() * 5 + 2,   // appear at max of 7px radius
      d: Math.random() + 1        // rate at which snowflakes fall
    })
  }


  function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  var angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for(var i = 0; i < mf; i++) {
      var f = flakes[i];              // store current flake
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      if(f.y > H) {
        flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
      }
    }
  }

  setInterval(drawFlakes, 40);

}

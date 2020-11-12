var mySvg = new Vivus('boxes', {
    type: 'delayed',
    duration: 100,
    start: 'autostart'
    
  });
  
  var meter = new Vivus('meter', {
    type: 'scenario',
    duration: 80,
    start: 'autostart'
  });
  
  document.getElementById("replay").addEventListener("click", function(){
    mySvg.stop().reset().play(2);
    meter.stop().reset().play(2);
  });
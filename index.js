// TODO: only the part this landing needs


let marqueeStr = `
          .         .                                                                                                                                                                                                                                                                                            
         ,8.       ,8.           ,o888888o.     8 888888888o.   8 888888888o   8 8888        8 8 8888888888   8 8888      88    d888888o.                 ,o888888o.        ,o888888o.     b.             8    d888888o.   8 8888      88 8 8888   8888888 8888888888  8 8888 b.             8     ,o888888o.    
        ,888.     ,888.       . 8888     '88.   8 8888    '88.  8 8888    '88. 8 8888        8 8 8888         8 8888      88  .'8888:' '88.              8888     '88.   . 8888     '88.   888o.          8  .'8888:' '88. 8 8888      88 8 8888         8 8888        8 8888 888o.          8    8888     '88.  
       .'8888.   .'8888.     ,8 8888       '8b  8 8888     '88  8 8888     '88 8 8888        8 8 8888         8 8888      88  8.'8888.   Y8           ,8 8888       '8. ,8 8888       '8b  Y88888o.       8  8.'8888.   Y8 8 8888      88 8 8888         8 8888        8 8888 Y88888o.       8 ,8 8888       '8. 
      ,8.'8888. ,8.'8888.    88 8888        '8b 8 8888     ,88  8 8888     ,88 8 8888        8 8 8888         8 8888      88  '8.'8888.               88 8888           88 8888        '8b .'Y888888o.    8  '8.'8888.     8 8888      88 8 8888         8 8888        8 8888 .'Y888888o.    8 88 8888           
     ,8'8.'8888,8^8.'8888.   88 8888         88 8 8888.   ,88'  8 8888.   ,88' 8 8888        8 8 888888888888 8 8888      88   '8.'8888.              88 8888           88 8888         88 8o. 'Y888888o. 8   '8.'8888.    8 8888      88 8 8888         8 8888        8 8888 8o. 'Y888888o. 8 88 8888           
    ,8' '8.'8888' '8.'8888.  88 8888         88 8 888888888P'   8 888888888P'  8 8888        8 8 8888         8 8888      88    '8.'8888.             88 8888           88 8888         88 8'Y8o. 'Y88888o8    '8.'8888.   8 8888      88 8 8888         8 8888        8 8888 8'Y8o. 'Y88888o8 88 8888           
   ,8'   '8.'88'   '8.'8888. 88 8888        ,8P 8 8888'8b       8 8888         8 8888888888888 8 8888         8 8888      88     '8.'8888.            88 8888           88 8888        ,8P 8   'Y8o. 'Y8888     '8.'8888.  8 8888      88 8 8888         8 8888        8 8888 8   'Y8o. 'Y8888 88 8888   8888888 
  ,8'     '8.''     '8.'8888.'8 8888       ,8P  8 8888 '8b.     8 8888         8 8888        8 8 8888         ' 8888     ,8P 8b   '8.'8888.           '8 8888       .8' '8 8888       ,8P  8      'Y8o. 'Y8 8b   '8.'8888. ' 8888     ,8P 8 8888         8 8888        8 8888 8      'Y8o. 'Y8 '8 8888       .8' 
 ,8'       '8        '8.'8888.' 8888     ,88'   8 8888   '8b.   8 8888         8 8888        8 8 8888           8888   ,d8P  '8b.  ;8.'8888              8888     ,88'   ' 8888     ,88'   8         'Y8o.' '8b.  ;8.'8888   8888   ,d8P  8 8888         8 8888        8 8888 8         'Y8o.'    8888     ,88'  
,8'         '         '8.'8888.  '8888888P'     8 8888     '88. 8 8888         8 8888        8 8 888888888888    'Y88888P'    'Y8888P ,88P'               '8888888P'        '8888888P'     8            'Yo  'Y8888P ,88P'    'Y88888P'   8 888888888888 8 8888        8 8888 8            'Yo     '8888888P'    
`
let ctx
function loadPixels() {
  const img = document.querySelector('#banner'); 
  
  canvas.width = img.width; 
  canvas.height = img.height; 
  
  ctx.drawImage(img, 0, 0); 
  
  const rgba = ctx.getImageData( 
    0, 0, img.width, img.height 
  ).data; 
  // bottom half
  //rgba[]
}

const COUNT_TRAILS = 100

// TODO: add VLC ASCII engine renderer, would be faster start with no
//   GLSL compile, 3 sec load time
let consoleLines = marqueeStr.trim().split('\n')
let consoleWidth = consoleLines[0].length
let marquee
let canvas
let trails = []
function renderMarquee() {
  marquee.innerText = marqueeStr
  ctx = canvas.getContext('2d', {
    alpha: true,
  }); 
  ctx.font = '16px \'Trebuchet MS\', sans-serif';
  for(let i = 0; i < COUNT_TRAILS; i++) {
    trails.push(Math.random() * marqueeStr.length)
  }
}

function renderTrails() {
  let fontWidth = 2 / (window.innerWidth / consoleWidth)
  let lineHeight = marquee.clientHeight / consoleLines.length
  //marquee.style.fontSize = '25.5vw' //fontWidth + 'em' // CSS does this with calc()?
  // PROGRESS 1 RANDOM TRAIL 30 TIMES PER SECOND MIGHT BE TOO SLOW
  let progressIndex = Math.random() * trails.length
  trails[progressIndex] += consoleWidth
  // don't reappear right away?
  if(trails[progressIndex] / consoleWidth > consoleLines.length + 10) {
    trails[progressIndex] = Math.random() * marqueeStr.length
    ctx.fillStyle = 'rgba(34, 34, 255, 1.0)';
    ctx.fillText(marqueeStr[trails[progressIndex] - i * consoleWidth],
      fontWidth * (trails[progressIndex] % consoleWidth),
      lineHeight * i);
  } else {
    for(let i = Math.floor(trails[progressIndex] / consoleWidth) - 1; i > 0; i--) {
      ctx.fillStyle = 'rgba(34, 34, 34, 0.1)';
      ctx.fillText(marqueeStr[trails[progressIndex] - i * consoleWidth],
        fontWidth * (trails[progressIndex] % consoleWidth),
        lineHeight * i);
    }
  }
}

window.addEventListener('load', function () {
  canvas = document.getElementById('canvas'); 
  marquee = document.getElementById('marquee')
  if(marquee) {
    renderMarquee()
    this.setInterval(renderTrails, 1000 / 30)
  }
}, false)




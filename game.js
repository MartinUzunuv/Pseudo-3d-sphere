size = 2
r = 100

function draw() {
  context.fillStyle = 'black'
  context.fillRect(0,0,window.innerWidth,window.innerHeight)
  for(x=window.innerWidth/2-r;x < window.innerWidth/2+r; x+=size){
    for(y=window.innerHeight/2-r;y < window.innerHeight/2+r; y+=size){
      center = (r - Math.sqrt(Math.pow(window.innerWidth/2 - x,2)+Math.pow(window.innerHeight/2 - y,2)))/r
      dist = (r*3 - Math.sqrt(Math.pow(mouseX - x,2)+Math.pow(mouseY - y,2)))/(r*2)
      color = center*dist
      if(dist > 0){
        context.fillStyle = `rgb(${255*color},${255*color},${255*color})`
        context.fillRect(x,y,size,size)
      }
    }
  }
}

function update() {}

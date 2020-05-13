/*
  form-code - Chemistry at Nightclub
  (c) 2020 ../che*r!o CHICAGO, IL
  email cherry.yue.ying@gmail.com

  ♥‿♥ The vibrant nightclub energy is perfect for
  generating romantic chemical reactions ʕ♥ᴥ♥ʔ
*/

total = 200
let xs = []
let ys = []
let yoff = 0

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(color(10, 50, 100))
  for (let i = 0; i < total; i ++){
    xs.push(random(50,width-50))
    ys.push(map(noise(yoff), 0, 1, -50, height+50))
    yoff += 0.4
  }
}

function shortestDist(x, y) {
  strokeWeight(2)
  stroke(color(10, 50, 150))

  distances = []
  for (let i = 0; i < total; i++){
    let distance = dist(x, y, xs[i], ys[i])
    if (distance != 0){
      distances.push([distance,i])
    }
  }
  let small = distances[0][0]
  let item = distances[0][1]
  for (let i = 0; i < distances.length; i++){
    if (distances[i][0] < small){
      small = distances[i][0]
      item = distances[i][1]
    }
  }
  line(x, y, xs[item], ys[item])
}

function draw() {
  background(color(10, 50, 100))
  for (let i = 0; i < total; i ++){
    randomColor = color(random(255),random(255),random(255))
    stroke(randomColor)
    strokeWeight(5)
    randomFill = [randomColor,randomColor,randomColor, 235]
    fill(random(randomFill))
    randomR = [random(width/10),random(width/20),random(width/30),
      random(width/40),random(width/50),random(width/60)]
    let r = random(randomR)
    ellipse(xs[i], ys[i], r)
    shortestDist(xs[i], ys[i])
  }
}

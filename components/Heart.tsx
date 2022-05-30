import Sketch from 'react-p5';

const Heart: React.FC = () => {

let base = window.innerWidth/20;
let alpha = 255;
if(window.innerWidth < 820){
  base = window.innerWidth/10;
  alpha = 100;
}
let off1 = 0.0;
let rot = 0;
let lines = 2;
let colors: any[] = [];
let fr = 30;
let R = 1.5*base;
let noiseR = [0.2*base, 1.2*base];
let breathSize = 3*base;

const setup = (p5: any, parent: any) => {
  p5.createCanvas(8*base, 8*base).parent(parent);
  for(let j = 0; j< lines; j++){
    let c = {R:0,G:0,B:0};
    c.R = p5.random(150,255);
    c.G = p5.random(150,255);
    c.B = p5.random(150,255);
    colors.push(c);
  }
  p5.frameRate(fr);
}

const drTest = (p5:any) => {
  p5.fill(p5.color(255,255,255))
  p5.rect(0,0,p5.width, p5.height)
}

const draw = (p5: any) => {
    //p5.background(50);
    p5.clear();
  
    p5.noFill();
    p5.angleMode(p5.DEGREES)
  
    p5.translate(p5.width/2, p5.height/2);
    p5.rotate(rot*p5.PI*p5.PI/200);
  
  let off2 = 0.0;
  let start = {};
  
  //if(frameCount > ((frameCount % breathSize) - breathSize/10)){
  //  breathSize = breathSize + random(-10,10);
  //}
  
  let breath;
  
  if(p5.frameCount % (breathSize/2) > (breathSize/4)) {
    breath = 1 - (p5.frameCount % (breathSize/4))/(breathSize/4);
  } else {
    breath = (p5.frameCount % (breathSize/4))/(breathSize/4);
  }
  
  if(p5.frameCount % breathSize > (breathSize/2)){
    R -= breath;
  } else {
    R += breath;
  }
  
  for(let j = 0; j < lines; j++){
    let dev = p5.map(p5.noise(j), 0,1, 1.1*base, 2.2*base);
    
    p5.stroke(p5.color(colors[j].R,colors[j].G,colors[j].B, alpha));
    
    let noises = [];
    
    for(let i = 0; i < 360; i++){
      let noiseVal  = p5.noise(off1,off2);
      noises.push(noiseVal);
      
      off2 += 0.02;
    }
    for(let k = 0; k < 5; k++){
      
        p5.beginShape();
      let start = {x:0,y:0};
      for(let i = 0; i < 360; i += 1){
        let r;
        if(i < 180){
          r = R + p5.map(noises[i], 0, 1, noiseR[0]-((dev/2)*k/5), noiseR[1]+(dev*k/5));
        } else {
          let temp = i - 180;
          r = R + p5.map(noises[180 - temp], 0, 1, noiseR[0]-((dev/2)*k/5), noiseR[1]+(dev*k/5));
        }
        const x = r * p5.cos(i);
        const y = r * p5.sin(i);
        if(i === 0){
          start.x = x;
          start.y = y;
        }
        p5.vertex(x,y)
      }
      p5.vertex(start.x, start.y);
      
      p5.endShape();
    }
    for(let i = 0; i < 360; i += 1){
      let dotStart = (noiseR[1]+noiseR[0])/2;
      
      let dots = p5.map(noises[i], 0, 1, -20,  20);
      
        for(let k = 0; k < p5.abs(dots); k++){
          
          let l;
          
          if(dots > 0){
            l =  -5 * k
          } else {
            l = 5 * k
          }
          let r = R + dotStart + l;
          
          const x = r * p5.cos(i);
          const y = r * p5.sin(i);
          
         //beginShape();
          //stroke(color(123,150,230));
          p5.rect(x, y, 0.5, 0.5);
          //endShape();
          
      } 
    }
    off1 += 0.003/lines;
  }
  rot++;
}



    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default Heart;
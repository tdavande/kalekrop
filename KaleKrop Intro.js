setCps(130 / 60 / 4)

samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')

 let arpBuildUp = slider(1615,0,5000)
 let grooveBass =  slider(50,0,5000)
 let euphoria =  slider(3.42,0,10)


const arpeggiator = [
   "{d4 bb3 d3 bb2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   "{d4 bb3 d3 bb2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   ] 

/* 
const arpeggiator = [
   "{eb3 f2 d3 g2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   "{eb3 f2 d3 g2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   ] */

arp: note(pick(arpeggiator, "<0 1 2 3>".slow(2)))
      .sound("supersaw")
      .lpf(arpBuildUp)
      .sustain(euphoria)
      .release(slider(0.1576,0.1,1))
      .attack(0)
      .color("blue red")
      ._pitchwheel()

bassline: note("[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2, bb1]!8").slow(8)
.sound("sawtooth")
.lpf(100)
.color("red blue red blue")
._scope()
//bassline_stripped: note("[eb1 eb2]!8 [f2 f1]!8 [g2 g1]!8 [f2 f1]!4 [bb2 bb1]!4").slow(8)
.sound("square")
.lpf(grooveBass)
.sustain(1)
.gain(1)
.color("blue red")
.spectrum()

DRUMS: stack(
   //s("tech:5").postgain(5).pcurve(2).pdec(1).hpf(75).struct("X!4"),
  
   //s("[~ cp]").bank("KorgDDM110").speed(1).fast(2).postgain(0.5),
  
  //s("breaks165").gain(0.6).loopAt(1).chop(16).fit().postgain(2),
  //s("psr:[2 |12 |24 |25]".fast(4)).struct("x!7 ~ x!3 ~ x!3 ~").postgain(0.5).decay(1).slow(4)
)


         


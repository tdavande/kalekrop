setCps(130 / 60 / 4)

samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')

let buildup = slider(0,0,5000)

const arpeggiator = [
   "{d4 bb3 d3 bb2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   "{d4 bb3 d3 bb2 eb2}%16",
   "{d4 bb3 f3 c3 f2}%16",
   ]

arp: note(pick(arpeggiator, "<0 1 2 3>".slow(2)))
      .sound("supersaw, triangle")
      .lpf(buildup)
      .sustain(buildup)
      .release(0.2)
      .attack(0)

//bassline: note("[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2, bb1]!8").slow(32)
.sound("sawtooth")
.hpf(1)



  
bassline_stripped: note("[eb1 eb2]!8 [f2 f1]!8 [g2 g1]!8 [f2 f1]!4 [bb2 bb1]!4").slow(8 , 8 , 8 )
.sound("square")
.lpf(500)
.sustain(buildup)
.gain(1)

DRUMS: stack(
  //s("tech:5").postgain(5).pcurve(2).pdec(1).hpf(75).struct("X!4"),
  
  //s("[~ cp]").bank("KorgDDM110").speed(1).fast(2).postgain(0.5),
  //s("hh").struct("[x!3 ~!2 x!10]").postgain(0.5).bank('RolandTR808').slow(2),
  //s("~ hh").bank("RolandTR808").room(0.2).speed(0.75).gain(0.5),
  //s("breaks165").gain(0.6).loopAt(1).chop(16).fit().postgain(2),
  s("psr:[2 |12 |24 |25]".fast(4)).struct("x!7 ~ x!3 ~ x!3 ~").postgain(0.5).decay(1).slow(32)
)


         



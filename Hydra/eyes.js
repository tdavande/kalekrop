osc(215, 0.1, 2)
  .modulate(
    osc(2, -0.3, 100)
  )
  .mult(
    voronoi(215, -0.1, 2)
    .pixelate(50, 50)
  )
  .color(0, 1, 0)
  .modulateKaleid(6)
  .rotate(9)
  .diff(
    osc(10, -0.1, 900)
    .color(0, 1, 0)
  )
  .mult(
    shape(900, 0.2, 1)
    .luma()
    .repeatX(10)
    .repeatY(10)
  )
  .modulate(
    gradient([1, 2, 4])
  )
  .out()
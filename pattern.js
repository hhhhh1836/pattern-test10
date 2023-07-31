window.pattern = {
  name: "pattern test",
  author: "h",
  make: (
    tileSize, // Length of the sides of a single square Tile in pixels.
    width, // Width of the playable Board in Tiles (Small: 9, Normal: 16, Large: 23)
    height, // Height of the playable Board in Tiles (Small: 10, Normal: 18, Large: 26)
    pixi, // A reference to pixi.js:6.2.0
    smoothGraphics, // Function that returns a new SmoothGraphics() from @pixi/graphics-smooth:0.0.30
    random // Function returns pseudorandom number between 0 and 1. Seed changes daily.
  ) => {
    const container = new pixi.Container();
    const graphics = new pixi.Graphics();
    for (let x = 1; x <= width; x++) {
      for (let y = 1; y <= height; y++) {
        let bright = Math.floor(128 * (1 + Math.sin(Math.PI * (x + y) / 10)));
        graphics.beginFill(bright * 0x010101);
        graphics.drawRect(x * tileSize, y * tileSize, tileSize, tileSize);
        graphics.endFill();
      }
    }
    container.addChild(graphics);
    return container;
  },
};

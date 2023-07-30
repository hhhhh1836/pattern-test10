window.pattern = {
  name: "Pattern Template",
  author: "boubou",
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
    graphics.beginFill(0xffffff);
    // The following region of the DisplayObject will be rendered for the pattern:
    // {x: tileSize, y: tileSize, width: width * tileSize, height: height * tileSize}
    // Which is why in the following call, 1 is added both to the width and the height)
    graphics.drawRect(
      0,
      0,
      (width / 2 + 1) * tileSize,
      (height + 1) * tileSize
    );
    graphics.endFill();

    container.addChild(graphics);

    const sGraphics = smoothGraphics();
    sGraphics.beginFill(0x808080);
    sGraphics.drawCircle(
      (1 + width * random()) * tileSize,
      (1 + height * random()) * tileSize,
      3 * tileSize
    );
    sGraphics.endFill();

    container.addChild(sGraphics);

    return container;
  },
};

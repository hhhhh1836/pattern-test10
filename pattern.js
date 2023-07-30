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
    let container = new pixi.Container();
    let canvas = document.createElement("CANVAS");
    let ctx = canvas.getContext("2d");
    ctx.width = width * tileSize;
    ctx.height = height * tileSize;
    canvas.width = ctx.width;
    canvas.height = ctx.height;
    let midX = (width * tileSize) / 2;
    let midY = (height * tileSize) / 2;
    let gradient = ctx.createRadialGradient(midX, midY, 0, midX, midY, Math.min(midX, midY));
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.5, "white");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    console.log(canvas);
    let tex = pixi.Texture.from(canvas);
    let sprite = new pixi.Sprite(tex);
    sprite.position.set(tileSize, tileSize);
    sprite.width = width * tileSize;
    sprite.height = height * tileSize;
    container.addChild(sprite);
    return container;
  },
};

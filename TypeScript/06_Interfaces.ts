interface Point {
  x: number;
  y: number;
}

function printCoordUsingInt(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordUsingInt({ x: 45, y: 66 });

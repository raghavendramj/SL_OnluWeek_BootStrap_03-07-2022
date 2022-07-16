type PointType = {
  x: number;
  y: number;
};

function printCoordinates(pt: PointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoordinates({ x: 100, y: 100 });

type ID = number | string;
type UserInputSanitizedString = string;
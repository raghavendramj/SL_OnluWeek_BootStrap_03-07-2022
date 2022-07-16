class Point {
  x: number;
  y: number;

  //Defaults -> 0, 0
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
let pt = new Point(12, 14);
console.log("Before Scaling : ", pt);
pt.scale(3);
console.log("After Scaling : ", pt);
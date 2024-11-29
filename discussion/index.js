let studentNumbers = ["2020-1923", "2020-1924", "2020-1925"];

console.log(studentNumbers);

let fullname = "Raphael Alampay";
console.log(fullname.length);

console.log(studentNumbers.length);

student = studentNumbers.length - 1;

console.log(student);

studentNumbers.length--;

console.log(studentNumbers.length);

console.log(fullname.length--);

let theBeatles = ["John", "Paul", "Ringo", "George"];
theBeatles.length++;
console.log(theBeatles);
console.log(theBeatles[1]);

let lastElementIndex = theBeatles.length - 1;
console.log(lastElementIndex);

for (i = 0; i < lastElementIndex; i++) {
  console.log(theBeatles[i]);
}

let newArr = [];

newArr[0] = "Cloud Strife";

newArr[1] = "Tifa Lockhart";

console.log(newArr);

//newArr[newArr.length - 1] = "Aerith Gainsborough";

newArr[newArr.length] = "Aerith Gainsborough";
console.log(newArr);

let chessBoard = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

let test = chessBoard[0][0];
console.log(test);

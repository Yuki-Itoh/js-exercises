const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. `math`の全員の合計点
let mathSum = 0;
data.forEach((student) => {
  mathSum += student.math;
});
console.log("`math`の全員の合計点:", mathSum); // => 530

// 2. クラスAの`chemistry`の平均点
const classAStudents = data.filter((student) => {
  return student.class === "A";
});

let chemistrySum = 0;
classAStudents.forEach((student) => {
  chemistrySum += student.chemistry;
});
console.log(
  "クラスAの`chemistry`の平均点:",
  chemistrySum / classAStudents.length // => 45
);

// 3. 3科目合計点のクラスC内での平均点
const classCStudents = data.filter((student) => {
  return student.class === "C";
});

let totalScore = 0;
classCStudents.forEach((student) => {
  totalScore += student.math + student.chemistry + student.geography;
});
console.log(
  "3科目合計点のクラスC内での平均点:",
  totalScore / classCStudents.length // => 176.66・・・
);

// 4. 3科目合計点が最も高い人の`name`
const topStudent = data
  .map((student) => {
    student.totalScore = student.math + student.chemistry + student.geography;
    return student;
  })
  .sort((a, b) => {
    return b.totalScore - a.totalScore;
  })[0];
console.log("3科目合計点が最も高い人の`name`:", topStudent.name); // => Frank

// 5. 全体の`geography`の標準偏差
const geographyScores = data.map((student) => {
  return student.geography;
});
const geographySum = geographyScores.reduce((p, c) => {
  return p + c;
});
const average = geographySum / geographyScores.length;
let deviationSum = 0;
geographyScores.forEach((score) => {
  deviationSum += (score - average) ** 2;
});
const standardDeviation = Math.sqrt(deviationSum / geographyScores.length);
console.log("全体の`geography`の標準偏差:", standardDeviation); // => 22.33・・・

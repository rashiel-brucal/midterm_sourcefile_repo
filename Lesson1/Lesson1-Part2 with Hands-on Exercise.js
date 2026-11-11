'use strict';

console.log('------- STUDENT REPORT -------');

// ================================================================
// PART A: STUDENT CLASS
// ================================================================

class Student {

  // Store the student's name and scores.
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  // Calculate the student's average.
  getAverage() {
    let total = 0;

    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }

    return total / this.scores.length;
  }

  // Determine the student's letter grade.
  getLetterGrade() {
    let average = this.getAverage();

    if (average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B';
    } else if (average >= 70) {
      return 'C';
    } else if (average >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
}

// ================================================================
// PART B: ANALYZE CLASS FUNCTION
// ================================================================

function analyzeClass(students) {

  let classTotal = 0;
  let topStudent = '';
  let highestAverage = 0;

  // Loop through each student.
  for (let i = 0; i < students.length; i++) {

    let student = students[i];
    let average = student.getAverage();
    let grade = student.getLetterGrade();

    // Display student information.
    console.log(
      `${student.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
    );

    // Add the average to the class total.
    classTotal += average;

    // Find the student with the highest average.
    if (average > highestAverage) {
      highestAverage = average;
      topStudent = student.name;
    }
  }

  // Calculate the class average.
  let classAverage = classTotal / students.length;

  // Display the final summary.
  console.log('-----------------------------------');
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`);
}

// ================================================================
// PART C: TEST DATA
// ================================================================

const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

// Convert the objects into Student instances.
const students = [];

for (let i = 0; i < studentData.length; i++) {
  students.push(
    new Student(studentData[i].name, studentData[i].scores)
  );
}

// Run the analyzer.
analyzeClass(students);

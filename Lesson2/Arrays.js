'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);


// =====================================================
// PART A: ORIGINAL RECORDS
// =====================================================

console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}


// =====================================================
// PART B: ADD NEW STUDENTS
// =====================================================

console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Display updated arrays and number of students.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);


// =====================================================
// PART C: REMOVE AND REPLACE RECORDS
// =====================================================

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first name and score.
studentNames.shift();
studentScores.shift();

// Remove the last name and score.
studentNames.pop();
studentScores.pop();

// Find Daniel's index.
const danielIndex = studentNames.indexOf('Daniel');

console.log('Daniel Index:', danielIndex);

// Remove Daniel and Daniel's score.
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Insert Grace and 82 at index 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Display the updated arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);


// =====================================================
// PART D: CLASS STATISTICS
// =====================================================

console.log('\nPART D: CLASS STATISTICS');

// Calculate the total score.
let totalScore = 0;

for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];
}

// Calculate the average score.
const averageScore = totalScore / studentScores.length;

// Find the highest and lowest scores.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {

  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }

  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }

}

// Display all statistics.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);


// =====================================================
// PART E: PASSING-SCORE ANALYSIS
// =====================================================

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

// Use filter to obtain passing scores.
const passingScores = studentScores.filter(function(score) {
  return score >= passingScore;
});

// Use map to create Passed or Failed statuses.
const statuses = studentScores.map(function(score) {

  if (score >= passingScore) {
    return 'Passed';
  } else {
    return 'Failed';
  }

});

// Use some to check if at least one student failed.
const atLeastOneFailed = studentScores.some(function(score) {
  return score < passingScore;
});

// Use every to check if all students passed.
const allStudentsPassed = studentScores.every(function(score) {
  return score >= passingScore;
});

// Display all results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);


// =====================================================
// PART F: SORT AND SEARCH
// =====================================================

console.log('\nPART F: SORT AND SEARCH');

// Copy the scores using Array.from.
const sortedScores = Array.from(studentScores);

// Sort the copied array from highest to lowest.
sortedScores.sort((a, b) => b - a);

// Search for 91.
const contains91 = sortedScores.includes(91);
const indexOf91 = sortedScores.indexOf(91);

// Display the results.
console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);


// =====================================================
// PART G: TWO-DIMENSIONAL ARRAY
// =====================================================

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Use nested loops to process every row and column.
for (let i = 0; i < activityScores.length; i++) {

  let activityTotal = 0;

  // Process each activity score in the current row.
  for (let j = 0; j < activityScores[i].length; j++) {

    console.log(
      originalNames[i] +
      ' Activity ' +
      (j + 1) +
      ': ' +
      activityScores[i][j]
    );

    activityTotal += activityScores[i][j];
  }

  // Calculate the student's activity average.
  const activityAverage =
    activityTotal / activityScores[i].length;

  // Store the average in activityAverages.
  activityAverages.push(activityAverage);

  // Display the student's average.
  console.log(
    originalNames[i] +
    "'s activity average: " +
    activityAverage.toFixed(2)
  );
}

// Display all activity averages.
console.log('Activity Averages:', activityAverages);


// =====================================================
// PART H: TEXT SUMMARY
// =====================================================

console.log('\nPART H: TEXT SUMMARY');

// Use join to display names separated by " | ".
console.log('Students: ' + studentNames.join(' | '));
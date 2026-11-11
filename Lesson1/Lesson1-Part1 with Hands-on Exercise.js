// Student Scores Program

const scores = [85, 72, 91, 64, 78];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);

    // Calculate total
    total += scores[i];

    // Find highest score
    if (scores[i] > highest) {
        highest = scores[i];
    }

    // Find lowest score
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

console.log();

for (let i = 0; i < scores.length; i++) {
    let grade;

    // Determine grade
    if (scores[i] >= 90) {
        grade = "Excellent";
    } else if (scores[i] >= 80) {
        grade = "Very Good";
    } else if (scores[i] >= 75) {
        grade = "Good";
    } else {
        grade = "Failed";
    }

    // Determine Passed or Failed
    let status;

    if (scores[i] >= 75) {
        status = "Passed";
        passed++;
    } else {
        status = "Failed";
        failed++;
    }

    console.log(
        "Student " + (i + 1) + ": " +
        scores[i] + " - " + grade + " - " + status
    );
}

// Calculate average
let average = total / scores.length;

console.log();
console.log("Total Score: " + total);
console.log("Average Score: " + Math.round(average));
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
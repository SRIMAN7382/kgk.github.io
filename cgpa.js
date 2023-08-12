let totalCredits = 0;
let totalGradePoints = 0;

function calculateCGPA() {
    const subjectCreditsInput = document.getElementById('subject-credits');
    const gradePointInput = document.getElementById('grade-point');
    const cgpaSpan = document.getElementById('cgpa');

    const subjectCredits = parseFloat(subjectCreditsInput.value);
    const gradePoint = parseFloat(gradePointInput.value);

    if (!isNaN(subjectCredits) && !isNaN(gradePoint) && gradePoint >= 0 && gradePoint <= 10.0) {
        totalCredits += subjectCredits;
        totalGradePoints += subjectCredits * gradePoint;

        const cgpa = (totalGradePoints / totalCredits).toFixed(5);
        cgpaSpan.textContent = cgpa;
    }

    subjectCreditsInput.value = '';
    gradePointInput.value = '';
}

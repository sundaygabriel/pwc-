const studentsScores = [80, 90, 70, 80, 90];
const newStudentScore = studentsScores.map(function(newScore){
    return newScore * 2;
});

console.log("New student score :" + newStudentScore);
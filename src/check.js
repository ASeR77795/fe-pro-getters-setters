import { school } from './index.js';
console.log(school.aGradeStudents); // 'Ivan'
console.log(school.bGradeStudents); // 'Eugene'
console.log(school.cGradeStudents); // 'Maria, Dmytro, Anna'
console.log(school.dGradeStudents); //'Anton, Olha, Bohdan'

//   get() {
//     const scores = Object.values(school.students).filter((student) => {
//       return student.averageGrade >= 90 && student.averageGrade <= 100;
//     });
//     const names = scores.map((item) => {
//       return item.name;
//     });
//     const result = names.join(', ');
//     return result;
//   },
// },

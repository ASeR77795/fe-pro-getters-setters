function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    enumerable: true,
    get() {
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },
  });
}

export const school = {
  students: {
    0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
    1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
    2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
    3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
    4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
    5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
    6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
    7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
  },
};
Object.defineProperties(school, {
  aGradeStudents: {
    get() {
      return Object.values(this.students)
        .filter(
          (student) => student.averageGrade >= 90 && student.averageGrade <= 100
        )
        .map((item) => item.name)
        .join(', ');
    },
  },
  bGradeStudents: {
    get() {
      return Object.values(this.students)
        .filter(
          (student) => student.averageGrade >= 75 && student.averageGrade <= 89
        )
        .map((item) => item.name)
        .join(', ');
    },
  },
  cGradeStudents: {
    get() {
      return Object.values(this.students)
        .filter(
          (student) => student.averageGrade <= 75 && student.averageGrade >= 60
        )
        .map((item) => item.name)
        .join(', ');
    },
  },
  dGradeStudents: {
    get() {
      return Object.values(this.students)
        .filter(
          (student) => student.averageGrade <= 59 && student.averageGrade >= 0
        )
        .map((item) => item.name)
        .join(', ');
    },
  },
});
// Object.defineProperty(school, 'aGradeStudents', {
//   enumerable: true,
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
// });
// Object.defineProperty(school, 'bGradeStudents', {
//   get() {
//     return Object.values(this.students)
//       .filter(
//         (student) => student.averageGrade >= 75 && student.averageGrade <= 89
//       )
//       .map((item) => item.name)
//       .join(', ');
//   },
// });
// Object.defineProperty(school, 'cGradeStudents', {
//   get() {
//     return Object.values(this.students)
//       .filter(
//         (student) => student.averageGrade <= 75 && student.averageGrade >= 60
//       )
//       .map((item) => item.name)
//       .join(', ');
//   },
// });
// Object.defineProperty(school, 'dGradeStudents', {
//   get() {
//     return Object.values(this.students)
//       .filter(
//         (student) => student.averageGrade <= 59 && student.averageGrade >= 0
//       )
//       .map((item) => item.name)
//       .join(', ');
//   },
// });

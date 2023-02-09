function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    enumerable: true,
    configurable: true,
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
Object.defineProperty(school, 'aGradeStudents', {
  enumerable: true,
  configurable: true,
  get() {
    let result = '';
    for (let i = 0; i < Object.values(school.students).length; i++) {
      if (school.students[i].averageGrade >= 90) {
        result = `${result}${school.students[i].name},`;
      }
    }
    return result;
  },
});
Object.defineProperty(school, 'bGradeStudents', {
  enumerable: true,
  configurable: true,
  get() {
    let result = '';
    for (let i = 0; i < Object.values(school.students).length; i++) {
      if (
        school.students[i].averageGrade <= 89 &&
        school.students[i].averageGrade >= 75
      ) {
        result = `${result}${school.students[i].name},`;
      }
    }
    return result;
  },
});
Object.defineProperty(school, 'cGradeStudents', {
  enumerable: true,
  configurable: true,
  get() {
    let result = '';
    for (let i = 0; i < Object.values(school.students).length; i++) {
      if (
        school.students[i].averageGrade <= 75 &&
        school.students[i].averageGrade >= 60
      ) {
        result = `${result}${school.students[i].name},`;
      }
    }
    return result;
  },
});
Object.defineProperty(school, 'dGradeStudents', {
  enumerable: true,
  configurable: true,
  get() {
    let result = '';
    for (let i = 0; i < Object.values(school.students).length; i++) {
      if (school.students[i].averageGrade <= 59) {
        result = `${result}${school.students[i].name},`;
      }
    }
    return result;
  },
});

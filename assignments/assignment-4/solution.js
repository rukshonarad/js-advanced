class Person {
    constructor(name) {
        this.name = name;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return this.instanceCount;
    }
}

class Student extends Person {
    static instanceCount = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook();
        Student.instanceCount++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name} and I am a student.`);
    }

    getGradeBook() {
        return this.gradeBook;
    }

    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return "School shirt and pants";
    }

    getRole() {
        return "Student";
    }

    static countInstances() {
        return Student.instanceCount;
    }
}

class Teacher extends Person {
    static instanceCount = 0;
    subject;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.incrementInstanceCount();
    }

    introduceYourself() {
        console.log(
            `Hello, my name is ${this.name} and I teach ${this.subject}.`
        );
    }

    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        return "Teacher";
    }

    static incrementInstanceCount() {
        Teacher.instanceCount++;
    }

    static countInstances() {
        return Teacher.instanceCount;
    }
}

class GradeBook {
    constructor() {
        this.grades = {};
    }
    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }
    getGrades(subject) {
        if (this.grades[subject]) {
            return this.grades[subject];
        } else {
            return [];
        }
    }
    getAllGrades() {
        return this.grades;
    }
    static format() {
        return this.grades;
    }
}
class School {
    constructor(name) {
        this.name = name;
    }
}

// const school = new School("Example School");

const student1 = new Student("Alice");
const student2 = new Student("Bob");

console.log(student1);
// const teacher1 = new Teacher("Mr. Smith", "Math");
// const teacher2 = new Teacher("Mrs. Johnson", "English");

// teacher2.teach(student2, 92);

// console.log(student1.getGrade("Math")); // Output: [90, 78]
// console.log(student2.getGrade("Math")); // Output: [85, 92]

// console.log(teacher1.getStudentGrade(student1)); // Output: [90, 85]
// console.log(teacher2.getStudentGrade(student1)); // Output: [78, 92]

// console.log(student1.schoolUniform()); // Output: "School shirt and pants"
// console.log(teacher1.dressCode()); // Output: "Formal shirt and pants"

// console.log(Student.countInstances()); // Output: 2
// console.log(Teacher.countInstances()); // Output: 2

// // const person1 = new Person("Alice");
// // const person2 = new Person("Bob"); d

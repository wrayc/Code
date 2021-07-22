function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

console.log([].__proto__)
const stu = new Student('xiaoming',6)
console.log(Object.getPrototypeOf(stu))



function filterStudents(students, query) {
    return students.filter(student =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.major.toLowerCase().includes(query.toLowerCase()) ||
        student.gender.toLowerCase().includes(query.toLowerCase())
    );
}

const students = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20,
        gender: "Nam",
        major: "Công nghệ thông tin",
        gpa: 3.5
    },
    {
        id: 2,
        name: "Trần Thị Bích",
        age: 21,
        gender: "Nữ",
        major: "Kế toán",
        gpa: 3.8
    },
    {
        id: 3,
        name: "Lê Hoàng Minh",
        age: 22,
        gender: "Nam",
        major: "Khoa học dữ liệu",
        gpa: 3.2
    },
    {
        id: 4,
        name: "Phạm Thùy Dương",
        age: 20,
        gender: "Nữ",
        major: "Marketing",
        gpa: 3.9
    },
    {
        id: 5,
        name: "Hoàng Quốc Bảo",
        age: 23,
        gender: "Nam",
        major: "Kỹ thuật phần mềm",
        gpa: 3.6
    }
];
console.log(filterStudents(students, "nam"));


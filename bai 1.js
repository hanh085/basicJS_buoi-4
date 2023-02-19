// Bài tập 1: Cho mảng sinh viên gồm các thông tin như sau:
const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];

// Tạo menu chương trình như sau:
// --------------------------------------
// == QUẢN LÝ SINH VIÊN ==
// 1. Xem danh sách sinh viên
// 2. Thêm sinh viên
// 3. Sửa sinh viên
// 4. Xóa sinh viên
// --------------------------------------
// - Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
// - Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
// - Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
// - Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.



// kiểm tra số dương
function Check(value) {
    if (value === '' || value === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (isNaN(value)) {
        console.log('giá trị ko là định dạng số');
        return false;
    }
    else if (value < 0) {
        console.log('giá trị không được < 0');
        return false;
    }
    return true;
}

// print infs of a student
function Print_student_inf(student) {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Address: ${student.address}`);
}
function Print_List(students) {
    for (let i = 0; i < students.length; i++) {
        console.log('%d .', i);
        Print_student_inf(students[i]);
    }
}

function Student(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
}
function Add_1_student(students, newStudent) {
    students.push(newStudent);
}
// kiểm tra id đã tồn tại không 
function Check_ID(students, newID) {
    for (let i = 0; i < students.length; i++) {
        if (newID == students[i].id) {
            console.log('ID này đã tồn tại');
            return true;
        }
    }
    return false;
}

function Replace_Student(students, newStudent) {
    for (let i = 0; i < students.length; i++) {
        if (newStudent.id === students[i].id) {
            students[i].name = newStudent.name;
            students[i].address = newStudent.address;
        }
    }
}

function Delete_Student(students, delID) {
    for (let i = 0; i < students.length; i++) {
        if (delID === students[i].id) {
            students.splice(i, 1);
            return;
        }
    }
}


var choose = 1;
var menu = '  __ MENU __'
    + '\n1. Xem danh sách sinh viên'
    + '\n2. Thêm sinh viên'
    + '\n3. Sửa sinh viên'
    + '\n4. Xóa sinh viên'
    + '\n0. Thoát'
    + '\n   Nhập lựa chọn: ';

while (choose !== 0) {
    // Nhập lựa chọn 
    choose = prompt(menu);
    while (Check(choose) == false) {
        choose = prompt(menu);
    }
    choose = Number(choose);


    switch (choose) {
        case 1:
            console.log('1. Xem danh sách sinh viên');
            Print_List(students);
            break;
        case 2:
            console.log('2. Thêm sinh viên');

            var id = prompt('Nhập ID học sinh mới: ');
            while (Check(id) == false || Check_ID(students, id) === true) {
                id = prompt('Nhập ID học sinh mới: ');
            }
            id = Number(id);

            var Name = prompt('Nhập tên học sinh mới: ');
            var address = prompt('Nhập địa chỉ học sinh mới: ');

            var newStudent = new Student(id, Name, address);
            Add_1_student(students, newStudent);
            confirm('Thêm thành công sinh viên mới');
            break;
        case 3:
            console.log('3. Sửa sinh viên');
            var id = prompt('Nhập ID học sinh cần sửa: ');
            while (Check(id) == false) {
                id = prompt('Nhập ID học sinh cần sửa: ');
            }
            id = Number(id);

            if (Check_ID(students, id) === false) {
                console.log(typeof (id));
                confirm('Không tồn tại ID này');
            }
            else {
                //id = Number(id);
                var Name = prompt('Nhập tên học sinh : ');
                var address = prompt('Nhập địa chỉ học sinh : ');
                var newStudent = new Student(id, Name, address);
                Replace_Student(students, newStudent);
            }
            break;
        case 4:

            console.log('4. Xóa sinh viên');
            var id = prompt('Nhập ID học sinh cần xóa: ');
            while (Check(id) == false) {
                id = prompt('Nhập ID học sinh cần xóa: ');
            }
            id = Number(id);

            if (Check_ID(students, id) === false) {
                console.log(typeof (id));
                confirm('Không tồn tại ID này');
            }
            else {
                Delete_Student(students, id);
            }
            break;
        case 0:
            break;

    }

}
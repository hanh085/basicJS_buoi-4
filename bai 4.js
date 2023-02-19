// Bài tập 4: Cho danh sách các quân bài như sau:
const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]

// Tạo menu như sau:
// ---------------------------------------
// 1. Nhập 1 quân bài
// 2. Nhập mảng các quân bài
// 3. Sắp xếp tăng dần
// 4. Sắp xếp giảm dần
// 5. Xuất dữ liệu
// 6. Thoát
// ---------------------------------------

// - Khi chọn 1: Nhập 1 quân bài và thêm vào danh sách
// - Khi chọn 2: Nhập mảng các quân bài và thêm vào danh sách
// - Khi chọn 3: Sắp xếp các quân bài theo hệ số tăng dần
// - Khi chọn 4: Sắp xếp các quân bài theo hệ số giảm dần
// - Khi chọn 5: Hiển thị danh sách các quân bài
// - Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"


function Insertion_Sort(ds) // Sắp xếp các quân bài theo hệ số tăng dần
{
    var current;
    for (let i = 1; i < ds.length; i++) {
        current = ds[i];
        var j = i - 1;
        while (j >= 0 && ds[j].exp > current.exp) {
            ds[j + 1] = ds[j];
            j--;
        }
        ds[j + 1] = current;
    }
}
function Insertion_Sort_2(ds) // Sắp xếp các quân bài theo hệ số giảm dần
{
    var current;
    for (let i = 1; i < ds.length; i++) {
        current = ds[i];
        var j = i - 1;
        while (j >= 0 && ds[j].exp < current.exp) {
            ds[j + 1] = ds[j];
            j--;
        }
        ds[j + 1] = current;
    }
}


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
function Check_ID(list, id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            console.log('ID này tồn tại');
            return true;
        }
    }
    return false;
}
function Check_Name(name) {
    if (name === '' || name === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (typeof (name) != 'string') {
        console.log('giá trị ko là định dạng chuỗi');
        return false;
    }
    return true;
}
function Check_exp(exp) {
    if (exp < 1 || exp > 13) {
        return false;
    }
    return true;
}
function Check_point(point) {
    if (point < 1 || point > 4) {
        return false;
    }
    return true;
}


function QuanBai(id, name, exp, point) {
    this.name = name;
    this.id = id;
    this.exp = exp;
    this.point = point;
}
function Them_1_quanBai(ds) {
    var id = prompt('Nhập ID: ');
    while (Check(id) == false || Check_ID(danhSachQuanBai, id) === true) {
        id = prompt('Nhập ID: ');
    }
    id = Number(id);

    var Name = prompt('Nhập tên : ');
    while (Check_Name(Name) == false) {
        Name = prompt('Nhập tên : ');
    }

    var exp = prompt('Nhập hệ số quân bài (1-13): ');
    while (Check(exp) == false || Check_exp(exp) == false) {
        exp = prompt('Nhập hệ số quân bài (1-13): ');
    }
    exp = Number(exp);

    var point = prompt('Nhập điểm (1-4):');
    while (Check(point) == false || Check_point(point) == false) {
        point = prompt('Nhập điểm (1-4):');
    }
    point = Number(point);


    var qBai = new QuanBai(id, Name, exp, point);
    ds.push(qBai);
}


function print_quanBai(qbai) {
    console.log(`ID: ${qbai.id}`);
    console.log(`Tên: ${qbai.name}`);
    console.log(`Hệ số: ${qbai.exp}`);
    console.log(`Điểm: ${qbai.point}`);
}
function print_DS_quanBai(ds) {
    for (let i = 0; i < ds.length; i++) {
        print_quanBai(ds[i]);
    }
}




var menu = '  __ MENU __'
    + '\n1. Nhập 1 quân bài'
    + '\n2. Nhập mảng các quân bài'
    + '\n3. Sắp xếp tăng dần'
    + '\n4. Sắp xếp giảm dần'
    + '\n5. Xuất dữ liệu'
    + '\n6. Thoát'
    + '\n   Nhập lựa chọn: ';
var choose = 1;

while (choose !== 6) {
    // Nhập lựa chọn 
    choose = prompt(menu);
    while (Check(choose) == false) {
        choose = prompt(menu);
    }
    choose = Number(choose);

    switch (choose) {
        case 1:
            console.log('1. Nhập 1 quân bài');
            Them_1_quanBai(danhSachQuanBai);
            break;

        case 2:
            console.log('2. Nhập mảng các quân bài');

            var n = prompt('Nhập số lượng quân bài cần thêm vào: ');
            while (Check(n) == false) {
                n = prompt('Nhập số lượng quân bài cần thêm vào: ');
            }
            for (let i = 0; i < n; i++) {
                Them_1_quanBai(danhSachQuanBai);
            }
            break;

        case 3:
            console.log('3. Sắp xếp tăng dần');  // Sắp xếp các quân bài theo HỆ SỐ tăng dần
            Insertion_Sort(danhSachQuanBai);
            break;

        case 4:
            console.log('4. Sắp xếp giảm dần');  // Sắp xếp các quân bài theo HỆ SỐ tăng dần
            Insertion_Sort_2(danhSachQuanBai);
            break;

        case 5:
            console.log('5. Xuất dữ liệu ');  // Sắp xếp các quân bài theo HỆ SỐ tăng dần
            print_DS_quanBai(danhSachQuanBai);
            break;

        case 6:
            console.log('"Goodbye!"');
            break;
    }
}
// Bài tập 5: Cho mảng sinh viên gồm các thông tin như sau:

const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];

// - Viết chương trình (sử dụng function, vòng lặp for, switch...case) để xử lý các công việc sau:
// 1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
// 2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
// 3. Lọc ra các sinh viên xếp loại giỏi và in ra
// 4. Tìm 1 sinh viên xếp loại giỏi
// 5. Cộng cho mỗi sinh viên 1 điểm toán
// 6. Thêm thuộc tính tổng điểm 3 môn
// 7. Tính tổng điểm của các sinh viên
// 8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)
// 9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần

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

function diemTrungBinh(sv) // tính điểm trung bình của 1 học sinh
{
    var x = (sv.toan + sv.ly + sv.hoa) / 3;
    x = x.toFixed(2);
    return x;
}
function ktra_1_sinhVien_tren_trung_binh(sv) // ktra 1 sinh viên có điểm trung bình > 5
{
    if (diemTrungBinh(sv) > 5) {
        return true;
    }
    return false;
}
function ktra_CaLop_tren_trung_binh(ds) // ktra cả lớp có điểm trung bình > 5
{
    for (let i = 0; i < ds.length; i++) {
        if (ktra_1_sinhVien_tren_trung_binh(ds[i]) == false) {
            return false;
        }
    }
    return true;
}


function ktra_1_sinhVien_Gioi(sv) // ktra 1 sinh viên có điểm các môn >= 8
{
    if (sv.toan < 8 || sv.ly < 8 || sv.hoa < 8) {
        return false;
    }
    return true;
}
function SL_sv_gioi(ds) {
    var count = 0;
    for (let i = 0; i < ds.length; i++) {
        if (ktra_1_sinhVien_Gioi(ds[i]) == true) {
            count++;
        }
    }
    return count;
}



function print_1sv(sv) {
    console.log(`ID: ${sv.id}`);
    console.log(`Name: ${sv.name}`);
    console.log(`Toan: ${sv.toan} , Ly: ${sv.ly} , Hoa: ${sv.hoa}`);
}
function print_dsSinhVien(ds) {
    for (let i = 0; i < ds.length; i++) {
        print_1sv(ds[i]);
    }
}



function SinhVien(id, name, toan, ly, hoa) //constructor tạo sv mới 
{
    this.id = id;
    this.name = name;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
}

function filter_good_students(ds) {
    var temp = [];
    for (let i = 0; i < ds.length; i++) {
        if (ktra_1_sinhVien_Gioi(ds[i]) == true) {
            temp.push(ds[i]);
        }
    }
    return temp;
}

function Cong_1diem_Toan(ds) {
    for (let i = 0; i < ds.length; i++) {

        if (ds[i].toan < 10) {
            ds[i].toan += 1;
        }
    }
}

function Them_property_TongDiem3Mon(ds) {
    for (let i = 0; i < ds.length; i++) {
        ds[i].sumGrades = ds[i].toan + ds[i].ly + ds[i].hoa;
    }
}

function TongDiemCacSV(ds) {
    var sum = 0;
    for (let i = 0; i < ds.length; i++) {
        sum += ds[i].sumGrades;
    }
    return sum;
}

function Insertion_Sort(ds) {
    var current;
    for (let i = 1; i < ds.length; i++) {
        current = ds[i];
        var j = i - 1;
        while (j >= 0 && ds[j].sumGrades > current.sumGrades) {
            ds[j + 1] = ds[j];
            j--;
        }
        ds[j + 1] = current;
    }
}




var menu = `   ___ MENU ___
1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
3. Lọc ra các sinh viên xếp loại giỏi và in ra
4. Tìm 1 sinh viên xếp loại giỏi
5. Cộng cho mỗi sinh viên 1 điểm toán
6. Thêm thuộc tính tổng điểm 3 môn
7. Tính tổng điểm của các sinh viên
8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
0. Thoát
    Nhập lựa chọn: `;
var choose = 1;

while (choose !== 0) {
    // Nhập lựa chọn 
    choose = prompt(menu);
    while (Check(choose) == false) {
        choose = prompt(menu);
    }
    choose = Number(choose);

    switch (choose) {
        case 1:
            console.log('Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?');
            if (ktra_CaLop_tren_trung_binh(students) == true) {
                console.log('TRUE');
            }
            else console.log('FALSE');
            break;
        case 2:
            console.log('2. Kiểm tra xem có sinh viên nào xếp loại giỏi không?');
            if (SL_sv_gioi(students) > 0) {
                console.log(`Có ${SL_sv_gioi(students)} học sinh giỏi`);
            }
            else console.log('Không có HS giỏi nào');
            break;
        case 3:
            console.log('3. Lọc ra các sinh viên xếp loại giỏi và in ra');
            var dssvGioi = filter_good_students(students);
            print_dsSinhVien(dssvGioi);
            break;
        case 4:
            console.log('4. Tìm 1 sinh viên xếp loại giỏi');
            var dssvGioi = filter_good_students(students);

            print_1sv(dssvGioi[0]);
            break;
        case 5:
            console.log('5. Cộng cho mỗi sinh viên 1 điểm toán');
            Cong_1diem_Toan(students);
            break;
        case 6:
            console.log('6. Thêm thuộc tính tổng điểm 3 môn');
            Them_property_TongDiem3Mon(students);
            break;
        case 7:
            console.log('7. Tính tổng điểm của các sinh viên');
            console.log(`Tổng điểm các sinh viên: ${TongDiemCacSV(students)}`);
            break;
        case 8:
            console.log('8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)')
            for (let i = 0; i < students.length; i++) {
                console.log(`${students[i].name} _ ${diemTrungBinh(students[i])}`);
            }
        case 9:
            console.log('9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần')
            Insertion_Sort(students);
            print_dsSinhVien(students);
            break;
        case 0:
            console.log('"Goodbye!"');
            break;
    }
}

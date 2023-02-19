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

var dssvGioi = dsSinhVien_Gioi(students); 
print_dsSinhVien(dssvGioi); 

function diemTrungBinh(sv) // tính điểm trung bình của 1 học sinh
{
    var x = (sv.toan + sv.ly + sv.hoa)/3; 
    x = x.toFixed(2); 
    return x; 
}
function ktra_1_sinhVien_tren_trung_binh(sv) // ktra 1 sinh viên có điểm trung bình > 5
{
    if (diemTrungBinh(sv) > 5)
    {
        return true; 
    }
    return false; 
}
function ktra_CaLop_tren_trung_binh(ds) // ktra cả lớp có điểm trung bình > 5
{
    for (let i=0;i <ds.length; i++)
    {
        if (ktra_1_sinhVien_tren_trung_binh(ds[i]) == false)
        {
            return false; 
        }
    }
    return true; 
}


function ktra_1sv_gioi(sv)
{
    if (sv.toan<8 || sv.ly<8 || sv.hoa<8)
    {
        return false; 
    }
    return true; 
}


function print_1sv(sv)
{
    console.log(`ID: ${sv.id}`); 
    console.log(`Name: ${sv.name}`); 
    console.log(`Toan: ${sv.toan} , Ly: ${sv.ly} , Hoa: ${sv.hoa}`);  
}
function print_dsSinhVien(ds)
{
    for (let i=0;i <ds.length; i++)
    {
        print_1sv(ds[i]); 
    }
}
function print_sinhVien_Gioi(ds)
{
    for (let i=0;i <ds.length; i++)
    {
        if (ktra_1sv_gioi(ds[i]) == true)
        {
            print_1sv(ds[i]); 
        }
    }
}

function SinhVien(id, name, toan, ly, hoa)
{
    this.id = id; 
    this.name = name; 
    this.toan = toan; 
    this.ly = ly; 
    this.hoa = hoa; 
}
function dsSinhVien_Gioi(ds) // return danh sách các sinh viên giỏi
{
    var ds2; 
    for (let i=0;i <ds.length; i++)
    {
        if (ktra_1sv_gioi(ds[i]) == true)
        {
            var id = ds[i].id; 
            var name = ds[i].name; 
            var toan = ds[i].toan; 
            var ly = ds[i].ly; 
            var hoa = ds[i].hoa; 
            var newStudent = new SinhVien(id, name, toan, ly, hoa); 
            ds2.push(newStudent); 
        }
    }
    return ds2; 
}
function tim_1sv_gioi(dssvGioi) // return 1 sv GIỏi bất kỳ
{
    var idx = Math.floor(Math.random()*dssvGioi.length); 
    return dssvGioi(idx); 
}


function Cong_1d_Toan(ds) // Cộng cho mỗi sinh viên 1 điểm toán
{
    for (let i=0;i <ds.length; i++)
    {
        ds[i].toan += 1; 
    }
}


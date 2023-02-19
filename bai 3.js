// Bài tập 3: Cho danh sách các đội bóng tham dự World Cup như sau:
const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]

// Tạo menu như sau:
// ---------------------------------------
// 1. Nhập dữ liệu
// 2. Xuất dữ liệu
// 3. Tìm thông tin
// 4. Xóa thông tin đội bóng
// 5. Thoát
// ---------------------------------------

// - Khi chọn 1: Nhập đội bóng tham gia World Cup.
// - Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
// - Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
// - Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
// - Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"


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

function Team(id, ten, huanLuyenVien, soLanVoDich) {
    this.id = id;
    this.ten = ten;
    this.huanLuyenVien = huanLuyenVien;
    this.soLanVoDich = soLanVoDich;
}
function add_a_team(list, team) {
    list.push(team);
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


function print_infs_of_team(team) {
    console.log(`ID: ${team.id}`);
    console.log(`Tên đội: ${team.ten}`);
    console.log(`HLV: ${team.huanLuyenVien}`);
    console.log(`Số lần vô địch: ${team.soLanVoDich}`);
}
function print_all_teams(list) {
    for (let i = 0; i < list.length; i++) {
        print_infs_of_team(list[i]);
    }
}


function find_team(list, teamID) {
    for (let i = 0; i < list.length; i++) {
        if (teamID === list[i].id) {
            print_infs_of_team(list[i]);
            return;
        }
    }
    console.log('Không tìm thấy đội bóng!');
}

function delete_team(list, teamID) {
    for (let i = 0; i < list.length; i++) {
        if (teamID === list[i].id) {
            list.splice(i, 1);
            return;
        }
    }
    console.log('Không tìm thấy đội bóng nào để xóa!');
}


var menu = '  __ MENU __'
    + '\n1. Nhập dữ liệu'
    + '\n2. Xuất dữ liệu'
    + '\n3. Tìm thông tin'
    + '\n4. Xóa thông tin đội bóng'
    + '\n5. Thoát'
    + '\n   Nhập lựa chọn: ';
var choose = 1;

while (choose !== 5) {
    // Nhập lựa chọn 
    choose = prompt(menu);
    while (Check(choose) == false) {
        choose = prompt(menu);
    }
    choose = Number(choose);

    switch (choose) {
        case 1:
            console.log('1. Nhập dữ liệu');
            var id = prompt('Nhập ID: ');
            while (Check(id) == false || Check_ID(danhSachDoiBong, id) === true) {
                id = prompt('Nhập ID: ');
            }
            id = Number(id);

            var Name = prompt('Nhập tên đội: ');
            var hlv = prompt('Nhập tên HLV: ');
            var num = prompt('Số lần vô địch: ');
            while (Check(num) == false) {
                num = prompt('Số lần vô địch: ');
            }
            num = Number(num);

            var newTeam = new Team(id, Name, hlv, num);

            add_a_team(danhSachDoiBong, newTeam);
            break;

        case 2:
            console.log('2. Xuất dữ liệu');
            print_all_teams(danhSachDoiBong);
            break;

        case 3:
            console.log('3. Tìm thông tin');
            var teamID = prompt('Nhập ID team cần tìm: ');
            while (Check(teamID) == false) {
                teamID = prompt('Nhập ID team cần tìm: ');
            }
            teamID = Number(teamID);

            find_team(danhSachDoiBong, teamID);

            break;

        case 4:
            console.log('4. Xóa thông tin đội bóng');
            var id = prompt('Nhập ID cần xóa: ');
            while (Check(id) == false) {
                id = prompt('Nhập ID cần xóa: ');
            }
            id = Number(id);

            delete_team(danhSachDoiBong, id);

            break;

        case 5:
            console.log('"Goodbye!"');
            break;
    }
}
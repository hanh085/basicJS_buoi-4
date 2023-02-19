// Bài tập 2: Viết chương trình mô phỏng từ điển Anh Việt

// Tạo menu chương trình như sau:
// --------------------------------------
// == TỪ ĐIỂN ANH VIỆT ==
// 1. Nhập dữ liệu
// 2. Xuất dữ liệu
// 3. Dịch từ
// 4. Thoát
// --------------------------------------
// - Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
// - Khi chọn 2: Hiển thị thông tin các từ đã nhập.
// - Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
// - Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"


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

function Word(eng, viet) {
    this.eng = eng;
    this.viet = viet;
}

var dict = [
    {
        eng: 'apple',
        viet: 'quả táo',
    },
    {
        eng: 'book',
        viet: 'quyển sách',
    },
    {
        eng: 'pen',
        viet: 'bút mực',
    },
]

function print_word(word) {
    console.log(`${word.eng} : ${word.viet}`);
}
function Output(dict) {
    for (let i = 0; i < dict.length; i++) {
        print_word(dict[i]);
    }
}
function Add_a_word(dict, word) {
    dict.push(word);
}
function print_meaning(dict, eng) {
    for (let i = 0; i < dict.length; i++) {
        if (dict[i].eng === eng) {
            console.log(`nghĩa của từ ${eng} là: ${dict[i].viet}`);
            return;
        }
    }
    console.log('Không có từ trong từ điển');
}


var menu = '  __ MENU __'
    + '\n1. Nhập dữ liệu'
    + '\n2. Xuất dữ liệu'
    + '\n3. Dịch từ'
    + '\n4. Thoát'
    + '\n   Nhập lựa chọn: ';
var choose = 1;

while (choose !== 4) {
    // Nhập lựa chọn 
    choose = prompt(menu);
    while (Check(choose) == false) {
        choose = prompt(menu);
    }
    choose = Number(choose);

    switch (choose) {
        case 1:
            console.log('1. Nhập dữ liệu');
            var eng = prompt('Nhập từ tiếng Anh: ');
            var viet = prompt('Nhập nghĩa tiếng Việt: ');

            var newWord = new Word(eng, viet);
            Add_a_word(dict, newWord);

            break;
        case 2:
            console.log('2. Xuất dữ liệu');
            Output(dict);
            break;
        case 3:
            console.log('3. Dịch từ');
            var eng = prompt('Nhập từ tiếng Anh: ');
            print_meaning(dict, eng);
            break;
        case 4:
            break;
    }

}


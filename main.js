/**
 * Bài 1:Tìm ngày, tháng, năm tiếp theo và trước đó
 * Đầu vào:
 * - Lấy dữ liệu ngày tháng năm = a, b, c
 * Xử Lý:
 * (Ngày tiếp theo)
 * - a + 1
 * (Ngày trước đó)
 * - a - 1
 * Đầu ra:
 * - Show kết quả ra màn hình
 */

//Ngày Hôm Trước
document.getElementById("btnBai1_1").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber1").value * 1;
  var b = document.getElementById("txtNumber2").value * 1;
  var c = document.getElementById("txtNumber3").value * 1;
  //Xử lý
  a--;
  var ketQua = "Ngày trước đó là: " + a + "/" + b + "/" + c;
  //Đầu ra
  document.getElementById("footerBai1").innerHTML = ketQua;
};

//Ngày Hôm Sau
document.getElementById("btnBai1_2").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber1").value * 1;
  var b = document.getElementById("txtNumber2").value * 1;
  var c = document.getElementById("txtNumber3").value * 1;
  //Xử lý
  a++;
  var ketQua = "Ngày tiếp theo là: " + a + "/" + b + "/" + c;
  //Đầu ra
  document.getElementById("footerBai1").innerHTML = ketQua;
};

/**
 * Bài 2:Cho biết tháng có bao nhiêu ngày.
 * Đầu vào:
 * - Lấy dữ liệu tháng năm a ,b
 * Xử lý:
 * - Tạo hàm kiểm tra năm
 * - Tạo hàm kiểm tra tháng
 * - Gọi hàm kiểm tra dữ liệu cho ra kết quả
 * Đầu ra:
 * - Show kết quả ra màn hình
 */
function kiemTraNam(yearNumber) {
  if (yearNumber % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
function kiemTraThang(monthNumber, yearNumber) {
  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2:
      if (kiemTraNam(yearNumber) == true) {
        return 29;
      } else {
        return 28;
      }
      break;
  }
}
document.getElementById("btnBai2").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber2_1").value * 1;
  var b = document.getElementById("txtNumber2_2").value * 1;
  var ketQua;
  //Xử Lý
  var ketQua = "Tháng " + a + " có " + kiemTraThang(a, b) + " Ngày";
  //Đầu ra
  document.getElementById("footerBai2").innerHTML = ketQua;
};

/**
 * Bài 3:In ra cách đọc số.
 * Đầu vào:
 * - Lấy 3 số người dùng nhập x
 * Xử lý:
 * - Tạo hàm đọc số
 * - Tách từng số của người dùng theo hàng trăm(a) chục(b) đơn vị(c) và gán cho cách đọc số tương ứng
 * - Tạo biến kết quả
 * Đầu ra:
 * - Show ra màn hình kết quả
 */
function soBangChu(number) {
  switch (number) {
    case 0:
      return "không";
      break;
    case 1:
      return "một";
      break;
    case 2:
      return "hai";
      break;
    case 3:
      return "ba";
      break;
    case 4:
      return "bốn";
      break;
    case 5:
      return "năm";
      break;
    case 6:
      return "sáu";
      break;
    case 7:
      return "bảy";
      break;
    case 8:
      return "tám";
      break;
    case 9:
      return "chín";
      break;
  }
}
document.getElementById("btnBai3").onclick = function () {
  //Đầu vào
  var x = document.getElementById("txtNumber3_1").value * 1;
  var ketQua;
  //Xử lý
  var a = soBangChu(Math.floor(x / 100));
  var b = Math.floor((x % 100) / 10);
  var c = x % 10;
  if (b == 0) {
    ketQua = a + " trăm lẻ " + soBangChu(c);
  } else if (b == 1 && c == 0) {
    ketQua = a + " trăm mười ";
  } else if (b == 1) {
    ketQua = a + " trăm mười " + soBangChu(c);
  } else if (c == 1) {
    ketQua = a + " trăm " + soBangChu(b) + " mươi mốt";
  } else if (c == 0) {
    ketQua = a + " trăm " + soBangChu(b) + " mươi";
  } else {
    ketQua = a + " trăm " + soBangChu(b) + " mươi " + soBangChu(c);
  }
  //Đầu ra:
  document.getElementById("footerBai3").innerHTML = ketQua;
};

/**
 * Bài 4:Viết chương trình in tên sinh viên xa trường nhất.
 * Đầu vào:
 * - tạo biến x ,y tọa độ của trường
 * - tạo biến n1,2,3 tên sinh viên
 * - tạo biến x1,2,3 y,1,2,3 tọa độ sinh viên
 * Xử lý:
 * - Tạo hàm tính công thức Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
 * - Tính khoảng cách của từng sinh viên so với trường
 * - Lấy tên có khoảng cách lớn nhất gán vào biến kết quả
 * Đầu ra:
 * - Show kết quả ra màn hình
 */
function tinhKhoangCach(x1, x2, y1, y2) {
  var khoangCach = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  return khoangCach;
}

document.getElementById("btnBai4").onclick = function () {
  //Đầu vào:
  var x = 1;
  var y = 1;
  var n1 = document.getElementById("txtName4_1").value;
  var x1 = document.getElementById("txtNumber1_x").value * 1;
  var y1 = document.getElementById("txtNumber1_y").value * 1;
  var n2 = document.getElementById("txtName4_2").value;
  var x2 = document.getElementById("txtNumber2_x").value * 1;
  var y2 = document.getElementById("txtNumber2_y").value;
  var n3 = document.getElementById("txtName4_3").value;
  var x3 = document.getElementById("txtNumber3_x").value * 1;
  var y3 = document.getElementById("txtNumber3_y").value * 1;
  //Xử Lý:
  //Khoảng cách 3 sinh viên
  var khoangCachSV1 = tinhKhoangCach(x, x1, y, y1);
  var khoangCachSV2 = tinhKhoangCach(x, x2, y, y2);
  var khoangCachSV3 = tinhKhoangCach(x, x3, y, y3);
  //Lấy ra sinh viên có khoảng cách lớn nhất
  if (khoangCachSV1 >= khoangCachSV2 && khoangCachSV1 >= khoangCachSV3) {
    sinhVienXaNhat = n1;
  } else if (khoangCachSV2 >= khoangCachSV1 && khoangCachSV2 >= khoangCachSV3) {
    sinhVienXaNhat = n2;
  } else {
    sinhVienXaNhat = n3;
  }
  ketQua = "Sinh viên xa trường nhất là: " + sinhVienXaNhat;

  //Đầu ra:
  document.getElementById("footerBai4").innerHTML = ketQua;
};

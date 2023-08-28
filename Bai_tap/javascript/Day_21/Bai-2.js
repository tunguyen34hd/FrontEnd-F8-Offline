/*
Cho trước 1 mảng chứa thông tin từng khách hàng

Viết hàm createCustomers với đối số là mảng khách hàng

Yêu cầu kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.
*/
var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
    var newCustomer = customers;
    newCustomer.sort(function (a, b) {
        return a.age - b.age;
    });
    newCustomer.forEach(function (customer) {
        var names = customer.name.split(" ");

        var shortName = names[0] + " " + names[names.length - 1];
        customer.shortName = shortName;
    });
    return newCustomer;
}

console.log(createCustomers(customers));

/*
result = [
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong", shortName: "Nguyễn B" },
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi", shortName: "Nguyễn A" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM", shortName: "Nguyễn C" },
];
*/

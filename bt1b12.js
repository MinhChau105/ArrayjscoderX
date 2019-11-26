var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

// Nguyên tắc so sanh ở js là cả 2 phải là 1. Ở đây false là vì var a trỏ tơi 1 nơi và var b ở 1 nơi trong vùng nhớ, gtri giống nhưng vị trí trong vùng nhớ khác nhau.

## Bài toán quản lý mặt hàng và hoá đơn

> Văn Bắc
> 
> Đức Anh

## Phần 1: Quản lý Mặt hàng trong Cửa hàng

1.  Định nghĩa một lớp (class) `Product` để đại diện cho một mặt hàng trong cửa hàng. Mỗi mặt hàng sẽ có các thuộc tính sau:
    -   Mã sản phẩm (ID)
    -   Tên sản phẩm
    -   Giá sản phẩm
    -   Số lượng trong kho
2.  Tạo một lớp (class) `Inventory` để quản lý kho hàng. Inventory sẽ chứa một danh sách các sản phẩm hiện có trong cửa hàng. Các chức năng sau cần được cung cấp:
    -   Thêm sản phẩm vào kho
    -   Xóa sản phẩm khỏi kho
    -   Cập nhật thông tin sản phẩm
3.  Một số loại sản phẩm có thể xuất hiện trong cửa hàng bao gồm:
    -   Rau củ
    -   Thịt
    -   Đồ ăn vặt
    -   Đồ hộp

## Phần 2: Quản lý Hoá đơn

1.  Định nghĩa một lớp (class) `Invoice` để đại diện cho một hoá đơn. Mỗi hoá đơn sẽ có các thuộc tính sau:
    -   Mã hoá đơn (ID)
    -   Danh sách các mặt hàng được mua (sản phẩm và số lượng)
2.  Tạo một lớp (class) `InvoiceManager` để quản lý các hoá đơn. Các chức năng sau cần được cung cấp:
    -   Tạo mới hoá đơn
    -   Thêm mặt hàng vào hoá đơn
    -   Xóa mặt hàng khỏi hoá đơn
    -   Tính tổng số tiền cho mỗi hoá đơn

# DownloadImagesInstagram
Mục tiêu: Có thể download image của bài viết trên Instagram
Giao diện bao gồm
- Input nhập link của bài viết
- Ảnh của bài viết
- Button 'Download'

Bước 1: Người dùng copy link bài viết ở instagram

Bước 2: Người dùng paste link bài viết đó vào input 'Add link instagram' ở app. Và ảnh của bài viết sẽ được hiển thị bên dưới input.
  - Trường hợp 1: Khi người dùng paste link bất kỳ không thuộc về instagram. Sẽ hiển thị popup thông báo lỗi 'Không phải là url của instagram' 
  - Trường hợp 2: Khi người dùng paste string không phải là url.  Sẽ hiển thị popup thông báo lỗi 'Chuỗi ký tự không phải là url'
  -  Trường hợp 3: Khi người dùng paste link bài viết không có chứa image.  Sẽ hiển thị popup thông báo lỗi 'Không có image được tìm thấy'
Bước 3: Người dùng click button 'Download' để tải ảnh đó về.

# Tasks
- Setup project: install Nextjs, Expressjs, material UI
- Build home page and two function verify link
- Tạo request có chứa url của bài viết theo kiểu get để lấy link của image hiển thị ở client
- Tạo request có chứa url của ảnh theo kiểu get để lấy ảnh về máy.
# DownloadImagesInstagram
Mục tiêu: Có thể download image của bài viết trên Instagram
Giao diện bao gồm
- Input nhập link của bài viết
- Ảnh của bài viết
- Button 'Download'

Bước 1: Người dùng copy link bài viết ở instagram

Bước 2: Người dùng paste link bài viết đó vào input 'Add link instagram' ở app. Và ảnh của bài viết sẽ được hiển thị bên dưới input.
  - Trường hợp 1: Khi người dùng paste link bất kỳ không thuộc về instagram. Sẽ hiển thị popup thông báo lỗi 'Entered URL is not an instagram.com URL.' 
  - Trường hợp 2: Khi người dùng paste string không phải là url.  Sẽ hiển thị popup thông báo lỗi 'Invalid URL'
  -  Trường hợp 3: Khi người dùng paste link bài viết không có chứa image.  Sẽ hiển thị popup thông báo lỗi 'Not found the image'
Bước 3: Người dùng click button 'Download' để tải ảnh đó về.
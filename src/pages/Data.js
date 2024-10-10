const items = [
  {
    id: 1,
    name: "Ống kính",
    quantitysale: 5,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/dslr-2-150x150.jpg?v=1683297627343",
  },
  {
    id: 2,
    name: "Máy quay phim",
    quantitysale: 3,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/may-quay-150x150.jpg?v=1683297651577",
  },
  {
    id: 3,
    name: "Camera hành động",
    quantitysale: 2,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/camera-hanh-dong-1-150x150.jpg?v=1683297682213",
  },
  {
    id: 4,
    name: "Drone",
    quantitysale: 4,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/flycam-1-150x150.jpg?v=1683297730937",
  },
  {
    id: 6,
    name: "Phụ kiện máy ảnh",
    quantitysale: 4,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/flash-va-phu-kien-150x150.jpg?v=1683297785537",
  },

  {
    id: 7,
    name: "Máy ảnh",
    quantitysale: 4,
    images:
      "https://bizweb.dktcdn.net/100/482/909/collections/dslr-150x150.jpg?v=1683297601377",
  },
];

//Flash sale
const newItems = [
  {
    id: 8,
    name: "Canon RF 24mm f/1.8 Macro IS STM",
    quantitysale: 6,
    price: 18900000,
    originalPrice: 20490000, // Giá gốc
    discountPercentage: Math.round(((20490000 - 18900000) / 20490000) * 100), // Tính phần trăm giảm giá
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/1657621852-img-1793116.jpg?v=1683646745713",
  },
  {
    id: 9,
    name: "Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR",
    quantitysale: 10,
    price: 18900000,
    originalPrice: 21490000,
    discountPercentage: Math.round(((21490000 - 18900000) / 21490000) * 100),
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/1634117738-1649436.jpg?v=1683645019827",
  },
  {
    id: 10,
    name: "Nikon NIKKOR Z 800mm f/6.3 VR S",
    quantitysale: 20,
    price: 150000000,
    originalPrice: 163990000,
    discountPercentage: Math.round(((163990000 - 150000000) / 163990000) * 100),
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/1649202634-1679311.jpg?v=1683644275687",
  },
  {
    id: 11,
    name: "Nikon NIKKOR Z 85mm f/1.2 S",
    quantitysale: 8,
    price: 65000000,
    originalPrice: 70000000,
    discountPercentage: Math.round(((70000000 - 65000000) / 70000000) * 100),
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/1675723846-1744705.jpg?v=1683641663417",
  },
  {
    id: 12,
    name: "Samyang AF 75mm f/1.8 Fujifilm X",
    quantitysale: 15,
    price: 9900000,
    originalPrice: 9900000,
    discountPercentage: Math.round(((9900000 - 9900000) / 9900000) * 100),

    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/samyang-75mm-x-1.jpg?v=1683641155277",
  },
  {
    id: 13,
    name: "Máy ảnh Nikon D850 (Body Only)",
    quantitysale: 15,
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),

    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
  },
  {
    id: 14,
    name: "Máy ảnh Nikon D780 + Lens 24-120mm F/4G ED Nano",
    quantitysale: 1,
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/nikon-d780-with-24-120-lens-7-500x500.jpg?v=1683467618777",
  },
  {
    id: 15,
    name: "Máy ảnh Nikon D6 Body Only",
    quantitysale: 15,
    price: 140000000,
    originalPrice: 162000000,
    discountPercentage: Math.round(((162000000 - 140000000) / 162000000) * 100),
    images:
      "https://bizweb.dktcdn.net/thumb/large/100/482/909/products/nikon-d6-01-500x500.jpg?v=1683467136367",
  },
];

//Camera
const cameraItem = [
  {
    id: 21,
    name: "Máy ảnh Nikon D850 (Body Only)",
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
    ],
    description:
      "Nikon D850 là một máy ảnh DSLR cao cấp với cảm biến FullFrame 45.7MP và bộ xử lý hình ảnh EXPEED 5. Được thiết kế cho các nhiếp ảnh gia chuyên nghiệp và yêu cầu cao về chất lượng hình ảnh.",
  },
  {
    id: 22,
    name: "Máy ảnh Nikon D780 + Lens 24-120mm F/4G ED Nano",
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d780-with-24-120-lens-7-500x500.jpg?v=1683467618777",
      "https://example.com/nikon-d780-second-images.jpg",
      "https://example.com/nikon-d780-third-images.jpg",
    ],
    description:
      "Nikon D780 là sự kết hợp giữa một máy ảnh DSLR truyền thống và công nghệ mirrorless tiên tiến, kèm theo ống kính 24-120mm cho khả năng chụp linh hoạt trong mọi tình huống.",
  },
  {
    id: 23,
    name: "Máy ảnh Nikon D6 Body Only",
    price: 138990000,
    originalPrice: 159990000,
    discountPercentage: Math.round(((159990000 - 138990000) / 159990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d6-01-500x500.jpg?v=1683467136367",
      "https://example.com/nikon-d6-second-images.jpg",
      "https://example.com/nikon-d6-third-images.jpg",
    ],
    description:
      "Nikon D6 là dòng máy ảnh DSLR hàng đầu của Nikon, nổi bật với khả năng chụp ảnh tốc độ cao và hiệu suất cao cấp cho các nhiếp ảnh gia chuyên nghiệp.",
  },
  {
    id: 24,
    name: "Máy ảnh Canon EOS 850D (Body Only)",
    price: 18590000,
    originalPrice: 19990000,
    discountPercentage: Math.round(((19990000 - 18590000) / 19990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/canon-eos-850d-body-2-500x500.jpg?v=1683451497817",
      "https://example.com/canon-850d-second-images.jpg",
      "https://example.com/canon-850d-third-images.jpg",
    ],
    description:
      "Canon EOS 850D là một máy ảnh DSLR tầm trung, với khả năng quay video 4K và hệ thống lấy nét tiên tiến, lý tưởng cho cả người mới bắt đầu và những người dùng có kinh nghiệm.",
  },
  {
    id: 25,
    name: "Máy ảnh Canon EOS 77D (Body Only)",
    price: 35990000,
    originalPrice: 44000000,
    discountPercentage: Math.round(((44000000 - 35990000) / 44000000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/canon-eos-77d-500x500.jpg?v=1683450750903",
      "https://example.com/canon-77d-second-images.jpg",
      "https://example.com/canon-77d-third-images.jpg",
    ],
    description:
      "Canon EOS 77D là một máy ảnh DSLR linh hoạt với khả năng điều khiển trực quan, phù hợp với các nhiếp ảnh gia muốn nâng cao chất lượng hình ảnh của mình.",
  },
  {
    id: 26,
    name: "Máy ảnh Canon EOS 6D Mark II",
    price: 44680000,
    originalPrice: 53680000,
    discountPercentage: Math.round(((53680000 - 44680000) / 53680000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/canon-eos-6d-ii-with-24-105-f4l-ii-1-500x500.jpg?v=1683450055773",
      "https://example.com/canon-6d-second-images.jpg",
      "https://example.com/canon-6d-third-images.jpg",
    ],
    description:
      "Canon EOS 6D Mark II là máy ảnh FullFrame nhỏ gọn với hiệu suất cao, thiết kế cho những ai đang tìm kiếm máy ảnh mạnh mẽ với khả năng quay video và chụp ảnh chuyên nghiệp.",
  },
  {
    id: 27,
    name: "Máy ảnh Canon EOS 5D Mark IV (Body Only)",
    price: 36290000,
    originalPrice: 53290000,
    discountPercentage: Math.round(((53290000 - 36290000) / 53290000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/canon-eos-5d-mark-iv-500x500.jpg?v=1683449123350",
      "https://example.com/canon-5d-second-images.jpg",
      "https://example.com/canon-5d-third-images.jpg",
    ],
    description:
      "Canon EOS 5D Mark IV là máy ảnh DSLR đa năng, nổi tiếng với chất lượng ảnh tuyệt vời, khả năng quay video 4K và tính năng xử lý linh hoạt cho các nhiếp ảnh gia chuyên nghiệp.",
  },
];

// ống kính
const lendItem = [
  {
    id: 41,
    name: "Canon RF 70-200mm f/4L IS USM",
    price: 52990000,
    originalPrice: 62000000,
    discountPercentage: Math.round(((62000000 - 52990000) / 62000000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/1604443681-1601518.jpg?v=1683647156983",
      "https://bizweb.dktcdn.net/100/482/909/products/1604443639-img-1439182.jpg?v=1683647158813",
      "https://bizweb.dktcdn.net/100/482/909/products/1604443639-img-1439185.jpg?v=1683647162230",
    ],
    description:
      "Nổi tiếng với phạm vi và tính linh hoạt, Canon RF 70-200mm f/4L IS USM sở hữu ngoại hình nhỏ gọn và nhẹ ấn tượng hoàn hảo để kết hợp với các thân máy ảnh mirrorless full frame. Khẩu độ tối đa f/4 tạo nên sự cân bằng giữa độ sáng vừa đủ để chụp trong các điều kiện ánh sáng sẵn có và thiết kế đặc biệt di động, thuận tiện chụp cầm tay. Tính năng ổn định hình quang học bổ trợ bù trừ đến 5 bước dừng khi xóc máy, hoặc lên đến 7.5 bước dừng ấn tượng khi lắp với các thân máy ảnh dòng EOS R có IBIS. Về quang học, ống kính năng trang bị bốn thấu kính UD giảm thiểu nhiều loại quang sai xuyên suốt dải zoom, cho độ trong rõ cao, kết hợp lớp phủ Air Sphere để giảm bóng ma và lóa sáng. Hệ thống lấy nét Dual Nano USM mang lại hiệu suất lấy nét tự động nhanh chóng và gần như yên lặng, có kết hợp lấy nét thủ công toàn thời gian. Ngoài ra, ống kính 70-200mm này có trang bị kháng thời tiết và phủ fluorine để bảo vệ các thấu kính phía trước và phía sau.",
  },
  {
    id: 42,
    name: "Canon RF 24mm f/1.8 Macro IS STM",
    price: 18900000,
    originalPrice: 20490000,
    discountPercentage: Math.round(((20490000 - 18900000) / 20490000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/1657621852-img-1793116.jpg?v=1683646745713",
      "https://bizweb.dktcdn.net/100/482/909/products/1657621852-img-1793112.jpg?v=1683646747047",
      "https://bizweb.dktcdn.net/100/482/909/products/1657621852-img-1793114.jpg?v=1683646748130",
    ],
    description:
      "Canon RF 24mm f/1.8 Macro IS STM là sự kết hợp độc đáo giữa trường nhìn rộng và thiết kế lấy nét cận cảnh, tiêu cự góc cực rộng trong ống kính macro. Ống kính hỗ trợ chụp ở phạm vi gần với khẩu độ f/1.8 rộng, đồng thời giữ được không gian nhìn thoáng và độ sâu trường ảnh đậm. Chất lượng quang học được đảm bảo nhờ hệ thống thấu kính tiên tiến tối ưu cho dải tiêu cự đơn. Trọng lượng nhẹ và kích thước nhỏ gọn lý tưởng để sử dụng hàng ngày. Cơ chế ổn định hình ảnh quang học 5 bước dừng và động cơ lấy nét êm giúp ống kính này thích hợp với cả ứng dụng quay phim chất lượng cao",
  },
  {
    id: 43,
    name: "Canon RF 135mm f/1.8 L IS USM",
    price: 77590000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 138990000) / 0) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/1667347825-1733226.jpg?v=1683645510130",
      "https://bizweb.dktcdn.net/100/482/909/products/1667348143-img-1863644.jpg?v=1683645511573",
      "https://bizweb.dktcdn.net/100/482/909/products/1667390517-img-1863947.jpg?v=1683645512417",
    ],
    description:
      "Nikon D6 là dòng máy ảnh DSLR hàng đầu của Nikon, nổi bật với khả năng chụp ảnh tốc độ cao và hiệu suất cao cấp cho các nhiếp ảnh gia chuyên nghiệp.",
  },
  {
    id: 44,
    name: "Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR",
    price: 18900000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 18590000) / 0) * 100),
    images: [
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/482/909/products/1634117738-1649436.jpg?v=1683645019827",
      "https://bizweb.dktcdn.net/100/482/909/products/1650896182-img-1737683.jpg?v=1683645021167",
      "https://bizweb.dktcdn.net/100/482/909/products/1650896182-img-1737682.jpg?v=1683645022607",
    ],
    description:
      "Nikon Z DX 18-140mm gọn nhẹ và linh hoạt, là ống kính zoom đa năng có dải tiêu cự trải từ góc rộng tới tầm xa. Là giải pháp một ống kính đáp ứng đa dạng chủ thể nhiếp ảnh để chụp du lịch, chụp dạo, hàng ngày, ống kính tương đương 27-210mm này lý tưởng để chụp từ phong cảnh, chân dung tới chụp các chủ thể đang di chuyển ở xa.",
  },
  {
    id: 45,
    name: "Nikon NIKKOR Z 800mm f/6.3 VR S",
    price: 150000000,
    originalPrice: 163990000,
    discountPercentage: Math.round(((163990000 - 150000000) / 163990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/1649202634-1679311.jpg?v=1683644275687",
      "https://bizweb.dktcdn.net/100/482/909/products/1649203416-img-1729715.jpg?v=1683644277220",
      "https://bizweb.dktcdn.net/100/482/909/products/1649203416-img-1729718.jpg?v=1683644277533",
    ],
    description:
      "Nikon Z 800mm f/6.3 là ống kính một tiêu cự chụp siêu xa nổi bật nhờ sự kết hợp độc đáo của một trong những tiêu cự dài nhất hiện có trong thiết kế di động ấn tượng. Thiết kế khác biệt này có thể thực hiện được nhờ bao gồm một thấu kính Phase Fresnel, giúp giảm 50% trọng lượng tổng thể và 16% chiều dài so với ống kính 800 mm f/5.6 ngàm F trước đây",
  },
  {
    id: 46,
    name: "Samyang AF 35-150mm f/2-2.8 FE (Chính hãng)",
    price: 30980000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 44680000) / 0) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/samyang-35-150-1.jpg?v=1683642660530",
      "https://bizweb.dktcdn.net/100/482/909/products/samyang-35-150-7.jpg?v=1683642662027",
      "https://bizweb.dktcdn.net/100/482/909/products/samyang-35-150-9.jpg?v=1683642663390",
    ],
    description:
      "Samyang AF 35-150mm f/2-2.8 FE sở hữu khẩu độ tối đa là f/2 ở điểm rộng nhất và f/2.8 ở điểm cuối tele, bao quát năm độ dài tiêu cự chính (35mm/50mm/85mm/135mm/150mm). Với phạm vi zoom rộng, ống kính này được thiết kế như một ống kính toàn năng nhanh, bao quát nhiều tình huống chụp ảnh khác nhau từ chân dung đến du lịch. Ngoài ra, thiết kế quang học xuất sắc của ống kính cung cấp độ phân giải vượt trội đến tận rìa ảnh và động cơ bước tuyến tính cho phép thực hiện lấy nét tự động nhanh, chính xác hơn.",
  },
  {
    id: 47,
    name: "Nikon NIKKOR Z 85mm f/1.2 S",
    price: 65000000,
    originalPrice: 69900000,
    discountPercentage: Math.round(((69900000 - 65000000) / 69900000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/1675723846-1744705.jpg?v=1683641663417",
      "https://bizweb.dktcdn.net/100/482/909/products/1675724738-img-1932087.jpg?v=1684723840123",
      "https://bizweb.dktcdn.net/100/482/909/products/1675724738-img-1932079.jpg?v=1684723840123",
    ],
    description:
      "Nikon Z 85mm f/1.2 S là ống kính một tiêu cự chân dung tầm xa ngắn cực nhanh dành cho máy ảnh mirrorlress ngàm Z. Ống kính đạt được cả hiệu suất kết xuất vượt trội và hiệu ứng bokeh lớn, đẹp mắt, mở rộng khả năng cho người dùng chụp ảnh chân dung, cưới, thai kỳ, thời trang cao cấp và boudoir.",
  },
];

//video
const videoItem = [
  {
    id: 31,
    name: "Máy quay phim Z CAM E2 Professional 4K Cinema Camera",
    price: 53190000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 50990000) / 0) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/z-cam-e2-1-500x500.jpg?v=1683648724707",
  },
  {
    id: 32,
    name: "Blackmagic Pocket Cinema Camera 6K Pro",
    price: 59990000,
    originalPrice: 65500000,
    discountPercentage: Math.round(((65500000 - 50990000) / 65500000) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/canon-xf705-01-500x500.jpg?v=1683646361700",
  },
  {
    id: 33,
    name: "Máy quay phim Sony FX3 | Nhập Khẩu",
    price: 82990000,
    originalPrice: 89990000,
    discountPercentage: Math.round(((89990000 - 82990000) / 89990000) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/sony-fx3-1-500x500.jpg?v=1683647423603",
  },
  {
    id: 34,
    name: "Máy quay phim Canon XA55",
    price: 30000000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 18590000) / 0) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/canon-xf705-01-500x500.jpg?v=1683646361700",
  },
  {
    id: 35,
    name: "Máy Quay Phim Canon XF705",
    price: 33000000,
    originalPrice: 0,
    discountPercentage: Math.round(((0 - 35990000) / 0) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/canon-xf705-01-500x500.jpg?v=1683646361700",
  },
  {
    id: 36,
    name: "Máy ảnh Canon EOS 6D Mark II",
    price: 44680000,
    originalPrice: 53680000,
    discountPercentage: Math.round(((53680000 - 44680000) / 53680000) * 100),
    images:
      "https://bizweb.dktcdn.net/100/482/909/products/canon-eos-6d-ii-with-24-105-f4l-ii-1-500x500.jpg?v=1683450055773",
  },
];

// tin tuc
const newsItems = [
  {
    id: 1,
    title: "Đánh Giá Fujifilm X-T5: Quay 6K Trên Thiết Kế Siêu Cổ Điển",
    date: "01/10/2024",
    description:
      "Fujifilm X-T5 đã được người hâm mộ nhà Fuji hào hứng mong chờ ngày ra mắt trong một thời gian dài, và liệu rằng sản phẩm này có làm thỏa mãn được sự kỳ vọng rất lớn từ phía người dùng? Và nếu anh em còn đang phân vân có nên nâng cấp chiếc máy này không thì hãy xem hết bài viết đánh giá Fujifilm X-T5 chi tiết ngay dưới đây của VJShop nhé!",
    images:
      "https://bizweb.dktcdn.net/100/482/909/articles/danh-gia-fujifilm-x-t5-20.jpg?v=1683728993297",
    content: `
      <h2>Giới thiệu Fujifilm X-T5</h2>
      <p>Fujifilm X-T5 là một bước tiến lớn trong dòng sản phẩm của Fujifilm, với thiết kế hoài cổ nhưng tích hợp nhiều công nghệ hiện đại.</p>
      <h3>Thiết kế cổ điển nhưng mạnh mẽ</h3>
      <p>X-T5 mang đậm phong cách cổ điển với thiết kế hoài niệm, nhưng bên trong lại là bộ cảm biến 40MP, hỗ trợ quay video 6K - một tính năng hiếm có ở dòng máy mirrorless.</p>
      <p>...</p>
    `,
  },
  {
    id: 2,
    title: "So Sánh Insta360 Flow Và DJI Osmo Mobile 6",
    date: "02/10/2024",
    description:
      "Những chiếc điện thoại thông minh càng được nâng cấp về camera và khiến chúng trở thành những thiết bị ghi hình không thể thiếu. Hiểu được điều đó các hãng phụ kiện liên tục đưa ra những mẫu gimbal dành riêng cho điện thoại với vô vàn chức năng ấn tượng.",
    images:
      "https://bizweb.dktcdn.net/100/482/909/articles/so-sanh-insta360-flow-va-osmo-action-6-17.jpg?v=1683728778797",
    content: `
      <h2>So sánh Insta360 Flow và DJI Osmo Mobile 6</h2>
      <p>Cả hai gimbal đều cung cấp sự ổn định tuyệt vời khi quay video bằng điện thoại. Tuy nhiên, chúng có những khác biệt về tính năng và thiết kế.</p>
      <h3>Tính năng nổi bật</h3>
      <p>Insta360 Flow nổi bật với tính năng AI theo dõi đối tượng, trong khi DJI Osmo Mobile 6 tập trung vào sự tiện dụng và tính năng gấp gọn.</p>
      <p>...</p>
    `,
  },
  {
    id: 3,
    title: "Aputure Ra Mắt Đèn Amaran 150c Và 300c Dành Riêng Cho Các Nhà Làm Phim",
    date: "03/10/2024",
    description:
      "Aputure mới đây đã công bố 2 chiếc đèn LED Amaran 150c và 300c có nguồn điện 150W và 300W full-color. 2 chiếc đèn này được thiết kế riêng cho các nhà làm phim, cả có thể kết hợp với bộ điều chỉnh ánh sáng Spotlight SE và Light Dome Mini SE.",
    images:
      "https://bizweb.dktcdn.net/100/482/909/articles/ra-mat-2-chiec-den-amaran-150c-va-300c-1.jpg?v=1683728443837",
    content: `
      <h2>Amaran 150c và 300c</h2>
      <p>Hai chiếc đèn mới từ Aputure mang lại nhiều tính năng đáng kinh ngạc cho các nhà làm phim chuyên nghiệp. Với khả năng chiếu sáng mạnh mẽ và đa sắc, chúng cung cấp khả năng điều chỉnh linh hoạt cho mọi cảnh quay.</p>
      <p>...</p>
    `,
  },
  {
    id: 4,
    title: "Bất Ngờ Chưa: Máy Ảnh Nikon Có Thể Chạy Bon Bon Trên Đường",
    date: "03/10/2024",
    description:
      "Một cuộc đua có phần 'lập dị' đã được tổ chức với sự tham gia của hàng loạt phương tiện đặc biệt? Ô tô máy ảnh Nikon này là một trong hàng trăm chiếc xe kỳ lạ được chế tạo bởi nhà phát minh Ấn Độ K Sudhakar.",
    images:
      "https://bizweb.dktcdn.net/100/482/909/articles/o-to-may-anh-nikon-2.jpg?v=1683728478247",
    content: `
      <h2>Chiếc ô tô độc đáo từ Nikon</h2>
      <p>Ô tô máy ảnh Nikon không chỉ là phương tiện di chuyển, mà còn là biểu tượng sáng tạo của nhà phát minh Ấn Độ K Sudhakar. Cuộc đua này thu hút rất nhiều sự quan tâm từ giới truyền thông và những người yêu công nghệ.</p>
      <p>...</p>
    `,
  },
];





export {items, newItems, cameraItem, videoItem, newsItems, lendItem };

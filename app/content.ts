
export type Photo = {
  src: string;
  alt: string;
  position?: string;
};

const HER = "Trâm Anh";
const ME = "Dĩ Ân";

export const issue = {
  masthead: "MUSE",
  herName: HER,
  yourName: ME,
  volume: "Vol. 01",
  city: "Tây Ninh",
  date: "20.10.2026",
  dateLong: "20 tháng Mười, 2026",
  price: "Vô giá",
};

export const cover = {
  kicker: "The October Issue",
  photo: {
    src: "/photos/b5141cb0-f27e-4093-96d4-5dbb7e3574b2.jpg",
    alt: "Người xinh đẹp nhất",
    position: "50% 50%",
  } satisfies Photo,
  summary: "Dành tăng cho em người yêu dễ thương nhất của anh",
  photoCredit: `Ảnh: ${ME}`,
};

export const feature = {
  kicker: "Feature",
  title: "Tâm thư",
  headline: "Gửi em, công chúa dễ thương, đáng yêu và thơm nhất",
  deck: "Hôm nay nhân ngày Phụ nữ Việt Nam 20/10, anh gửi tới em những lời yêu thương từ anh",
  paragraphs: [
    "Nhân ngày 20/10, anh chúc Trâm Anh luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp nhiều điều may mắn trong cuộc sống. Mong em lúc nào cũng giữ được tinh thần thoải mái, làm những điều mình thích và luôn có gia đình, bạn bè bên cạnh yêu thương, quan tâm.",
    "Anh cũng cảm ơn em vì đã ở bên anh, cùng anh chia sẻ những chuyện vui buồn trong cuộc sống. Anh biết đôi khi cả hai đều bận rộn, mệt mỏi và có những chuyện không như ý, nhưng anh mong tụi mình sẽ luôn thấu hiểu, chia sẻ và cùng nhau cố gắng. Anh không giỏi nói những lời hoa mỹ, chỉ mong có thể quan tâm em nhiều hơn bằng những điều nhỏ nhặt hằng ngày. Chúc Trâm Anh có một ngày 20/10 thật vui vẻ nhe, yêu em ",
  ],
  pullQuote: "Dĩ Ân có thích tui hong???",
  pullQuoteNote: "Dĩ Ân thích Trâm Anh nhiều lắm ",
};

export const lookbook = {
  kicker: "Lookbook",
  title: "Những khoảnh khắc",
  intro: "Đây là những bức ảnh của Trâm Anh xinh đẹp được lưu trữ trong thư viện của Dĩ Ân",
  quote: "Người gì mà đẹp thé, xinh thé!",
  items: [
    {
      photo: { src: "/photos/bbbe6c31-df6f-4606-9be4-46066f603684.jpg", alt: "[Điệu đà quá ha]", position: "50% 50%" },
      place: "Ở nhà Dĩ Ân",
      date: "",
      note: "Đây là ảnh đầu tiên chụp ở nhà Dĩ Ân",
    },
    {
      photo: { src: "/photos/dd7ae2ba-5860-47bb-bf94-1d661cac8dbc.jpg", alt: "Điện thoại ta là lấy selfie", position: "50% 50%" },
      place: "Quán mì cay ở Gò Dầu",
      date: "",
      note: "Dĩ Ân từng ngắm ảnh này rất nhiều",
    },
    {
      photo: { src: "/photos/bdeb5f1a-c29e-404d-a348-28dd01686b1e.jpg", alt: "Mới mua máy ảnh nè!", position: "50% 50%" },
      place: "Ở trọ cũ",
      date: "",
      note: "Dĩ Ân cũng thích ảnh này lắm",
    },
    {
      photo: { src: "/photos/83fefa88-2a89-45fc-b485-a676b9a95e71.jpg", alt: "Dễ thương quá đi!", position: "50% 50%" },
      place: "Cũng ở trọ cũ",
      date: "",
      note: "Set ảnh này cũng siu dễ thương luôn",
    },
    {
      photo: { src: "/photos/eb838fec-c063-4caf-96eb-ed778a15db22.jpg", alt: "Đi chụp photobooth nè", position: "50% 50%" },
      place: "Ở GO Dĩ An",
      date: "",
      note: "Siu dễ thương luôn",
    },
    {
      photo: { src: "/photos/53d4be5b-e0cb-48d9-9c97-9c4b32e03777.jpg", alt: "Công chúa trong rừng nè!", position: "50% 50%" },
      place: "Thảo cầm viên",
      date: "",
      note: "Đi chơi vui lắm luôn",
    },
    {
      photo: { src: "/photos/090d695a-aa58-4d11-ad9f-2a5ec47fa2f8.jpg", alt: "Đi đu quay đồ ha", position: "50% 30%" },
      place: "Ở trên trời!",
      date: "",
      note: "Say hi đồ ha",
    },
    {
      photo: { src: "/photos/292dd9f6-2cd8-4e72-bafa-7e257225b09c.jpg", alt: "Cưng quá đi", position: "50% 50%" },
      place: "Ở nhà Trâm Anh",
      date: "",
      note: "Này vừa giận xong kêu chụp vẫn chụp nè hihi",
    },
    {
      photo: { src: "/photos/5038b771-7709-432e-9e96-3521be22457f.jpg", alt: "Hút hồn lun!", position: "50% 50%" },
      place: "Ở trọ cũ",
      date: "",
      note: "Set ảnh này xem thích lắm nha he he he",
    },
    {
      photo: { src: "/photos/eb219386-3a06-4cff-813a-818073b41771.jpg", alt: "Người đẹp ở hồ sen", position: "50% 50%" },
      place: "Khu bảo tồn gì đó",
      date: "",
      note: "Chỗ gì mà vắng ghê ",
    },
  ] satisfies { photo: Photo; place: string; date: string; note: string }[],
};

export const editorialNote = {
  kicker: "Editor’s Note",
  title: "Lời tái bút",
  body: [
    "Số tạp chí này không có quảng cáo, không có bài PR, cũng sẽ không có lần tái bản. Toàn bộ nội dung được biên tập bởi một người duy nhất, cho một độc giả duy nhất.",
    "Nếu có lỗi chính tả nào, mong em bỏ qua — tay anh hơi run vì hồi hộp.",
  ],
  ps: "[Dòng P.S., ví dụ một bất ngờ nhỏ]",
  signOff: "Yêu em,",
  signature: ME,
};

export const colophon = [
  { label: "Nàng thơ", value: HER },
  { label: "Biên tập & viết bài", value: ME },
  { label: "Nhiếp ảnh", value: `${ME} & chiếc điện thoại` },
  { label: "Số phát hành", value: "01 — chỉ một bản duy nhất" },
];


export const gate = {
  line: "Ấn bản đặc biệt · chỉ in duy nhất một bản",
  hint: "Chạm vào con dấu để mở",
};

export const anatomy = {
  kicker: "Portrait",
  title: "Giải phẫu một nàng thơ",
  intro: `Một nghiên cứu nghiêm túc về những chi tiết làm nên ${HER}. Chạm vào từng con số trên ảnh nhé.`,
  photo: {
    src: "/photos/bdeb5f1a-c29e-404d-a348-28dd01686b1e.jpg",
    alt: "BỨC ẢNH XINH ƠI LÀ XINHHH",
  } satisfies Photo,
  ratio: "3 / 4",
  details: [
    {
      x: 20,
      y: 40,
      name: "Hoa cẩm tú cầu",
      text: "Dĩ ân tặng lâu rùi nè",
    },
    {
      x: 50,
      y: 40,
      name: "Máy ảnh mới đồ he",
      text: "Đang chụp người dễ thương",
    },
    {
      x: 30,
      y: 60,
      name: "Phú bà của tôi",
      text: "Vàng bạc nhiều quá ha",
    },
    {
      x: 40,
      y: 80,
      name: "Người yêu Dĩ Ân",
      text: "Chỗ này có mùi thơm hehee",
    },
    {
      x: 20,
      y: 20,
      name: "Đố chawm biết là gì",
      text: "Dĩ Ân núp đây nè",
    },
  ],
  file: [
    { label: "Họ tên", value: HER },
    { label: "Biệt danh", value: "Chawm siu đáng iu" },
    { label: "Sinh nhật", value: "29/12/2004" },
    { label: "Màu sắc yêu thích", value: "Màu tím" },
    { label: "Câu cửa miệng", value: "Dĩ Ân đâu ròi xuống đây coi" },
    { label: "Siêu năng lực", value: "Biết khi nào Dĩ Ân quay lưng chỗ khác" },
    { label: "Điểm yếu", value: "Dễ bị lừa" },
    { label: "Tình trạng", value: "Có người iu" },
  ],
};

export const roles = {
  kicker: "Women’s Day",
  intro: "Hôm nay là ngày của em mọi thứ đều sẽ nói về em!",
  heading: "Em là công chúa của Anh",
  items: [
    {
      tab: "Con gái",
      phrase: "Em là, Người con gái dịu dàng, đáng yêu",
      note: "Lúc nào cũng xinh đẹp",
    },
    {
      tab: "Bạn bè",
      phrase: "Em là, Người bạn ai cũng muốn nói chuyện",
      note: "Siêu tâm lí. EQ IQ cao nè hehe",
    },
    {
      tab: "Công việc",
      phrase: "Em là, Người siêu chỉn chu",
      note: "Lúc nào vào trạng thái làm việc là rất tập trung, muốn phá cũng không được!",
    },
    {
      tab: "Người yêu",
      phrase: "Em là, Người mà anh yêu nhất",
      note: "Lúc nào cũng mún hun cho 1 cái",
    },
    {
      tab: "Cô giáo",
      phrase: "Em là, Người mà gì cũng biết",
      note: "Dạy cho anh nhiều cái chưa biết",
    },
  ],
};

export const quiz = {
  kicker: "Trắc nghiệm",
  title: "Em là công chúa kiểu nào?",
  intro:
    "Bài trắc nghiệm tâm lý cực kỳ khoa học, được kiểm chứng bởi anh. Chọn đáp án đầu tiên em nghĩ tới nhé.",
  questions: [
    {
      q: "Một sáng Chủ nhật lý tưởng của em là…",
      options: [
        "Cà phê, nhạc nhẹ và một cuốn sách",
        "Dậy sớm, ra ngoài đón nắng",
        "Đi chợ rồi nấu một bữa thật ngon",
        "Xách balo lên và đi đâu đó",
      ],
    },
    {
      q: "Khi anh lỡ quên một việc quan trọng, em sẽ…",
      options: [
        "Im lặng — đáng sợ nhất",
        "Cười xoà rồi nhắc nhẹ",
        "Giận đúng năm phút, rồi vẫn quan tâm như thường",
        "Đòi một chuyến đi chơi để bù",
      ],
    },
    {
      q: "Món quà khiến em vui nhất là…",
      options: [
        "Một lá thư viết tay",
        "Một bó hoa thật to",
        "Một bữa ăn ngon do người thương nấu",
        "Một chuyến đi bất ngờ",
      ],
    },
    {
      q: "Nếu chuyện tình mình là một bộ phim, nó sẽ là…",
      options: [
        "Phim tình cảm, có mưa và nhạc buồn",
        "Phim hài, mỗi ngày một tập",
        "Phim gia đình ấm áp, kết có hậu",
        "Phim phiêu lưu, không ai đoán được kết",
      ],
    },
  ],
  results: [
    {
      title: "Công chúa Mùa thu",
      text: "Dịu dàng, sâu lắng và hơi khó đoán — như một buổi chiều cuối thu. Ở cạnh em, mọi thứ chậm lại một nhịp, và anh thích nhịp ấy.",
    },
    {
      title: "Công chúa Ánh nắng",
      text: "Em đi tới đâu, chỗ đó sáng lên — kể cả những hôm tâm trạng anh xám xịt nhất.",
    },
    {
      title: "Công chúa Cà phê sữa",
      text: "Ngọt ngào, ấm áp, có chút đắng cho vừa đủ — và gây nghiện một cách đáng sợ.",
    },
    {
      title: "Công chúa Phiêu lưu",
      text: "Không bao giờ chán, luôn có kế hoạch mới. Anh chẳng cần biết mình đi đâu, miễn là đi cùng em.",
    },
  ],
  verdict:
    "Ghi chú của ban biên tập: bài trắc nghiệm này không có đáp án sai. Dù em là nàng thơ kiểu nào, em vẫn là kiểu anh yêu nhất.",
};

export const wishes = {
  kicker: "Wish List",
  title: "Ba điều ước của nàng",
  intro:
    "Hôm nay là ngày của em, nên em được ước. Lớn nhỏ gì cũng được — viết ra đây, ban biên tập cam kết sẽ cố gắng hết sức.",
  placeholders: [
    "Một điều em muốn mình cùng làm…",
    "Một điều nhỏ xíu cho riêng em…",
    "Một điều em ước cho năm tới…",
  ],
  sent: "Ban biên tập đã nhận được. Thời hạn thực hiện: sớm nhất có thể.",
  sendTo: "https://zalo.me/0326091879",
};

export const finale = {
  kicker: "Trang cuối",
  question: "Em có đồng ý làm nàng thơ của anh - cho tất cả những số tiếp theo không?",
  yes: "Em đồng ý",
  no: [
    "Để em nghĩ đã",
    "Chắc chưa?",
    "Nghĩ lại đi mà",
    "Nút này hỏng rồi",
    "Bấm nút bên kia đi",
    "Không bắt được đâu",
  ],
  answer: "Anh biết mà.",
  answerNote: "Hẹn em ở số tiếp theo — Vol. 02. Rồi số sau nữa. Rồi mãi mãi.",
};

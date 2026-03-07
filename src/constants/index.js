const BASE_URL = import.meta.env.BASE_URL

export const NAV_LINKS = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Skills", url: "#skills" },
  { name: "Contact", url: "#contact" },
]

export const SOCIAL_LINKS = [
  { name: "Telegram", url: "https://t.me/funnythanh" },
  { name: "Twitter", url: "https://twitter.com/funnythanh" },
  { name: "GitHub", url: "https://github.com/funnyngao2" },
  { name: "YouTube", url: "https://www.youtube.com/@bestluagamer8550" },
]

export const PROJECTS = [
  { id: 1, title: "Đất Xanh", description: "Trải nghiệm web tour ảo 360° cho bất động sản", image: BASE_URL + "datxanh.svg", tags: ["VR", "360°", "Bất động sản"] },
  { id: 2, title: "Opaciti & Privé", description: "Trải nghiệm web phong cách sống sang trọng với kể chuyện sống động", image: BASE_URL + "opacity.svg", tags: ["UI/UX", "Sang trọng", "Hoạt ảnh"] },
  { id: 3, title: "Văn Miếu Hà Nội", description: "Chuyến tham quan ảo di tích lịch sử với yếu tố giáo dục", image: BASE_URL + "vanmieu.svg", tags: ["VR", "Văn hóa", "Giáo dục"] },
  { id: 4, title: "Trường học Harizon", description: "Trải nghiệm quảng bá trường học tương tác cùng tour ảo khuôn viên", image: BASE_URL + "harizon.svg", tags: ["Giáo dục", "3D", "Tương tác"] },
  { id: 5, title: "Bảo Tàng Đền Thờ Bác", description: "Triển lãm ảo với tương tác đa phương tiện cho hiện vật lịch sử", image: BASE_URL + "denthobac.svg", tags: ["VR", "Bảo tàng", "Tương tác"] },
  { id: 6, title: "Chùa Minh Đức Quảng Ngãi", description: "Trải nghiệm ảo cho các điểm tham quan và hoạt động giải trí", image: BASE_URL + "chuaminhduc.svg", tags: ["3D", "Giải trí", "Tương tác"] },
  { id: 7, title: "Gạch Trường Thịnh", description: "Tour ảo cho các cửa hàng và không gian thương mại", image: BASE_URL + "truongthinh.svg", tags: ["360°", "Thương mại", "UI/UX"] },
  { id: 8, title: "Khu nghỉ dưỡng", description: "Trải nghiệm ảo cho các khu nghỉ dưỡng và tiện ích", image: BASE_URL + "khunghiduong.svg", tags: ["VR", "Du lịch", "Tương tác"] },
  { id: 9, title: "Lahome", description: "Bất động sản", image: BASE_URL + "truongthinh.svg", tags: ["VR", "Du lịch", "Tương tác"] },
  { id: 10, title: "Waiterpoint", description: "Bất động sản", image: BASE_URL + "opacity.svg", tags: ["VR", "Du lịch", "Tương tác"] },
  { id: 11, title: "Gempark", description: "Bất động sản", image: BASE_URL + "denthobac.svg", tags: ["VR", "Du lịch", "Tương tác"] },
  { id: 12, title: "SwanBay", description: "Bất động sản", image: BASE_URL + "khunghiduong.svg", tags: ["VR", "Du lịch", "Tương tác"] },
]



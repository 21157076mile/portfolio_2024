const images = [
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_6291_pa1hzj.jpg",
    alt: "Miếu Nổi Phù Châu",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710984/mieunoi_nguhanhmon_fx2cyy.jpg",
    alt: "Miếu Nổi Phù Châu - Ngũ Hành Môn",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712712138/ben_binh_dong_spfjup.jpg",
    alt: "Bến Bình Đông",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706887989/IMG_5590_urfx1m.jpg",
    alt: "Bình Dương",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710975/hosamac_hdef0s.jpg",
    alt: "Hồ Sa Mạc",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886115/IMG_5370_u0qgen.jpg",
    alt: "Cần Giờ",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_5786_jftlov.jpg",
    alt: "Tân An",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710985/mung3_mx70mf.jpg",
    alt: "Mùng 3 Tết",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712712138/langmai_t9b89s.jpg",
    alt: "Làng Mai Bình Lợi",
  },
];

export default function Hobbies() {
  return (
    <>
      <p>
        I am so into cycling to the countryside, go through uncharted territory,
        enjoy slow living amid lush greenery, expansive rice fields... and get
        some fresh air.
      </p>

      <div className="mx-auto pt-5 px-5">
        <div className="columns-2 gap-1 sm:columns-3 sm:gap-3 [&>img:not(:first-child)]:mt-1 sm:[&>img:not(:first-child)]:mt-3">
          {images.map((image, index) => (
            <img
              key={index}
              className="h-auto max-w-full"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}

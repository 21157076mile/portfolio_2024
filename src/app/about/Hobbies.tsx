// import Image from "next/image";

const images = [
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_5786_jftlov.jpg",
    alt: "Tân An",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_6291_pa1hzj.jpg",
    alt: "Miếu Nổi Phù Châu",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886115/IMG_5370_u0qgen.jpg",
    alt: "Cần Giờ",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706888807/IMG_6388_2_mytzpw.jpg",
    alt: "Bến Bình Đông",
  },
  // {
  //   src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886113/IMG_6290_jsjajb.jpg",
  //   alt: "Gò Vấp",
  // },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706887989/IMG_5590_urfx1m.jpg",
    alt: "Bình Dương",
  },
];

export default function Hobbies() {
  return (
    <>
      <p>
        I love cycling to the countryside. I want to go through uncharted
        territory, enjoy slow living amid lush greenery, expansive rice
        fields... and get some fresh air.
      </p>

      <div className="pt-5">
        <div className="columns-2 gap-1 sm:columns-3 md:columns-3 [&>img:not(:first-child)]:mt-1">
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

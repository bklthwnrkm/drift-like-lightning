import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import { ImageProps } from "next/image";
import "@splidejs/splide/css";
import "@splidejs/react-splide/css";
import Image from "@/components/image";

type SliderProps = { images: Pick<ImageProps, "alt" | "src">[] } & SplideProps;

const Slider = ({ images, ...rest }: SliderProps) => {
  return (
    <Splide aria-label="carousel slider" {...rest}>
      {images.map((image) => (
        <SplideSlide className="relative max-w-full h-[480px]">
          <Image
            alt={image.alt}
            src={image.src}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;

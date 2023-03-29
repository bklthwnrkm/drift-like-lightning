import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "@splidejs/react-splide/css";
import Image from "@/components/image";

const Slider = () => {
  return (
    <Splide
      aria-label="carousel slider"
      options={{
        autoplay: true,
        interval: 2500,
        rewind: true,
      }}
    >
      <SplideSlide className="relative w-[640px] h-[480px]">
        <Image
          alt="Eiken grade 1 certification"
          src="/static/images/eiken-grade-1.jpg"
          fill
          style={{ objectFit: "cover" }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          alt="NASM PES certification"
          src="/static/images/nasm-pes.jpg"
          fill
          style={{ objectFit: "cover" }}
        />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;

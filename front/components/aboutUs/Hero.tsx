import Image from "next/image";
import mainImg from "@/assets/image/sdenc_main.png";

export default function Hero() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 h-[400px]">
      {/* 배경 이미지 */}
      <Image
        src={mainImg}
        alt="SD E&C"
        fill
        className="object-cover"
        priority
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-[rgba(26,54,93,0.6)]" />

      {/* 텍스트 */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">SD E&C</h1>
        <p className="text-lg tracking-wide">
          구조 안전의 핵심, 기술로 신뢰를 설계합니다.
        </p>
      </div>
    </div>
  );
}
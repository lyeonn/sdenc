import Image, { StaticImageData } from "next/image";

interface BusinessCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function BusinessCard({ title, description, image }: BusinessCardProps) {
  return (
    <div className="group">
      {/* 제목 */}
      <h2 className="text-xl font-bold text-[#1a365d] mb-4">{title}</h2>

      {/* 사진 + hover 시 설명 오버레이 */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* hover 오버레이 */}
        <div className="absolute inset-0 bg-[rgba(26,54,93,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <p className="text-white text-sm leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
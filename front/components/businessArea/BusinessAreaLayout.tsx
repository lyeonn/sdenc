import Image from "next/image";

const businessItems = [
  {
    title: "특화해석",
    description:
      "SSI(구조물-지반 상호작용), CFD(전산유체역학), 열해석 등 고난도 특화해석을 통해 구조물의 안전성과 성능을 정밀하게 검증합니다.",
    image: "/images/business-analysis.jpg",
  },
  {
    title: "상세구조해석",
    description:
      "교량, 항만, 철도 등 대형 토목구조물의 상세 구조해석을 수행하여 설계의 신뢰성을 높이고, 최적의 구조 솔루션을 제공합니다.",
    image: "/images/business-structure.jpg",
  },
  {
    title: "RND 지원",
    description:
      "최신 연구개발 동향을 바탕으로 구조 분야 R&D를 지원하며, 혁신적인 기술 개발과 실무 적용을 함께 수행합니다.",
    image: "/images/business-rnd.jpg",
  },
];

export default function BusinessAreaLayout() {
  return (
    <div className="py-16">
      {/* 페이지 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-4">사업분야</h1>
        <p className="text-gray-500">
          구조 안전의 핵심, SD E&C의 전문 영역을 소개합니다.
        </p>
      </div>

      {/* 사업 카드 목록 */}
      <div className="flex flex-col gap-24">
        {businessItems.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-center gap-12 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            {/* 이미지 */}
            <div className="relative w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 텍스트 */}
            <div className="w-1/2">
              <span className="text-sm font-semibold text-[#2b6cb0] tracking-wide uppercase mb-2 block">
                0{index + 1}
              </span>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import BusinessCard from "@/components/businessArea/BusinessAreaLayout";
import analysisImg from "@/assets/image/analysis.png";
import velccImg from "@/assets/image/VELCC.png";
import softwareImg from "@/assets/image/software.png";

const businessItems = [
  {
    title: "특화해석",
    description:
      "SSI(구조물-지반 상호작용), CFD(전산유체역학), 열해석 등 고난도 특화해석을 통해 구조물의 안전성과 성능을 정밀하게 검증합니다.",
    image: analysisImg,
  },
  {
    title: "VE/LCC 및 유지관리",
    description:
      "교량, 항만, 철도 등 대형 토목구조물의 상세 구조해석을 수행하여 설계의 신뢰성을 높이고, 최적의 구조 솔루션을 제공합니다.",
    image: velccImg,
  },
  {
    title: "구조설계",
    description:
      "최신 연구개발 동향을 바탕으로 구조 분야 R&D를 지원하며, 혁신적인 기술 개발과 실무 적용을 함께 수행합니다.",
    image: velccImg, // TODO: 구조설계 이미지 추가 후 교체
  },
  {
    title: "소프트웨어개발",
    description:
      "최신 연구개발 동향을 바탕으로 구조 분야 R&D를 지원하며, 혁신적인 기술 개발과 실무 적용을 함께 수행합니다.",
    image: softwareImg,
  },
];

export default function BusinessArea() {
  return (
    <div className="min-h-screen bg-white py-16">
      {/* 페이지 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-4">사업분야</h1>
        <p className="text-gray-500">
          구조 안전의 핵심, SD E&C의 전문 영역을 소개합니다.
        </p>
      </div>

      {/* 사업 카드 목록 - 한 행에 2개 */}
      <div className="grid grid-cols-2 gap-8">
        {businessItems.map((item) => (
          <BusinessCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

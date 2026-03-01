interface AboutUsSectionProps {
  children: React.ReactNode;
}

function AboutUsSection({ children }: AboutUsSectionProps) {
  return <section className="py-16">{children}</section>;
}

export default function AboutUsLayout() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* 회사 소개 섹션 */}
      <AboutUsSection>
        <h2 className="text-3xl font-bold text-[#1a365d] mb-8">회사소개</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          SD E&C (에스디이엔씨㈜) is a specialized engineering firm dedicated to
          structural safety and innovation. Led by Representative Lim Dong-chul,
          we leverage cutting-edge technology in structural design and analysis.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We specialize in complex civil structures including bridges, ports,
          and railways, utilizing cutting-edge analysis techniques (SSI, CFD,
          Thermal Analysis) to ensure safety and efficiency.
        </p>

        {/* 통계 */}
        <div className="flex gap-24">
          <div>
            <p className="text-4xl font-bold text-[#1a365d]">2025</p>
            <p className="text-base text-gray-500">Established</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#1a365d]">100+</p>
            <p className="text-base text-gray-500">Projects</p>
          </div>
        </div>
      </AboutUsSection>
    </div>
  );
}

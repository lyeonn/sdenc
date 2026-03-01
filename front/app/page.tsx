import Image from "next/image";
import Link from "next/link";
import mainImg from "@/assets/image/sdenc_main.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[600px]">
        <Image
          src={mainImg}
          alt="SD E&C"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,54,93,0.85)] to-[rgba(26,54,93,0.4)]" />
        <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center">
          <p className="text-blue-200 text-lg font-medium mb-4 tracking-wide">
            Structural Design & Engineering Construction
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            구조 안전의 핵심,
            <br />
            기술로 신뢰를 설계합니다.
          </h1>
          <p className="text-lg text-gray-200 max-w-[520px] mb-10 leading-relaxed">
            교량, 항만, 철도 등 대형 토목구조물의 구조설계 및 특화해석 전문기업
          </p>
          <div className="flex gap-4">
            <Link
              href="/aboutUs"
              className="px-8 py-3 bg-white text-[#1a365d] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              회사소개
            </Link>
            <Link
              href="/businessArea"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              사업분야
            </Link>
          </div>
        </div>
      </div>

      {/* 핵심 역량 섹션 */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-4">
          핵심 역량
        </h2>
        <p className="text-gray-500 text-center mb-14">
          SD E&C가 제공하는 전문 서비스
        </p>

        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "특화해석",
              desc: "SSI, CFD, 열해석 등 고난도 특화해석",
              icon: "01",
            },
            {
              title: "구조설계",
              desc: "대형 토목구조물 상세 구조설계",
              icon: "02",
            },
            {
              title: "VE/LCC",
              desc: "가치공학 및 생애주기비용 분석",
              icon: "03",
            },
            {
              title: "S/W 개발",
              desc: "구조 분야 전문 소프트웨어 개발",
              icon: "04",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-xl border border-gray-100 hover:border-[#1a365d] hover:shadow-lg transition-all duration-300 cursor-pointer">
              <span className="text-3xl font-bold text-[#1a365d]/20 group-hover:text-[#1a365d]/40 transition-colors">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold text-[#1a365d] mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 숫자로 보는 SD E&C */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1a365d] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 text-center text-white">
            {[
              { num: "2014", label: "설립연도" },
              { num: "100+", label: "참여 프로젝트" },
              { num: "50+", label: "협력사" },
              { num: "10+", label: "보유 면허" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold mb-2">{item.num}</p>
                <p className="text-blue-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
          프로젝트가 있으신가요?
        </h2>
        <p className="text-gray-500 mb-10">
          SD E&C와 함께 안전하고 효율적인 구조 솔루션을 만들어보세요.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-[#1a365d] text-white font-semibold rounded-lg hover:bg-[#2a4a7d] transition-colors text-lg">
          문의하기
        </Link>
      </div>
    </div>
  );
}

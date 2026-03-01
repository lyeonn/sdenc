import KakaoMap from "./map";

export default function Location() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-[#1a365d] mb-8">오시는 길</h2>

      <div className="mb-8 text-lg text-gray-600 space-y-2">
        <p>주소: 서울특별시 ○○구 ○○로 123</p>
        <p>전화: 02-1234-5678</p>
      </div>

      <KakaoMap />
    </div>
  );
}

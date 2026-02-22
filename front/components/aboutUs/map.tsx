"use client"; //이 컴포넌트를 브라우저(클라이언트)에서 실행하겠다.
import Script from "next/script"; //next.js의 Script 컴포넌트
import { useRef } from "react"; //DOM 요소를 직접 참조하기 위한 React 훅

declare global {
  //typescript에게 window.kakao가 존재한다고 알림
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (!mapRef.current) return;
    const { kakao } = window;
    kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new kakao.maps.Map(mapRef.current, options);
    });
  };
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div ref={mapRef} className="w-[500px] h-[400px]" />
    </>
  );
}

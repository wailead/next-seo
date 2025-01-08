# 와이리드 (Wailead)

## 소개
기존 서비스 되고 있는 와이리의 플러터 웹앱을

Next.js 로 마이그레이션 하여 SEO 를 적용하는 프로젝트 입니다.

## 기술 스택
- **Frontend Framework**: Next.js 15.0.3
- **UI Library**: React 19 (RC)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Package Manager**: pnpm 9.14.3

## 주요 기능
- 인플루언서 페이지
- 광고주 페이지

### 필수 요구사항
- Node.js
- pnpm 9.14.3

## 설치 및 실행
### 의존성 설치
`pnpm install`
### 개발 서버 실행
`pnpm run dev`

## 패키지 구조
📦(route)
 ┣ 📂(advertiser)
 ┃ ┣ 📂_view
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜AboutBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ItemCarousel.tsx
 ┃ ┃ ┃ ┗ 📜About.tsx
 ┃ ┃ ┣ 📂company-banner
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜SlideBanner.tsx
 ┃ ┃ ┃ ┗ 📜CompanyBanner.tsx
 ┃ ┃ ┣ 📂goverment-banner
 ┃ ┃ ┃ ┗ 📜GovermentBanner.tsx
 ┃ ┃ ┣ 📂inquiry
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜InquiryInput.tsx
 ┃ ┃ ┃ ┃ ┗ 📜InquiryRadio.tsx
 ┃ ┃ ┃ ┗ 📜Inquiry.tsx
 ┃ ┃ ┣ 📂more-service
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜ServiceCard.tsx
 ┃ ┃ ┃ ┗ 📜MoreService.tsx
 ┃ ┃ ┣ 📂our-services
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜AgencyService.tsx
 ┃ ┃ ┃ ┗ 📜OurServices.tsx
 ┃ ┃ ┣ 📂partners
 ┃ ┃ ┃ ┗ 📜Partners.tsx
 ┃ ┃ ┣ 📂performance
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜PerformanceBox.tsx
 ┃ ┃ ┃ ┗ 📜Performance.tsx
 ┃ ┃ ┣ 📂promotion-video
 ┃ ┃ ┃ ┗ 📜PromotionVideo.tsx
 ┃ ┃ ┣ 📂question
 ┃ ┃ ┃ ┗ 📜Question.tsx
 ┃ ┃ ┣ 📂reference
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜ReferenceCard.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ReferenceSlideX.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ReferenceSlideY.tsx
 ┃ ┃ ┃ ┗ 📜Reference.tsx
 ┃ ┃ ┗ 📂service-introduction
 ┃ ┃ ┃ ┗ 📜ServiceIntroduction.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂influencer
 ┃ ┣ 📂_view
 ┃ ┃ ┣ 📂campaign
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜CampaignCard.tsx
 ┃ ┃ ┃ ┃ ┗ 📜campaign-qr-code.tsx
 ┃ ┃ ┃ ┣ 📜Campaign.tsx
 ┃ ┃ ┃ ┗ 📜CampaignModal.tsx
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂introduction
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜introduction-box.tsx
 ┃ ┃ ┃ ┗ 📜Introduction.tsx
 ┃ ┃ ┣ 📂join-banner
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜JoinBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📜app-store-buttons.tsx
 ┃ ┃ ┃ ┃ ┗ 📜phone-image-box.tsx
 ┃ ┃ ┃ ┗ 📜JoinBanner.tsx
 ┃ ┃ ┣ 📂mainheader
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜qr-code.tsx
 ┃ ┃ ┃ ┗ 📜Mainheader.tsx
 ┃ ┃ ┣ 📂marketing-banner
 ┃ ┃ ┃ ┗ 📜MarketingBanner.tsx
 ┃ ┃ ┣ 📂question
 ┃ ┃ ┃ ┗ 📜Question.tsx
 ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┗ 📜Review.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂marketing
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜page.tsx
 ┗ 📜layout.tsx

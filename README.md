# 🍷 Warchive (Wine Archive)

와인 검색과 개인 다이어리 기능을 제공하는 웹 애플리케이션입니다.
<br />
실제 와인 데이터를 기반으로 한 검색 기능과 개인의 와인 경험을 기록할 수 있는 다이어리 기능을 제공합니다.

`프로젝트 시작일: 2025-09-06 (진행중)`

## 🕹️ 주요 기능

- **와인 검색**: 와인명, 와이너리, 지역별 검색<br />
- **필터링**: 카테고리, 국가, 지역별 필터<br />
- **개인 다이어리**: 와인 시음 경험 기록 및 관리<br />
- **사용자 인증**: 개인별 데이터 분리 및 보안<br />
- **반응형 디자인**: 모바일 친화적 UI/UX

## 🛠 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: TailwindCSS, shadcn/ui
- **State**: TanStack Query v5 (서버 상태), Zustand (UI/세션 상태)
- **Backend**: Supabase (Auth + DB)
- **Auth**: Auth.js
- **배포/패키지 관리**: Vercel, pnpm
- **코드 품질**: ESLint, Prettier, Husky, lint-staged

### 🔧 개발 환경 및 규칙

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

## 📊 데이터 소스

- **와인 데이터**
- API: SampleAPIs Wines
- 데이터 규모: 3,254개의 실제 와인 정보
- 카테고리: 적포도주, 백포도주, 스파클링, 로제, 디저트 와인, 포트 와인

### 데이터 처리 파이프라인

```
External API → Image Validation → Data Parsing → Database Storage
     ↓              ↓                ↓              ↓
SampleAPIs    PNG 이미지 검증    지역정보 구조화   Supabase
```

## 📝 현재 진행 상황

### 0. 기획 및 디자인

[기획 및 디자인 구성 페이지 링크](https://heejiney.notion.site/6-26793c314ccb802e8bb2e330bb1f3e0d?source=copy_link)

### 1. 데이터 기반 구축

- [x] 외부 API 통합 및 데이터 수집 자동화 (/scripts/fetchWines.ts)
- [x] 데이터 품질 검증 및 구조화

### 2. 데이터베이스 & 인증

- [ ] Supabase 설정 및 테이블 생성
- [x] 사용자 인증 시스템 구현 (Supabase Auth)
- [ ] CSV 데이터 마이그레이션 (-> Supabase)

### 3. 핵심 기능 개발

- 와인 검색 및 필터링 UI
- 개인 다이어리 CRUD 기능
- 반응형 디자인 구현

## 🔥 프로젝트 목표

### 기술적 목표

- 실무 중심 기술스택 경험 및 활용
- 데이터 파이프라인 구축 역량 개발
- 사용자 중심 UI/UX 설계 및 구현
- 점진적 기능 확장 및 유지보수 용이성 확보

### 비지니스적 목표

- 실제 사용 가능한 서비스 개발
- 데이터 기반 UI/UX 인사이트 생성
  <br/>

---

### 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 개발되었습니다.

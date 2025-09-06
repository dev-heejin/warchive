import fs from 'fs/promises';
import path from 'path';

interface Wine {
  category: string;
  id?: number;
  image: string;
  location: {
    nation: string;
    region: string;
  };
  rating: {
    average: string;
    reviews: string;
  };
  wine: string;
  winery: string;
}

interface WineApiResponse {
  id?: number;
  image: string;
  location: string;
  rating: {
    average: string;
    reviews: string;
  };
  wine: string;
  winery: string;
}

const WINE_CATEGORIES = ['reds', 'whites', 'sparkling', 'rose', 'dessert', 'port'];
const BASE_URL = 'https://api.sampleapis.com/wines';

function convertToCSV(wines: Wine[]): string {
  if (wines.length === 0) return '';

  const headers = [
    'id',
    'wine',
    'winery',
    'rating_average',
    'rating_reviews',
    'location_nation',
    'location_region',
    'image',
    'category',
  ];

  // CSV 데이터 행
  const rows = wines.map((wine) => {
    return [
      wine.id || '',
      `"${wine.wine?.replace(/"/g, '""') || ''}"`,
      `"${wine.winery?.replace(/"/g, '""') || ''}"`,
      wine.rating?.average || '',
      wine.rating?.reviews || '',
      `"${wine.location?.nation?.replace(/"/g, '""') || ''}"`,
      `"${wine.location?.region?.replace(/"/g, '""') || ''}"`,
      wine.image || '',
      wine.category || '',
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\n');
}

async function fetchAllWines() {
  try {
    console.log('와인 데이터 수집 시작');

    const allWines: Wine[] = [];

    for (const category of WINE_CATEGORIES) {
      const wines = await fetchWinesByCategory(category);
      allWines.push(...wines);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log(`총 ${allWines.length}개의 와인 데이터 수집 완료`);

    if (allWines.length === 0) {
      console.log('수집된 와인 데이터가 없습니다. 스크립트를 종료합니다.');
      return;
    }

    const csvData = convertToCSV(allWines);

    const dataDir = path.join(process.cwd(), 'public', 'data');
    await fs.mkdir(dataDir, { recursive: true });

    const csvPath = path.join(dataDir, 'wines.csv');
    await fs.writeFile(csvPath, csvData, 'utf8');

    console.log(`csv 파일 생성 완료: ${csvPath} | ${allWines.length}개의 와인 데이터 저장 완료`);
  } catch (error) {
    console.error('와인 데이터 수집 중 오류 발생:', error);
    process.exit(1);
  }
}

async function fetchWinesByCategory(category: string): Promise<Wine[]> {
  try {
    console.log(`${category} 와인 데이터 가져오는 중...`);
    const response = await fetch(`${BASE_URL}/${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error ! status: ${response.status}`);
    }

    const data: WineApiResponse[] = await response.json();

    const wines: Wine[] = [];

    for (const wine of data) {
      if (wine.image && (await isValidThumbnail(wine.image))) {
        const parsedLocation = parseLocation(wine.location || '');

        wines.push({
          ...wine,
          category,
          location: parsedLocation,
        });
      }
    }
    return wines;
  } catch (error) {
    console.error(`${category} 와인 가져오기 실패`, error);
    return [];
  }
}

async function isValidThumbnail(imageUrl: string): Promise<boolean> {
  try {
    const response = await fetch(imageUrl, {
      method: 'HEAD',
    });

    const contentType = response.headers.get('Content-Type');

    return (
      response.ok && (contentType?.includes('image/png') || imageUrl.toLowerCase().endsWith('.png'))
    );
  } catch (error) {
    console.error('Thumbnail validation error:', error);
    return false;
  }
}

// location 문자열을 파싱하여 구조화
function parseLocation(locationStr: string): { nation: string; region: string } {
  if (!locationStr || locationStr.trim() === '') {
    return { nation: '', region: '' };
  }

  // "France\n·\nChambertin Grand Cru" 형태를 파싱
  const parts = locationStr.split(/\n·\n|\n·|·\n/);

  if (parts.length >= 2) {
    return {
      nation: (parts[0] || '').trim(),
      region: (parts[1] || '').trim(),
    };
  } else if (parts.length === 1) {
    // 구분자가 없는 경우, 알려진 국가명으로 판단
    const knownCountries = [
      'France',
      'Italy',
      'Spain',
      'Portugal',
      'United States',
      'Australia',
      'Argentina',
      'Chile',
      'Germany',
      'Austria',
      'South Africa',
      'Hungary',
      'Macedonia',
      'New Zealand',
    ];

    const location = (parts[0] || '').trim();
    const foundCountry = knownCountries.find((country) => location.includes(country));

    if (foundCountry) {
      return {
        nation: foundCountry,
        region: location.replace(foundCountry, '').replace(/^[,\s]+|[,\s]+$/g, ''),
      };
    } else {
      // 국가명을 찾을 수 없으면 전체를 region으로 처리
      return {
        nation: '',
        region: location,
      };
    }
  }

  return { nation: '', region: '' };
}

fetchAllWines();

export { fetchAllWines };

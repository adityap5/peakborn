import { TourPackage, Destination, TravelGuideArticle, CompanyInfo } from '@/types';

export function generateTravelAgencyJsonLd(company: CompanyInfo, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: company.name,
    description: company.tagline,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'S/O Rohitas Singh Tomar, Rajan Kunj Nagla Kishan Lal, Hathras Road, Naraich, Kuberpur, PO: Yamuna Bridge',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      postalCode: '282006',
      addressCountry: 'IN',
    },
    url: siteUrl,
  };
}

export function generateTourJsonLd(tour: TourPackage, company: CompanyInfo, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.shortDescription,
    touristType: tour.bestFor,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day) => ({
        '@type': 'ListItem',
        position: day.dayNumber,
        item: {
          '@type': 'TouristAttraction',
          name: day.title,
          description: day.description,
        },
      })),
    },
    provider: {
      '@type': 'TravelAgency',
      name: company.name,
      telephone: company.phone,
      email: company.email,
      url: siteUrl,
    },
  };
}

export function generateDestinationJsonLd(destination: Destination, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    url: `${siteUrl}/destinations/${destination.id}`,
    includesAttraction: destination.highlights.map((highlight) => ({
      '@type': 'TouristAttraction',
      name: highlight,
    })),
  };
}

export function generateArticleJsonLd(article: TravelGuideArticle, company: CompanyInfo, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/travel-guide/${article.slug}`,
    },
  };
}

export function generateBreadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

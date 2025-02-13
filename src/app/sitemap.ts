export default async function sitemap() {
    const baseUrl = 'https://tamuformulaelectric.com';
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ame22`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ame23`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ame24`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ame25`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/get-involved`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/meet-the-team`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      }
    ]
  }
# Prashant Foundation Website

This project is built using the Next.js framework and TypeScript, along with Tailwind CSS and Shadcn UI libraries. The webpage responsiveness is optimized for various devices.

## Fetching API Data

The data for series and FAQ is fetched using the following technique:

```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3');
      const data = await response.json();
      setSeries(data.courses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
```
Project Demo
To view the project, you can visit the deployed version on Vercel:

Prashant Foundation Website

Alternatively, you can clone this repository and run it locally:

bash
Copy code
git clone <repository_url>
cd <project_directory>
npm install
npm run dev

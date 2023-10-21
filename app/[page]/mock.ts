export const mockPageData = [
  {
    id: '123456789',
    title: 'About',
    handle: 'about',
    body: `
  
      <p>This website is built with <strong>Next.js Commerce</strong>, which is a ecommerce template for creating a headless Shopify storefront.</p>
  
      <h2>Support for real-world commerce features including:</h2>
      <ul>
          <li>Out of stocks</li>
          <li>Order history</li>
          <li>Order status</li>
          <li>Cross variant / option availability (aka. Amazon style)</li>
          <li><strong>Hidden products</strong></li>
          <li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li>
          <li>Seamless and secure checkout via <strong>Shopify Checkout</strong></li>
          <li>And more!</li>
      </ul>
  
      <p>This template also allows us to highlight newer Next.js features including:</p>
      <ul>
          <li>Next.js App Router</li>
          <li>Optimized for SEO using Next.js's Metadata</li>
          <li>React Server Components (RSCs) and Suspense</li>
          <li>Server Actions for mutations</li>
          <li>Edge runtime</li>
          <li>New Next.js 13 fetching and caching paradigms</li>
          <li>Dynamic OG images</li>
          <li>Styling with Tailwind CSS</li>
          <li>Automatic light/dark mode based on system settings</li>
          <li>And more!</li>
      </ul>
  `,
    bodySummary:
      'This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. It highlights newer Next.js features and supports real-world commerce functionalities.',
    seo: {
      title: 'About | Next.js Commerce',
      description: 'Learn more about the Next.js Commerce template and its features.',
      image: 'path-to-your-seo-image.jpg'
    },
    createdAt: '2023-07-18T10:00:00.000Z',
    updatedAt: '2023-07-18T12:00:00.000Z'
  },
  {
    id: '123456789',
    title: 'Terms & Conditions',
    handle: 'terms-and-conditions',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.</p>',
    bodySummary: 'Terms and conditions for the website.',
    seo: {
      title: 'Terms & Conditions',
      description: 'Terms and conditions for the website.',
      image: null,
      url: 'https://yourwebsite.com/terms-and-conditions'
    },
    createdAt: '2023-04-19T12:00:00Z',
    updatedAt: '2023-04-20T12:00:00Z'
  },
  {
    id: '987654321',
    title: 'Privacy Policy',
    handle: 'privacy-policy',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.</p>',
    bodySummary: 'Privacy policy for the website.',
    seo: {
      title: 'Privacy Policy',
      description: 'Privacy policy for the website.',
      image: null,
      url: 'https://yourwebsite.com/privacy-policy'
    },
    createdAt: '2023-04-19T12:30:00Z',
    updatedAt: '2023-04-20T12:30:00Z'
  }
];

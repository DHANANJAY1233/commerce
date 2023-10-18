export const homePageItems = [
  {
    id: '1',
    handle: 'product-handle-1',
    availableForSale: true,
    title: 'T Shirt',
    description: 'This is the description for product 1.',
    descriptionHtml: '<p>This is the description for product 1.</p>',
    options: [{ id: 'option1', name: 'Color', values: ['Red', 'Blue', 'Green'] }],
    priceRange: {
      maxVariantPrice: { amount: '2000', currencyCode: 'USD' },
      minVariantPrice: { amount: '1000', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant1',
            title: 'Variant Title 1',
            price: '1500'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
      alt: 'Image 1'
    },
    images: [
      { src: 'https://example.com/image1.jpg', alt: 'Image 1' },
      { src: 'https://example.com/image2.jpg', alt: 'Image 2' }
    ],
    seo: { title: 'SEO Title 1', description: 'SEO Description 1' },
    tags: ['Tag1', 'Tag2'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
  {
    id: '2',
    handle: 'product-handle-2',
    availableForSale: true,
    title: 'Bag',
    description: 'This is the description for product 2.',
    descriptionHtml: '<p>This is the description for product 2.</p>',
    options: [{ id: 'option2', name: 'Size', values: ['Small', 'Medium', 'Large'] }],
    priceRange: {
      maxVariantPrice: { amount: '3000', currencyCode: 'USD' },
      minVariantPrice: { amount: '1500', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant2',
            title: 'Variant Title 2',
            price: '2250'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75',
      alt: 'Image 2'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image2.jpg', alt: 'Image 2' }
        }
      ]
    },
    seo: { title: 'SEO Title 2', description: 'SEO Description 2' },
    tags: ['Tag3', 'Tag4'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
  {
    id: '3',
    handle: 'product-handle-3',
    availableForSale: false,
    title: 'Cup',
    description: 'This is the description for product 3.',
    descriptionHtml: '<p>This is the description for product 3.</p>',
    options: [{ id: 'option3', name: 'Material', values: ['Cotton', 'Polyester', 'Silk'] }],
    priceRange: {
      maxVariantPrice: { amount: '4000', currencyCode: 'USD' },
      minVariantPrice: { amount: '2000', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant3',
            title: 'Variant Title 3',
            price: '3000'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=3840&q=75',
      alt: 'Image 3'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image3.jpg', alt: 'Image 3' }
        }
      ]
    },
    seo: { title: 'SEO Title 3', description: 'SEO Description 3' },
    tags: ['Tag5', 'Tag6'],
    updatedAt: '2023-10-17T00:00:00Z'
  }
];

export const carouselProductList = [
  {
    id: '4',
    handle: 'product-handle-4',
    availableForSale: true,
    title: 'Beanie',
    description: 'This is the description for product 4.',
    descriptionHtml: '<p>This is the description for product 4.</p>',
    options: [{ id: 'option4', name: 'Pattern', values: ['Striped', 'Solid', 'Checkered'] }],
    priceRange: {
      maxVariantPrice: { amount: '2500', currencyCode: 'USD' },
      minVariantPrice: { amount: '1200', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant4',
            title: 'Variant Title 4',
            price: '1850'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1200&q=75',
      alt: 'Image 4'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image4.jpg', alt: 'Image 4' }
        }
      ]
    },
    seo: { title: 'SEO Title 4', description: 'SEO Description 4' },
    tags: ['Tag7', 'Tag8'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
  {
    id: '5',
    handle: 'product-handle-5',
    availableForSale: false,
    title: 'Hoodie',
    description: 'This is the description for product 5.',
    descriptionHtml: '<p>This is the description for product 5.</p>',
    options: [{ id: 'option5', name: 'Fabric', values: ['Linen', 'Cotton', 'Silk'] }],
    priceRange: {
      maxVariantPrice: { amount: '3500', currencyCode: 'USD' },
      minVariantPrice: { amount: '1800', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant5',
            title: 'Variant Title 5',
            price: '2650'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1200&q=75',
      alt: 'Image 5'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image5.jpg', alt: 'Image 5' }
        }
      ]
    },
    seo: { title: 'SEO Title 5', description: 'SEO Description 5' },
    tags: ['Tag9', 'Tag10'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
  {
    id: '6',
    handle: 'product-handle-6',
    availableForSale: true,
    title: 'Onesie',
    description: 'This is the description for product 6.',
    descriptionHtml: '<p>This is the description for product 6.</p>',
    options: [{ id: 'option6', name: 'Size', values: ['Small', 'Medium', 'Large'] }],
    priceRange: {
      maxVariantPrice: { amount: '4000', currencyCode: 'USD' },
      minVariantPrice: { amount: '2000', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant6',
            title: 'Variant Title 6',
            price: '3000'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1200&q=75',
      alt: 'Image 6'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image6.jpg', alt: 'Image 6' }
        }
      ]
    },
    seo: { title: 'SEO Title 6', description: 'SEO Description 6' },
    tags: ['Tag11', 'Tag12'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
  {
    id: '7',
    handle: 'product-handle-7',
    availableForSale: false,
    title: 'Mug',
    description: 'This is the description for product 7.',
    descriptionHtml: '<p>This is the description for product 7.</p>',
    options: [{ id: 'option7', name: 'Color', values: ['Black', 'White', 'Gray'] }],
    priceRange: {
      maxVariantPrice: { amount: '4500', currencyCode: 'USD' },
      minVariantPrice: { amount: '2200', currencyCode: 'USD' }
    },
    variants: {
      edges: [
        {
          node: {
            id: 'variant7',
            title: 'Variant Title 7',
            price: '3350'
          }
        }
      ]
    },
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=828&q=75',
      alt: 'Image 7'
    },
    images: {
      edges: [
        {
          node: { src: 'https://example.com/image7.jpg', alt: 'Image 7' }
        }
      ]
    },
    seo: { title: 'SEO Title 7', description: 'SEO Description 7' },
    tags: ['Tag13', 'Tag14'],
    updatedAt: '2023-10-17T00:00:00Z'
  }
];

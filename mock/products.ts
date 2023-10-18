export const mockProductList = [
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
    variants: [
      {
        id: 'variant1',
        title: 'Variant Title 1',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Red'
          }
        ],
        price: {
          amount: '1500',
          currencyCode: 'USD'
        }
      },
      {
        id: 'variant2',
        title: 'Variant Title 2',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Blue'
          }
        ],
        price: {
          amount: '1500',
          currencyCode: 'USD'
        }
      },
      {
        id: 'variant3',
        title: 'Variant Title 3',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Green'
          }
        ],
        price: {
          amount: '1500',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
      altText: 'Image 1',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=2048&q=75',
        altText: 'Image 3',
        width: '1200',
        height: '1200'
      }
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
    variants: [
      {
        id: 'variant2',
        title: 'Variant Title 2',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Small'
          }
        ],
        price: {
          amount: '2250',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75',
      altText: 'Image 2',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-light.png%3Fv%3D1689796304&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      }
    ],
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
    variants: [
      {
        id: 'variant3',
        title: 'Variant Title 3',
        availableForSale: false,
        selectedOptions: [
          {
            name: 'Material',
            value: 'Cotton'
          }
        ],
        price: {
          amount: '3000',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=3840&q=75',
      altText: 'Image 3',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=3840&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-white.png%3Fv%3D1690003088&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      }
    ],
    seo: { title: 'SEO Title 3', description: 'SEO Description 3' },
    tags: ['Tag5', 'Tag6'],
    updatedAt: '2023-10-17T00:00:00Z'
  },
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
    variants: [
      {
        id: 'variant4',
        title: 'Variant Title 4',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Pattern',
            value: 'Striped'
          }
        ],
        price: {
          amount: '1850',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1200&q=75',
      altText: 'Image 4',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1200&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-gray.png%3Fv%3D1690002570&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-white.png%3Fv%3D1690002570&w=2048&q=75',
        altText: 'Image 3',
        width: '1200',
        height: '1200'
      }
    ],
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
    variants: [
      {
        id: 'variant5',
        title: 'Variant Title 5',
        availableForSale: false,
        selectedOptions: [
          {
            name: 'Fabric',
            value: 'Linen'
          }
        ],
        price: {
          amount: '2650',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1200&q=75',
      altText: 'Image 5',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1200&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-2.png%3Fv%3D1690003482&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      }
    ],
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
    variants: [
      {
        id: 'variant6',
        title: 'Variant Title 6',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Size',
            value: 'Small'
          }
        ],
        price: {
          amount: '3000',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1200&q=75',
      altText: 'Image 6',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=1200&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-2.png%3Fv%3D1690002631&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-black-1.png%3Fv%3D1690002631&w=2048&q=75',
        altText: 'Image 3',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-black-2.png%3Fv%3D1690002632&w=2048&q=75',
        altText: 'Image 4',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-white-1.png%3Fv%3D1690002631&w=2048&q=75',
        altText: 'Image 5',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-white-2.png%3Fv%3D1690002631&w=2048&q=75',
        altText: 'Image 6',
        width: '1200',
        height: '1200'
      }
    ],
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
    variants: [
      {
        id: 'variant7',
        title: 'Variant Title 7',
        availableForSale: false,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Black'
          }
        ],
        price: {
          amount: '3350',
          currencyCode: 'USD'
        }
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=828&q=75',
      altText: 'Image 7',
      width: '1200',
      height: '1200'
    },
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=828&q=75',
        altText: 'Image 1',
        width: '1200',
        height: '1200'
      },
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-2.png%3Fv%3D1690003527&w=2048&q=75',
        altText: 'Image 2',
        width: '1200',
        height: '1200'
      }
    ],
    seo: { title: 'SEO Title 7', description: 'SEO Description 7' },
    tags: ['Tag13', 'Tag14'],
    updatedAt: '2023-10-17T00:00:00Z'
  }
];

export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Product',
      url: '/products',
      submenu: [
        {
          title: 'Audits',
          url: 'audits',
          submenu: [
            {
                title: 'Non Purchase',
                url: 'non-purchase',
                submenu:[
                      {
                        title: 'In-store Sales Process Demo',
                        url: 'In-store-Sales-Process-Demo',
                      },
                      {
                        title: 'In-store product Demo',
                        url: 'In-store-product-Demo',
                      },
                      {
                        title: 'Visual Merchandising',
                        url: 'Visual-Merchandising',
                      },
                      {
                        title: 'Competition Product Price Check',
                        url: 'Competition-Product-Price-Check',
                      },
                      {
                        title: 'Product Packaging',
                        url: 'product-packaging',
                      },
                      {
                        title: 'Product Sampling',
                        url: 'Product-Sampling',
                      },
                      {
                        title: 'Singage Display check',
                        url: 'Singage-Display-check',
                      },
                ]
            },
            {
                title: 'Purchase',
                url: 'purchase',
                submenu:[
                      {
                        title: 'In-store Sales and Billing Compliance',
                        url: 'In-store-Sales-and-Billing-Compliance',
                      },
                      {
                        title: 'In-store Return Process Compliance',
                        url: 'In-store-Return-Process-Compliance',
                      },
                      {
                        title: 'Restaurant Service Check',
                        url: 'Restaurant-Service-Check',
                      },
                ]
            },
            {
                title: 'Web & Telphonic',
                url: 'Web-Telphonic',
                submenu:[
                      {
                        title: 'Online Purchase Product Insight/Review',
                        url: 'Online-Purchase-Product-Insight/Review',
                      },
                      {
                        title: 'Website navigation feedback',
                        url: 'Website-navigation-feedback',
                      },
                      {
                        title: 'Online Delivery process review',
                        url: 'Online-Delivery-process-review',
                      },
                      {
                        title: 'KYC Proess Reveiw',
                        url: 'KYC-Proess-Reveiw',
                      },
                ]

            },
          ]
        },

        {
          title: 'Research',
          url: 'research',
          submenu: [
            {
              title: 'Non Purchase',
              url: 'Non-Purchase',
              submenu: [
                  {
                    title: 'Product Pricing and discount check',
                    url: 'Product Pricing and discount check',
                  },
                  {
                    title: 'Brand Awareness Sample collection',
                    url: 'Brand Awareness Sample collection',
                  },
                  {
                    title: 'Product Awareness Sample Collection',
                    url: 'Product Awareness Sample Collection',
                  },
                  {
                    title: 'In-store Branding & Advertising presence',
                    url: 'In-store Branding & Advertising presence',
                  },
              ]
            },
            {
                title: 'Purchase',
                url: 'purchase',
                submenu: [
                    {
                      title: 'In-store Purchase Product Insight/Review',
                      url: 'In-store Purchase Product Insight/Review',
                    },
                    {
                      title: 'Competition Product Price Check',
                      url: 'Competition Product Price Check',
                    },
                    
                ]
              },
              {
                title: 'Web & Telephonic',
                url: 'Web-Telephonic',
                submenu: [
                    {
                      title: 'Online Purchase Product Insight/Review',
                      url: 'Online Purchase Product Insight/Review',
                    },
                    {
                      title: 'On call product pricing and discount',
                      url: 'On call product pricing and discount',
                    },
                    {
                        title: 'Competition Product Pricing and discount',
                        url: 'Competition Product Pricing and discount',
                      },
                    
                ]
              },
          ],
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
  ];
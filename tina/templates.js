export function about_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "top-title",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "content",
      label: "content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "button1Name",
      label: "button1Name",
    },
    {
      type: "string",
      name: "button2Name",
      label: "button2Name",
    },
    {
      type: "string",
      name: "button1Target",
      label: "button1Target",
    },
    {
      type: "string",
      name: "button2Target",
      label: "button2Target",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ];
}
export function blog_section_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "title",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "buttonName",
      label: "Button name",
    },
    {
      type: "string",
      name: "buttonTarget",
      label: "Button target",
    },
  ];
}
export function blog_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "featureImage",
      label: "featureImage",
    },
    {
      type: "image",
      name: "postImage",
      label: "postImage",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
    },
  ];
}
export function config_templateFields() {
  return [
    {
      type: "string",
      name: "baseURL",
      label: "baseURL",
    },
    {
      type: "string",
      name: "languageCode",
      label: "languageCode",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "theme",
      label: "theme",
    },
    {
      type: "number",
      name: "paginate",
      label: "paginate",
    },
  ];
}
export function hero_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "title",
    },
    {
      type: "string",
      name: "content",
      label: "content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "buttonName",
      label: "buttonName",
    },
    {
      type: "string",
      name: "buttonURL",
      label: "buttonURL",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "videoThumb",
      label: "videoThumb",
    },
    {
      type: "string",
      name: "videoURL",
      label: "videoURL",
    },
  ];
}
export function menus_templateFields() {
  return [
    {
      type: "object",
      name: "main",
      label: "Main menu",
      fields: [
        {
          type: "object",
          name: "main",
          label: "main",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "url",
              label: "url",
            },
            {
              type: "number",
              name: "weight",
              label: "weight",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "sitemap",
      label: "Sitemap",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
        {
          type: "number",
          name: "weight",
          label: "weight",
        },
      ],
    },
  ];
}
export function parameters_templateFields() {
  return [
    {
      type: "string",
      name: "titleSeparator",
      label: "Title separator",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "boolean",
      name: "alert",
      label: "Alert Enabled",
    },
    {
      type: "boolean",
      name: "alertDismissable",
      label: "Alert dismissable",
    },
    {
      type: "string",
      name: "alertText",
      label: "Alert text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blogPageURL",
      label: "blogPageURL",
    },
    {
      type: "image",
      name: "logo",
      label: "logo",
    },
    {
      type: "image",
      name: "footerLogo",
      label: "footerLogo",
    },
    {
      type: "string",
      name: "contactLink",
      label: "contactLink",
    },
    {
      type: "string",
      name: "copyright",
      label: "copyright",
    },
    {
      type: "string",
      name: "googleAnalytics",
      label: "googleAnalytics",
    },
    {
      type: "string",
      name: "fabformURL",
      label: "fabformURL",
    },
    {
      type: "object",
      name: "address",
      label: "address",
      fields: [
        {
          type: "string",
          name: "phone",
          label: "phone",
        },
        {
          type: "string",
          name: "email",
          label: "email",
        },
        {
          type: "string",
          name: "address",
          label: "address",
        },
        {
          type: "string",
          name: "openingHours",
          label: "openingHours",
        },
      ],
    },
    {
      type: "object",
      name: "map",
      label: "map",
      fields: [
        {
          type: "string",
          name: "APIkey",
          label: "APIkey",
        },
        {
          type: "string",
          name: "latitude",
          label: "latitude",
        },
        {
          type: "string",
          name: "longitude",
          label: "longitude",
        },
        {
          type: "image",
          name: "pinImage",
          label: "pinImage",
        },
      ],
    },
    {
      type: "object",
      name: "social",
      label: "Social",
      fields: [
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "number",
          name: "weight",
          label: "Weight",
        },
      ],
    },
  ];
}
export function product_section_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "title",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function product_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "object",
      name: "table",
      label: "Table",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
    },
    {
      type: "string",
      name: "shortDescription",
      label: "shortDescription",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function resume_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "top-title",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "tab1Name",
      label: "tab1Name",
    },
    {
      type: "string",
      name: "tab2Name",
      label: "tab2Name",
    },
    {
      type: "string",
      name: "tab1Target",
      label: "tab1Target",
    },
    {
      type: "string",
      name: "tab2Target",
      label: "tab2Target",
    },
    {
      type: "object",
      name: "education",
      label: "education",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
    {
      type: "object",
      name: "experience",
      label: "experience",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
  ];
}
export function service_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "topTitle",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "service",
      label: "Service",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Icon",
        },
      ],
    },
  ];
}
export function testimonial_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "top title",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "testimonial",
      label: "Testimonials",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "comment",
          label: "Comment",
        },
        {
          type: "string",
          name: "time",
          label: "time",
        },
        {
          type: "number",
          name: "star",
          label: "Star",
        },
      ],
    },
  ];
}

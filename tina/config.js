import { defineConfig } from "tinacms";
import { about_templateFields } from "./templates";
import { blog_section_templateFields } from "./templates";
import { blog_templateFields } from "./templates";
import { config_templateFields } from "./templates";
import { hero_templateFields } from "./templates";
import { menus_templateFields } from "./templates";
import { parameters_templateFields } from "./templates";
import { product_section_templateFields } from "./templates";
import { product_templateFields } from "./templates";
import { resume_templateFields } from "./templates";
import { service_templateFields } from "./templates";
import { testimonial_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Hero",
        name: "hero",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "About",
        name: "about",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "aboutSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Services",
        name: "services",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "serviceSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Resume",
        name: "resume",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "resumeSection",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Testimonials",
        name: "testimonials",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonialSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Product Section",
        name: "product_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "productSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Blog Section",
        name: "blog_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "blogSection",
        },
        fields: [
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
        ],
      },
      {
        format: "md",
        label: "Product",
        name: "product",
        path: "content/product",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "yaml",
        label: "Config File",
        name: "config_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
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
        ],
      },
      {
        format: "yaml",
        label: "Menus File",
        name: "menus_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menus",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yaml",
        label: "Parameters File",
        name: "parameters_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "params",
        },
        fields: [
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
        ],
      },
    ],
  },
});

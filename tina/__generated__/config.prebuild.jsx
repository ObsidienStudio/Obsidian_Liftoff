// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "403e9ac8-0d3b-4d55-bfa2-e2acc1e6d028",
  // Get this from tina.io
  token: "006256fba5595640e08c3a50d90a4ffd32789fbb",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "assets"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets"
    }
  },
  schema: {
    collections: [
      {
        name: "about",
        label: "A propos",
        path: "content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "post",
        label: "Articles",
        path: "content/posts",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-") + "/index.md"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Sommaire"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "image",
            name: "image",
            label: "Ajout image"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            label: "Auteur",
            name: "author",
            type: "string",
            list: true,
            options: [
              {
                value: "obsidian",
                label: "Obsidian"
              },
              {
                value: "betameche",
                label: "Betameche"
              },
              {
                value: "veko",
                label: "Veko"
              },
              {
                value: "kikyoe",
                label: "Kikyoe"
              },
              {
                value: "Seum",
                label: "seum"
              }
            ]
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            options: [
              {
                value: "mmo",
                label: "MMO"
              },
              {
                value: "fps",
                label: "FPS"
              },
              {
                value: "multi",
                label: "Multijoueur"
              },
              {
                value: "strategy",
                label: "Strat\xE9gie"
              },
              {
                value: "rpg",
                label: "RPG"
              }
            ]
          },
          {
            label: "Cat\xE9gories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "jeux",
                label: "Jeux"
              },
              {
                value: "musique",
                label: "Musique"
              },
              {
                value: "art",
                label: "Art"
              },
              {
                value: "cinema",
                label: "Cinema"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "projets",
        label: "Projets",
        path: "content/projets",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-") + "/index.md"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Sommaire"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "image",
            name: "image",
            label: "Ajout image"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            label: "Auteur",
            name: "author",
            type: "string",
            list: true,
            options: [
              {
                value: "jeux",
                label: "Jeux"
              },
              {
                value: "musique",
                label: "Musique"
              },
              {
                value: "art",
                label: "Art"
              },
              {
                value: "cinema",
                label: "Cinema"
              }
            ]
          },
          {
            label: "Type de projet",
            name: "project_types",
            type: "string",
            options: [
              {
                value: "obsidian",
                label: "Obsidian"
              },
              {
                value: "seum",
                label: "Seum"
              },
              {
                value: "veko",
                label: "Veko"
              }
            ]
          },
          {
            label: "Technologies",
            name: "tech_stack",
            type: "string",
            list: true,
            options: [
              {
                value: "foundry",
                label: "Foundry"
              },
              {
                value: "c#",
                label: "C#"
              },
              {
                value: "js",
                label: "JS"
              },
              {
                value: "obs",
                label: "OBS"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          }
        ]
      },
      {
        name: "jdb",
        label: "Journal de bord",
        path: "content/JDB",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "createurs",
        label: "Createurs",
        path: "content/createurs",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-") + "/index.md"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Sommaire"
          },
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "string",
            name: "feature_image",
            label: "Image principale"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "jeux",
        label: "Jeux",
        path: "content/jeux",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-") + "/index.md"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "seo_title",
            label: "Titre SEO",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Sommaire"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "string",
            name: "feature_image",
            label: "Image principale"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            options: [
              {
                value: "mmo",
                label: "MMO"
              },
              {
                value: "fps",
                label: "FPS"
              },
              {
                value: "multi",
                label: "Multijoueur"
              },
              {
                value: "strategy",
                label: "Strat\xE9gie"
              },
              {
                value: "rpg",
                label: "RPG"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

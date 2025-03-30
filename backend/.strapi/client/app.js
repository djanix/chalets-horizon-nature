/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import sentry from "@strapi/plugin-sentry/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import strapiImportExport from "strapi-import-export/strapi-admin";
import materialSymbols from "strapi-plugin-material-symbols/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    sentry: sentry,
    seo: seo,
    "users-permissions": usersPermissions,
    "strapi-import-export": strapiImportExport,
    "material-symbols": materialSymbols,
  },
});

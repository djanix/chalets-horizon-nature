'use strict';

/**
 * `page-populate-middleware` middleware
 */

// const populate = {
//   contentSections: {
//     populate: '*',
//   },
//   seo: {
//     fields: ["metaTitle", "metaDescription"],
//     populate: ["shareImage"],
//   }
// };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      pLevel: 5,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    // console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};

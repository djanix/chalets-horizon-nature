module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  'material-symbols': {
    enabled: true,
  },
  'strapi-v5-plugin-populate-deep': {
    enabled: true,
  },
  'import-export-entries': {
    enabled: false,
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('NODE_ENV') === 'production' ? env('SENTRY_DSN') : null,
      sendMetadata: true,
      init: {
        profilesSampleRate: 1,
      },
    },
  },
});

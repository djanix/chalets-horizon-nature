module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './backend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend',
      cwd: './frontend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
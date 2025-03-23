module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: '/home/jbeauchemin/chalets-horizon-nature/backend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend',
      cwd: '/home/jbeauchemin/chalets-horizon-nature/frontend',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
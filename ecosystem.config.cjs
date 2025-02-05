module.exports = {
    apps: [
      {
        name: 'morshed',
        exec_mode: 'cluster',
        instances: '1',
        env: {
          PORT: 30333,
          NITRO_HOST: '127.0.0.1',
          NODE_ENV: 'production',
        },
        script: './.output/server/index.mjs',
      },
    ],
  };
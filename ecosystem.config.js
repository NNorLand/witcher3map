module.exports = {
  apps : [
    {
      name      : 'witcher',
      script    : 'server.js',
      env: {
        NODE_ENV: "development",
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      watch: true,
      log_date_format: "YYYY-MM-DD HH:mm Z",
      merge_logs   : true,
      ignore_watch: [
        'node_modules',
        'test',
        'public'
      ]
    }
  ]
};

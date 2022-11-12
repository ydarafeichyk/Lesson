module.exports = {
  bail: false,
  color: true,
  delay: false,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  growl: false,
  parallel: false,
  recursive: false,
  reporter: 'mochawesome',
  // reporterOptions: {
  //     reportFilename: 'customReportFilename',
  //     quiet: true,
  // },
  retries: 1,
  slow: '1500',
  sort: false,
  spec: ['test/**/*.spec.js'], // the positional arguments!
  timeout: '1500', // same as "timeout: '2s'"
  watch: false,
};

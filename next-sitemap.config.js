/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://deltav.in',
  generateRobotsTxt: true,
  exclude: ['/dashboard/*', '/admin/*', '/auth/*', '/onboarding', '/api/*'],
  additionalPaths: async () => [
    { loc: '/courses/esp32-iot-fundamentals' },
    { loc: '/courses/embedded-systems-rtos' },
    { loc: '/courses/plc-industrial-automation' },
    { loc: '/courses/cubesat-design-build' },
    { loc: '/workshops/iot-esp32' },
    { loc: '/workshops/robotics-embedded' },
    { loc: '/workshops/plc-automation' },
    { loc: '/workshops/cubesat-design' },
    { loc: '/workshops/vfd-motor-drives' },
    { loc: '/workshops/online-webinar' },
  ]
}

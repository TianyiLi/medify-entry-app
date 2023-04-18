const logoPng = '/public/assets/logo/medify-logo.png';

export const defaultConfig: IRoutes = {
  title: 'Medify',
  subTitle: '官方網站',
  logoLink: logoPng,
  options: [
    {
      name: '官方網站',
      url: 'https://google.com',
    },
    {
      name: '官方網站',
      url: 'https://google.com',
    },
    {
      name: '官方網站',
      url: 'https://google.com',
    },
  ],
};

export const configRoutes = new Map<string, IRoutes>([
  [
    '/test',
    {
      title: 'Medify-test',
      subTitle: '官方網站',
      logoLink: logoPng,
      options: [
        {
          name: '官方網站',
          url: 'https://google.com',
        },
      ],
    },
  ],
]);

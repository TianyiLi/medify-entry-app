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
    '/mingshaotsai',
    {
      title: '耳鼻喉系口腔咽喉科',
      subTitle: '蔡明劭醫師',
      logoLink: 'https://medify-picture.s3.ap-southeast-1.amazonaws.com/avatars/25HOwlHlEMeXQFxOGgMSNOqnvEl1a3KXHIsbbNYN.jpg',
      options: [
        {
          name: 'MEDIFY系統連結',
          url: 'https://medify.app/doctor/10?utm_source=10&utm_medium=integrate_page',
        },
        {
          name: '蔡醫師blog',
          url: 'http://mingshaotsaimd.blogspot.com/2018/01/blog-post.html',
        },
        {
          name: '蔡醫師臉書專頁',
          url: 'https://www.facebook.com/ENTDRTSAI',
        },
        {
          name: '長庚官網',
          url: 'https://www.cgmh.org.tw/tw/Services/DoctorInfo/8031',
        },
        {
          name: '長庚掛號系統',
          url: 'https://register.cgmh.org.tw/Department/6/63500A?id=8031&name=%E8%94%A1%E6%98%8E%E5%8A%AD',
        }
      ],
    },
  ],
]);

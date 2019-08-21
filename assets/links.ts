const manufacturers = {
  link: 'https://manufacturer.bimobject.com/',
  label: 'Manufacturers'
};

const news = {
  link: 'https://www.bimobject.com/en/news',
  label: 'News'
};

const browse = {
  link: 'https://www.bimobject.com/product',
  label: 'Browse BIM objects'
};

const solutions = [
  {
    link: 'https://evo.bimobject.com',
    label: 'BIMobject EVO',
    description: 'BIMobject EVO icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-evo.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/bimobject-apps',
    label: 'Apps (plugins)',
    description: 'BIMobject Apps (plugins) icon',
    iconPath: 'assets/icons/components-icons-solutions-apps-plugins.svg'
  },
  {
    link: 'https://developer.bimobject.com',
    label: 'Developer API',
    description: 'Developer API icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-api.svg'
  },
  {
    link: 'https://bimsupply.com',
    label: 'BIMsupply',
    description: 'BIMsupply icon',
    iconPath: 'assets/icons/components-icons-solutions-bimsupply.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/bimanalytics-core',
    label: 'BIManalytics',
    description: 'BIManalytics icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-analytics.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/properties',
    label: 'Properties',
    description: 'Properties icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-properties.svg'
  },
  {
    link: 'https://bimscript.bimobject.com',
    label: 'BIMscript',
    description: 'BIMscript icon',
    iconPath: 'assets/icons/components-icons-solutions-bimscript.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/mosquito',
    label: 'Mosquito',
    description: 'Mosquito icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-mosquito.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/bimobject-cloud',
    label: 'BIMobject Cloud',
    description: 'BIMobject Cloud icon',
    iconPath: 'assets/icons/components-icons-solutions-bimobject-cloud.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions/hercules',
    label: 'Hercules Cloud',
    description: 'Hercules Cloud icon',
    iconPath: 'assets/icons/components-icons-solutions-hercules.svg'
  },
  {
    link: 'https://academy.bimobject.com',
    label: 'Academy',
    description: 'Academy icon',
    iconPath: 'assets/icons/components-icons-solutions-academy.svg'
  },
  {
    link: 'https://info.bimobject.com/solutions',
    label: 'About Solutions',
    description: 'Solutions icon',
    iconPath: 'assets/icons/about-solutions.svg'
  }
];

const about = [
  {
    link: 'https://info.bimobject.com',
    label: 'What we do'
  },
  {
    link: 'https://info.bimobject.com/investors',
    label: 'Investor relations'
  },
  {
    link: 'https://careers.bimobject.com/',
    label: 'Careers'
  },
  {
    link: 'https://info.bimobject.com/contact',
    label: 'Contact'
  }
];

const legal = [
  {
    link: 'https://accounts.bimobject.com/useragreement',
    label: 'End User License Agreement'
  },
  {
    link: 'https://accounts.bimobject.com/privacypolicy',
    label: 'Privacy Policy (GDPR)'
  },
  {
    link: 'https://accounts.bimobject.com/cbtc',
    label: 'GDPR Cross-Border Transfer'
  }
];

const social = [
  {
    link: '//www.linkedin.com/company/bimobject',
    icon: 'linkedin-in'
  },
  {
    link: '//www.facebook.com/bimobject',
    icon: 'facebook-f'
  },
  {
    link: '//www.twitter.com/bimobject',
    icon: 'twitter'
  },
  {
    link: '//www.youtube.com/user/BIMobject/videos',
    icon: 'youtube'
  }
];

const errorRedirects = [
  {
    link: 'https://www.bimobject.com',
    label: 'BIMobject® Cloud'
  },
  {
    link: 'https://www.bimobject.com/product',
    label: 'Browse BIMobjects'
  },
  {
    link: 'https://info.bimobject.com',
    label: 'Info site'
  },
  {
    link: 'https://info.bimobject.com/contact',
    label: 'Contact'
  }
];

export default { about, solutions, browse, manufacturers, legal, social, errorRedirects, news };

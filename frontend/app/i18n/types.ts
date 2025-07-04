export interface Dictionary {
  navigation: {
    home: string;
    whyWeAreHere: string;
    features: string;
    architecture: string;
    quickLinks: string;
    projectBoard: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    scrollIndicator: string;
  };
  whyWeAreHere: {
    title: string;
    description: string;
    speakers: string;
    period: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      corpus: {
        title: string;
        description: string;
      };
      ecosystem: {
        title: string;
        description: string;
      };
      search: {
        title: string;
        description: string;
      };
      saas: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  architecture: {
    title: string;
    subtitle: string;
    layers: {
      application: {
        name: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      api: {
        name: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      core: {
        name: string;
        subtitle: string;
        description: string;
        items: string[];
      };
      data: {
        name: string;
        subtitle: string;
        description: string;
        items: string[];
      };
    };
  };
  quickLinks: {
    title: string;
    subtitle: string;
    items: {
      data: {
        title: string;
        description: string;
        button: string;
      };
      store: {
        title: string;
        description: string;
        button: string;
      };
      apis: {
        title: string;
        description: string;
        button: string;
      };
    };
  };
  footer: {
    company: string;
    description: string;
    partners: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookies: string;
    wechat: {
      title: string;
      description: string;
      button: string;
      modal: {
        title: string;
        description: string;
      };
    };
  };
  language: {
    switch: string;
    en: string;
    zh: string;
    yue: string;
  };
} 
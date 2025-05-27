export interface TemplateFeature {
  name: string;
  enabled: boolean;
  options?: Record<string, unknown>;
}

export interface TemplateLayout {
  name: string;
  enabled: boolean;
  path: string;
}

export interface TemplateComponent {
  name: string;
  enabled: boolean;
  path: string;
  variants?: string[];
}

export interface TemplateConfig {
  name: string;
  description: string;
  version: string;
  author: string;
  features: {
    humanVerification: boolean;
    cookieConsent: boolean;
  };
  layouts: {
    default: boolean;
    minimal: boolean;
    modern: boolean;
  };
  components: {
    header: boolean;
    navigation: boolean;
    footer: boolean;
    home: boolean;
  };
}

export const defaultTemplate: TemplateConfig = {
  name: 'default',
  description: 'Default template with standard layout',
  version: '1.0.0',
  author: 'Your Company',
  features: {
    humanVerification: true,
    cookieConsent: true
  },
  layouts: {
    default: true,
    minimal: false,
    modern: false
  },
  components: {
    header: true,
    navigation: true,
    footer: true,
    home: true
  }
}

export const minimalTemplate: TemplateConfig = {
  name: 'minimal',
  description: 'Minimal template with simplified layout',
  version: '1.0.0',
  author: 'Your Company',
  features: {
    humanVerification: false,
    cookieConsent: true
  },
  layouts: {
    default: false,
    minimal: true,
    modern: false
  },
  components: {
    header: true,
    navigation: false,
    footer: true,
    home: true
  }
}

export const modernTemplate: TemplateConfig = {
  name: 'modern',
  description: 'Modern template with enhanced UI',
  version: '1.0.0',
  author: 'Your Company',
  features: {
    humanVerification: true,
    cookieConsent: true
  },
  layouts: {
    default: false,
    minimal: false,
    modern: true
  },
  components: {
    header: true,
    navigation: true,
    footer: true,
    home: true
  }
}

export const templates = {
  default: defaultTemplate,
  minimal: minimalTemplate,
  modern: modernTemplate
} 
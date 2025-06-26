declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Application
      NEXT_PUBLIC_APP_NAME?: string;
      NEXT_PUBLIC_APP_VERSION?: string;
      
      // API
      NEXT_PUBLIC_API_BASE_URL?: string;
      NEXT_PUBLIC_API_TIMEOUT?: string;
      
      // Feature flags
      NEXT_PUBLIC_ENABLE_ANALYTICS?: string;
      NEXT_PUBLIC_ENABLE_DEBUG_MODE?: string;
      
      // External services
      NEXT_PUBLIC_GOOGLE_API_KEY?: string;
      NEXT_PUBLIC_FACEBOOK_APP_ID?: string;
      
      // Authentication
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL?: string;
      
      // Database
      DATABASE_URL?: string;
      
      // Email
      SMTP_HOST?: string;
      SMTP_PORT?: string;
      SMTP_USER?: string;
      SMTP_PASS?: string;
      
      // Node environment
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {}; 
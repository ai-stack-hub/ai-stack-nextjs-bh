import { env, validateEnv, isDevelopment, isProduction, isTest } from './env';

describe('env', () => {
  it('reads default values', () => {
    expect(env.APP_NAME).toBeDefined();
    expect(env.APP_VERSION).toBeDefined();
    expect(typeof env.API_TIMEOUT).toBe('number');
  });

  it('parses booleans', () => {
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS = 'true';
    expect(env.ENABLE_ANALYTICS).toBe(true);
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS = 'false';
    expect(env.ENABLE_ANALYTICS).toBe(false);
  });

  it('parses numbers', () => {
    process.env.NEXT_PUBLIC_API_TIMEOUT = '1234';
    expect(env.API_TIMEOUT).toBe(1234);
  });

  it('validateEnv throws if missing required', () => {
    const old = process.env.NEXTAUTH_SECRET;
    delete process.env.NEXTAUTH_SECRET;
    expect(() => validateEnv()).toThrow();
    process.env.NEXTAUTH_SECRET = old;
  });

  it('validateEnv does not throw if present', () => {
    process.env.NEXTAUTH_SECRET = 'secret';
    expect(() => validateEnv()).not.toThrow();
  });

  it('checks environment flags', () => {
    process.env.NODE_ENV = 'development';
    expect(isDevelopment).toBe(true);
    process.env.NODE_ENV = 'production';
    expect(isProduction).toBe(true);
    process.env.NODE_ENV = 'test';
    expect(isTest).toBe(true);
  });
}); 
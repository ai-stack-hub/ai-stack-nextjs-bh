import { APP_CONSTANTS } from './constants';

describe('APP_CONSTANTS', () => {
  it('has layout dimensions', () => {
    expect(APP_CONSTANTS.HEADER_HEIGHT).toBeDefined();
    expect(APP_CONSTANTS.SIDEBAR_WIDTH).toBeDefined();
  });
  it('has breakpoints', () => {
    expect(APP_CONSTANTS.BREAKPOINTS.SM).toBe(640);
    expect(APP_CONSTANTS.BREAKPOINTS.LG).toBe(1024);
  });
  it('has API endpoints', () => {
    expect(APP_CONSTANTS.API_ENDPOINTS.TICKETS).toBe('/api/tickets');
  });
  it('has status and priority', () => {
    expect(APP_CONSTANTS.STATUS.OPEN).toBe('open');
    expect(APP_CONSTANTS.PRIORITY.LOW).toBe('low');
  });
  it('has service status', () => {
    expect(APP_CONSTANTS.SERVICE_STATUS.ACTIVE).toBe('active');
  });
  it('has navigation and user menu', () => {
    expect(APP_CONSTANTS.NAVIGATION.HOME.label).toBe('Home');
    expect(APP_CONSTANTS.USER_MENU_OPTIONS.LOGOUT.label).toBe('Logout');
  });
  it('has defaults', () => {
    expect(APP_CONSTANTS.DEFAULTS.PAGE_SIZE).toBe(10);
  });
}); 
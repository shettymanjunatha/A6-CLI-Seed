import { TopNavModule } from './top-nav.module';

describe('TopNavModule', () => {
  let gmTopNavModule: TopNavModule;

  beforeEach(() => {
    gmTopNavModule = new TopNavModule();
  });

  it('should create an instance', () => {
    expect(gmTopNavModule).toBeTruthy();
  });
});

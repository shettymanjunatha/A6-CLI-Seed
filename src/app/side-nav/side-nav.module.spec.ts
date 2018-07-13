import { SideNavModule } from './side-nav.module';

describe('SideNavModule', () => {
  let gmSideNavModule: SideNavModule;

  beforeEach(() => {
    gmSideNavModule = new SideNavModule();
  });

  it('should create an instance', () => {
    expect(gmSideNavModule).toBeTruthy();
  });
});

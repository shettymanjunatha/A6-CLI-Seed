import { ContactCenterModule } from './contact-center.module';

describe('ContactCenterModule', () => {
  let contactCenterModule: ContactCenterModule;

  beforeEach(() => {
    contactCenterModule = new ContactCenterModule();
  });

  it('should create an instance', () => {
    expect(contactCenterModule).toBeTruthy();
  });
});

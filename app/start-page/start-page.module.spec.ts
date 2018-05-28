import { StartPageModule } from './start-page.module';

describe('StartPageModule', () => {
  let startPageModule: StartPageModule;

  beforeEach(() => {
    startPageModule = new StartPageModule();
  });

  it('should create an instance', () => {
    expect(startPageModule).toBeTruthy();
  });
});

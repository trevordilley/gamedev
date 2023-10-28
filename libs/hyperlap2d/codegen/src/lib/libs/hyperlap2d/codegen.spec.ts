import { libsHyperlap2dCodegen } from './libs/hyperlap2d/codegen';

describe('libsHyperlap2dCodegen', () => {
  it('should work', () => {
    expect(libsHyperlap2dCodegen()).toEqual('libs/hyperlap2d/codegen');
  });
});

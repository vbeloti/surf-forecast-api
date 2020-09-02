import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('Should return the normalized forecast from the StormGlassservice ', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({});
  });
});

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Image from '../src/Image.svelte'

describe('Image', () => {
  test('src attribute should include cloud_name & public_id', () => {
    const { container } = render(Image, { cloud_name: 'demo', public_id: 'sample' });
    const img = container.querySelector("img");
    expect(img.src).toBe(
      'https://res.cloudinary.com/demo/image/upload/sample'
    );
  });
});

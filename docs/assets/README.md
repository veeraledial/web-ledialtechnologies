## Assets folder

Paste any website images (banners, product photos, logos, etc.) into this folder.

### How to use in the app

- **Direct URL** (works everywhere, including CSS backgrounds):
  - `/assets/your-image.png`

- **Next.js Image**:
  - `src="/assets/your-image.png"`

Example:

```tsx
import Image from "next/image";

export function Example() {
  return (
    <Image
      src="/assets/hero-bg.jpg"
      alt="Hero background"
      width={1600}
      height={900}
    />
  );
}
```


# Add Dinesh Saxena Profile Photo

## Goal
Replace the trainer-profile portrait placeholder in the Hero section with the uploaded photograph, cropping and positioning it to show the face and torso clearly.

## What will change
- `src/components/sections/Hero.tsx`: the placeholder card will display the uploaded portrait using an `<img>` with appropriate fit/crop (face + torso centered).
- A new asset pointer will be created for the image under `src/assets/` via the Lovable Assets CLI so the binary stays off the repo.

## What stays exactly the same
- Layout, styling, colors, typography, animations, navigation, content, components, curriculum interaction, form interaction and mobile call CTA.

## Steps
1. Upload the image to Lovable Assets and write the `.asset.json` pointer.
2. Import the asset pointer in `Hero.tsx` and replace the placeholder portrait area with the real photo, using `object-cover object-top` or similar positioning so the face and torso are visible inside the existing rounded frame.
3. Remove the "Portrait placeholder" caption text below the image.
4. Verify the preview shows the photo correctly in the Hero card without affecting the rest of the page.

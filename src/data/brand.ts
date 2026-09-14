import profilePortraitAsset from "@/assets/dinesh-saxena-profile.jpg.asset.json";

export type VerificationStatus =
  | "verified"
  | "pending_owner_confirmation"
  | "temporary_site_asset";

type SocialChannel = {
  label: string;
  url: string | null;
  handle: string | null;
  status: VerificationStatus;
};

type BrandConfig = {
  displayName: string;
  descriptor: string;
  shortDescriptor: string;
  phone: {
    display: string;
    e164: string;
    href: string;
    status: VerificationStatus;
  };
  city: {
    name: string;
    country: string;
    display: string;
    status: VerificationStatus;
  };
  canonicalWebsiteUrl: string | null;
  assets: {
    /** Immutable core D-monogram logo. PENDING OWNER CONFIRMATION and asset upload. */
    primaryLogo: string | null;
    /** Secondary name/descriptor lockup. PENDING OWNER CONFIRMATION and asset upload. */
    secondaryLockup: string | null;
    /** Contact/social lockup; never use this as the core logo. PENDING verified links. */
    digitalSignatureLockup: string | null;
    /** Current verified portrait asset, separate from the logo system. */
    profilePortrait: string;
    /** Existing temporary browser icon; replace after the official favicon is uploaded. */
    favicon: string | null;
    faviconStatus: VerificationStatus;
    /** Dedicated social preview artwork. PENDING OWNER CONFIRMATION and asset upload. */
    openGraphImage: string | null;
  };
  socialLinks: {
    linkedIn: SocialChannel;
    instagram: SocialChannel;
    youtube: SocialChannel;
    facebook: SocialChannel;
    x: SocialChannel;
  };
};

const pendingSocial = (label: string): SocialChannel => ({
  label,
  url: null,
  handle: null,
  status: "pending_owner_confirmation",
});

export const brand = {
  // VERIFIED: supplied and approved by the owner for public use.
  displayName: "Dinesh Saxena",
  descriptor: "Hospitality Professional · Food Safety Specialist · Trainer & Independent Consultant",
  shortDescriptor: "Hospitality · Food Safety · Training & Consulting",
  phone: {
    display: "+91 98202 74960",
    e164: "+919820274960",
    href: "tel:+919820274960",
    status: "verified",
  },
  city: {
    name: "Mumbai",
    country: "India",
    display: "Mumbai, India",
    status: "verified",
  },

  // PENDING OWNER CONFIRMATION: do not add canonical metadata until a production URL is verified.
  canonicalWebsiteUrl: null,

  assets: {
    // PENDING OWNER CONFIRMATION: upload official artwork through Lovable Assets before populating.
    primaryLogo: null,
    secondaryLockup: null,
    digitalSignatureLockup: null,

    // VERIFIED: owner-supplied portrait already stored in Lovable Assets.
    profilePortrait: profilePortraitAsset.url,

    // TEMPORARY SITE ASSET: not the official Dinesh Saxena favicon.
    favicon: "/favicon.ico",
    faviconStatus: "temporary_site_asset",

    // PENDING OWNER CONFIRMATION: must be purpose-built artwork, not the portrait by default.
    openGraphImage: null,
  },

  // PENDING OWNER CONFIRMATION: no social URL or handle is published until the owner verifies it.
  socialLinks: {
    linkedIn: pendingSocial("LinkedIn"),
    instagram: pendingSocial("Instagram"),
    youtube: pendingSocial("YouTube"),
    facebook: pendingSocial("Facebook"),
    x: pendingSocial("X"),
  },
} as const satisfies BrandConfig;

export type SocialKey = keyof typeof brand.socialLinks;

export const verifiedSocialLinks = (
  Object.entries(brand.socialLinks) as Array<[SocialKey, SocialChannel]>
).filter(([, channel]) => channel.status === "verified" && Boolean(channel.url));

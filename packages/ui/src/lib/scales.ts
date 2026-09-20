export const SPACE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export type Space = (typeof SPACE)[number];

export const SIZES = ["1", "2", "3", "4"] as const;
export type Size = (typeof SIZES)[number];

export const RADII = ["none", "sm", "md", "lg", "full"] as const;
export type Radius = (typeof RADII)[number];

export const TONES = ["neutral", "brand", "success", "warning", "danger", "info"] as const;
export type Tone = (typeof TONES)[number];

export const VARIANTS = ["solid", "soft", "surface", "outline", "ghost", "link"] as const;
export type Variant = (typeof VARIANTS)[number];

export const spaceClass = {
  gap: {
    "0": "gap-0",
    "1": "gap-1",
    "2": "gap-2",
    "3": "gap-3",
    "4": "gap-4",
    "5": "gap-5",
    "6": "gap-6",
    "7": "gap-7",
    "8": "gap-8",
    "9": "gap-9",
  },
  p: {
    "0": "p-0",
    "1": "p-1",
    "2": "p-2",
    "3": "p-3",
    "4": "p-4",
    "5": "p-5",
    "6": "p-6",
    "7": "p-7",
    "8": "p-8",
    "9": "p-9",
  },
  px: {
    "0": "px-0",
    "1": "px-1",
    "2": "px-2",
    "3": "px-3",
    "4": "px-4",
    "5": "px-5",
    "6": "px-6",
    "7": "px-7",
    "8": "px-8",
    "9": "px-9",
  },
  py: {
    "0": "py-0",
    "1": "py-1",
    "2": "py-2",
    "3": "py-3",
    "4": "py-4",
    "5": "py-5",
    "6": "py-6",
    "7": "py-7",
    "8": "py-8",
    "9": "py-9",
  },
  pt: {
    "0": "pt-0",
    "1": "pt-1",
    "2": "pt-2",
    "3": "pt-3",
    "4": "pt-4",
    "5": "pt-5",
    "6": "pt-6",
    "7": "pt-7",
    "8": "pt-8",
    "9": "pt-9",
  },
  pb: {
    "0": "pb-0",
    "1": "pb-1",
    "2": "pb-2",
    "3": "pb-3",
    "4": "pb-4",
    "5": "pb-5",
    "6": "pb-6",
    "7": "pb-7",
    "8": "pb-8",
    "9": "pb-9",
  },
  m: {
    "0": "m-0",
    "1": "m-1",
    "2": "m-2",
    "3": "m-3",
    "4": "m-4",
    "5": "m-5",
    "6": "m-6",
    "7": "m-7",
    "8": "m-8",
    "9": "m-9",
  },
  mx: {
    "0": "mx-0",
    "1": "mx-1",
    "2": "mx-2",
    "3": "mx-3",
    "4": "mx-4",
    "5": "mx-5",
    "6": "mx-6",
    "7": "mx-7",
    "8": "mx-8",
    "9": "mx-9",
  },
  my: {
    "0": "my-0",
    "1": "my-1",
    "2": "my-2",
    "3": "my-3",
    "4": "my-4",
    "5": "my-5",
    "6": "my-6",
    "7": "my-7",
    "8": "my-8",
    "9": "my-9",
  },
} as const;

export type SpaceProps = {
  gap?: Space;
  p?: Space;
  px?: Space;
  py?: Space;
  pt?: Space;
  pb?: Space;
  m?: Space;
  mx?: Space;
  my?: Space;
};

export function spaceClasses(props: SpaceProps): string[] {
  const out: string[] = [];
  if (props.gap != null) out.push(spaceClass.gap[props.gap]);
  if (props.p != null) out.push(spaceClass.p[props.p]);
  if (props.px != null) out.push(spaceClass.px[props.px]);
  if (props.py != null) out.push(spaceClass.py[props.py]);
  if (props.pt != null) out.push(spaceClass.pt[props.pt]);
  if (props.pb != null) out.push(spaceClass.pb[props.pb]);
  if (props.m != null) out.push(spaceClass.m[props.m]);
  if (props.mx != null) out.push(spaceClass.mx[props.mx]);
  if (props.my != null) out.push(spaceClass.my[props.my]);
  return out;
}

export const radiusClass: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sdsm",
  md: "rounded-sdmd",
  lg: "rounded-sdlg",
  full: "rounded-full",
};

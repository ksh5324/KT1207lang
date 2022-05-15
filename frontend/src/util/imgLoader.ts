export const imgLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  return `${process.env.CLIENT}${src}?w=${width}&q=${quality || 75}`;
};

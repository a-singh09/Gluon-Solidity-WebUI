export default function cloudinaryLoader({
  src
}: {
  src: string;
}) {
  return `https://res.cloudinary.com/dcwczqdpa/image/upload/v1732247196/${src}`;
}

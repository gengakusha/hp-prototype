import "./Thumbnail.css";

const fallbackImage = "/no_picture.jpg";

export function Thumbnail({ src, className }: { src?: string; className?: string }) {
  return (
    <div className={`gr-thumbnail${className ? ` ${className}` : ""}`}>
      <img src={src ?? fallbackImage} alt="" width={960} height={540} loading="lazy" decoding="async" />
    </div>
  );
}

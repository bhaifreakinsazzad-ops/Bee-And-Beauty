interface BeeMarkProps {
  className?: string;
}

const LOGO_URL =
  "https://vibe.filesafe.space/1788045264032144954/attachments/1e31a48d-0e5d-4129-85a0-cd7eb22a79df.png";

/**
 * Bee & Beauty official logo — gold hand-drawn bee, script wordmark and
 * woman silhouette. Used in the header, sidebar, footer and 404 page.
 * Rendered as a full-width lockup image (not cropped to a square icon)
 * since the mark and wordmark are combined in a single artwork.
 */
const BeeMark = ({ className }: BeeMarkProps) => (
  <img
    src={LOGO_URL}
    alt="Bee & Beauty logo"
    className={className}
    style={{ objectFit: "contain" }}
  />
);

export default BeeMark;

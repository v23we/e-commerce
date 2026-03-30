import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props} />;
}

export function HomeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4.75 10.25 12 4.5l7.25 5.75v8a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-8Z" />
      <path d="M9 19.75v-6h6v6" />
    </StrokeIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 1.95 5.05L19 10l-5.05 1.95L12 17l-1.95-5.05L5 10l5.05-1.95L12 3Z" />
      <path d="m18.25 16.5.9 2.35 2.35.9-2.35.9-.9 2.35-.9-2.35-2.35-.9 2.35-.9.9-2.35Z" />
    </StrokeIcon>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="4.25" y="4.25" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.25" y="4.25" width="6.5" height="6.5" rx="1.5" />
      <rect x="4.25" y="13.25" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.25" y="13.25" width="6.5" height="6.5" rx="1.5" />
    </StrokeIcon>
  );
}

export function PhotoIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3.5" y="4.25" width="17" height="15.5" rx="2.5" />
      <circle cx="9" cy="9.25" r="1.4" fill="currentColor" stroke="none" />
      <path d="m6.5 16.25 3.8-3.7 2.8 2.7 3.4-4.1 1.8 2.1" />
    </StrokeIcon>
  );
}

export function LayoutIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="4" y="4.25" width="16" height="15.5" rx="2" />
      <path d="M9.5 4.5v15" />
      <path d="M10 9.5h9.5" />
    </StrokeIcon>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4.5 11.75a7.5 7.5 0 1 0 2.35-5.45" />
      <path d="M4.75 5.75v4h4" />
      <path d="M12 8.25v4l2.75 1.75" />
    </StrokeIcon>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9.4 4.8a1.1 1.1 0 0 1 1.05-.8h3.1a1.1 1.1 0 0 1 1.05.8l.42 1.36a6.77 6.77 0 0 1 1.54.9l1.35-.43a1.1 1.1 0 0 1 1.3.47l1.55 2.7a1.1 1.1 0 0 1-.24 1.36l-1.04.95c.06.38.09.77.09 1.16 0 .39-.03.78-.09 1.16l1.04.95a1.1 1.1 0 0 1 .24 1.36l-1.55 2.7a1.1 1.1 0 0 1-1.3.47l-1.35-.43c-.48.36-1 .66-1.54.9l-.42 1.36a1.1 1.1 0 0 1-1.05.8h-3.1a1.1 1.1 0 0 1-1.05-.8l-.42-1.36a6.77 6.77 0 0 1-1.54-.9l-1.35.43a1.1 1.1 0 0 1-1.3-.47l-1.55-2.7a1.1 1.1 0 0 1 .24-1.36l1.04-.95a7.6 7.6 0 0 1-.09-1.16c0-.39.03-.78.09-1.16l-1.04-.95a1.1 1.1 0 0 1-.24-1.36l1.55-2.7a1.1 1.1 0 0 1 1.3-.47l1.35.43c.48-.36 1-.66 1.54-.9l.42-1.36Z" />
      <circle cx="12" cy="12" r="2.75" />
    </StrokeIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M8 16 16.5 7.5" />
      <path d="M10 7.5h6.5V14" />
    </StrokeIcon>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M13.25 2.75 5.75 13h4.5l-.5 8.25L18.25 11h-4.5l-.5-8.25Z" />
    </StrokeIcon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="11" cy="11" r="6.75" />
      <path d="m16 16 4 4" />
    </StrokeIcon>
  );
}

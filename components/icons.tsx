import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PlayIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M8 6.5v11l9-5.5-9-5.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeadphonesIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4 13a8 8 0 1 1 16 0" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M6 12.5h2.5a1 1 0 0 1 1 1V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2Z"
        strokeWidth="1.8"
      />
      <path
        d="M15.5 13.5a1 1 0 0 1 1-1H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-4.5Z"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="m3 9 9-4 9 4-9 4-9-4Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.5v4.1c0 .8.5 1.5 1.2 1.8l2.8 1.2a2.6 2.6 0 0 0 2 0l2.8-1.2c.7-.3 1.2-1 1.2-1.8v-4.1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M21 10v5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M14 5h5v5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14 19 5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="m12 3 1.8 4.5L18 9.3l-4.2 1.7L12 15.5 10.2 11 6 9.3l4.2-1.8L12 3Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m19 15 .8 2 .2.2 2 .8-2 .8-.2.2-.8 2-.8-2-.2-.2-2-.8 2-.8.2-.2.8-2Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m5 14 .6 1.5.2.1 1.5.6-1.5.6-.2.1L5 18.5l-.6-1.5-.1-.1-1.5-.6 1.5-.6.1-.1L5 14Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type Variant = "cta" | "primary" | "secondary" | "text";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const className = `gr-btn gr-btn--${variant}`;

  if ("href" in props && props.href) {
    return (
      <a className={className} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

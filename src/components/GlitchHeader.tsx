import type { HTMLAttributes } from "react";

interface GlitchHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
}

export function GlitchHeader({ title, subtitle, className, ...props }: GlitchHeaderProps) {
  return (
    <header className={className ? `glitch-header ${className}` : "glitch-header"} {...props}>
      <p className="glitch-header__eyebrow">webcore aesthetic</p>
      <h1 className="glitch-header__title" data-text={title}>
        {title}
      </h1>
      {subtitle ? <p className="glitch-header__subtitle">{subtitle}</p> : null}
    </header>
  );
}

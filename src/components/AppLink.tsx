import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  activeProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  children: ReactNode;
};

export default function Link({ to, activeProps, className = "", onClick, children, ...props }: AppLinkProps) {
  const isActive =
    typeof window !== "undefined" &&
    (window.location.pathname === to || (to !== "/" && window.location.pathname.startsWith(`${to}/`)));
  const activeClassName = isActive ? activeProps?.className ?? "" : "";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      props.target
    ) {
      return;
    }

    event.preventDefault();
    if (window.location.pathname !== to) {
      window.history.pushState({}, "", to);
      window.dispatchEvent(new Event("app:navigate"));
    }
  }

  return (
    <a {...props} href={to} className={`${className} ${activeClassName}`.trim()} onClick={handleClick}>
      {children}
    </a>
  );
}

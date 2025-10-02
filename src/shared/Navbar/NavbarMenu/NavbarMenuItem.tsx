import { type FC } from "react";
import ExternalLink from "@/shared/Link/ExternalLink";
import Link from "@/shared/Link/Link";
import type { NavbarLink } from "@/zod/navbar";

const NavbarMenuItem: FC<NavbarLink> = (link) => {
  return (
    <li key={link.id}>
      {link.isExternal ? (
        <ExternalLink variant="navigation" color="dark" href={link.href}>
          {link.textContent}
        </ExternalLink>
      ) : (
        <Link variant="navigation" color="dark" href={link.href}>
          {link.textContent}
        </Link>
      )}
    </li>
  );
};

export default NavbarMenuItem;

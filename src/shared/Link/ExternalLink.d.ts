import type { FC } from 'react';
import type z from 'zod';
import type { linkPropsSchema } from '@/zod/components/linkProps';
type LinkPropsSchema = z.infer<typeof linkPropsSchema>;
type LinkProps = LinkPropsSchema & React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const ExternalLink: FC<LinkProps>;
export default ExternalLink;
//# sourceMappingURL=ExternalLink.d.ts.map
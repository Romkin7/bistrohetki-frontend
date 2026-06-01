import type { FC } from 'react';
import type { z } from 'zod';
import type { headingPropsSchema } from '@/zod/components/headingProps';
type HeadingProps = z.infer<typeof headingPropsSchema>;
declare const Heading: FC<HeadingProps>;
export default Heading;
//# sourceMappingURL=Heading.d.ts.map
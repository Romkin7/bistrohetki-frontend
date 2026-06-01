import type { FC, PropsWithChildren } from 'react';
import { type DayProps } from '@/zod/components/dayProps';
interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
}
declare const Day: FC<IDayProps>;
export default Day;
//# sourceMappingURL=Day.d.ts.map
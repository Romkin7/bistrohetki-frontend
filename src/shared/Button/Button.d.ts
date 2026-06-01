import type { FC, PropsWithChildren } from 'react';
import { type ButtonProps } from '@/zod/components/buttonProps';
interface IButtonProps extends ButtonProps, PropsWithChildren {
    onClick?: () => void;
}
declare const Button: FC<IButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map
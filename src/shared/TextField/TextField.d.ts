import type { ChangeEvent, FC } from 'react';
import { type TextFieldProps } from '@/zod/components/textFieldProps';
interface ITextFieldProps extends TextFieldProps {
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
declare const TextField: FC<ITextFieldProps>;
export default TextField;
//# sourceMappingURL=TextField.d.ts.map
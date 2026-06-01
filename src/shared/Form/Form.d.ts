import type { FC, FormEvent, PropsWithChildren } from 'react';
import { type FormProps } from '@/zod/components/formProps';
interface IFormProps extends FormProps, PropsWithChildren {
    onReset: (event: FormEvent<HTMLFormElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
declare const Form: FC<IFormProps>;
export default Form;
//# sourceMappingURL=Form.d.ts.map
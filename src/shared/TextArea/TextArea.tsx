import { Field, HStack, Textarea } from '@chakra-ui/react';
import clsx from 'clsx';
import type { ChangeEvent, FC } from 'react';
import styles from './TextArea.module.css';
import {
    textAreaPropsSchema,
    type TextAreaProps,
} from '@/zod/components/textAreaProps';

interface ITextAreaProps extends TextAreaProps {
    onInput?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

const TextArea: FC<ITextAreaProps> = ({ value, onInput, ...rest }) => {
    const {
        label,
        htmlFor,
        name,
        placeholder,
        required,
        disabled,
        readOnly,
        ariaLabel,
        className,
    } = textAreaPropsSchema.parse(rest);

    const textAreaStyles = clsx(styles.textarea, className);
    return (
        <HStack gap="10" width="50%">
            <Field.Root required={required} width="100%">
                {label && (
                    <Field.Label className={styles.label} htmlFor={htmlFor}>
                        {label}
                        {required && <Field.RequiredIndicator />}
                    </Field.Label>
                )}

                <Textarea
                    id={htmlFor}
                    aria-label={ariaLabel}
                    readOnly={readOnly}
                    required={required}
                    disabled={disabled}
                    placeholder={placeholder}
                    name={name}
                    className={textAreaStyles}
                    value={value}
                    onInput={onInput}
                />
            </Field.Root>
        </HStack>
    );
};

export default TextArea;

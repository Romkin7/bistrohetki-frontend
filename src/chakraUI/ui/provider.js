'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
export default function Provider(props) {
    return (_jsx(ChakraProvider, { value: defaultSystem, children: _jsx(ColorModeProvider, { ...props }) }));
}
//# sourceMappingURL=provider.js.map
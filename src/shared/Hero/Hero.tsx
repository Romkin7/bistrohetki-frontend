import type { FC } from 'react';
import Heading from '../Heading/Heading';
import type { HeroProps } from '@/zod/components/heroProps';

const Hero: FC<HeroProps> = ({ backgroundImageUrl, ariaLabel }) => {
    return (
        <section
            aria-label={ariaLabel}
            style={{ backgroundImage: backgroundImageUrl }}
        >
            <Heading
                tag="h1"
                variant="display-1"
                color="dark"
                ariaLabel={ariaLabel as string}
            >
                BistroHetki
            </Heading>
        </section>
    );
};

export default Hero;

import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { type FC } from 'react';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
import type { GalleryPageData } from '@/zod/pages/galleryPageData';

const GalleryPage: FC = () => {
    const galleryPageData: GalleryPageData = useLoaderData();

    return (
        <section>
            <Flex direction="column" align="center" justify="center" mb={8}>
                <Heading
                    tag="h1"
                    variant="title-1"
                    color="dark"
                    ariaLabel={galleryPageData?.mainTitle}
                >
                    {galleryPageData?.mainTitle}
                </Heading>
            </Flex>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={4}
            >
                {galleryPageData?.images?.map((image) => (
                    <GridItem key={image.id}>
                        <Box key={image.id}>
                            <Image
                                key={image.id}
                                src={image.url}
                                alt={image.alternativeText}
                                className="rounded-lg"
                            />
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </section>
    );
};

export default GalleryPage;

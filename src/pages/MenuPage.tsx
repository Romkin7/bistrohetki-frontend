import { Box, Flex, Image, Grid, GridItem } from '@chakra-ui/react';
import { type FC } from 'react';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
import Paragraph from '@/shared/Paragraph/Paragraph';
import type { MenuPageData } from '@/zod/pages/menuPageData';

const MenuPage: FC = () => {
    const menuPageData: MenuPageData = useLoaderData();

    return (
        <section>
            <Flex direction="column" align="center" justify="center" mb={8}>
                <Heading
                    tag="h1"
                    variant="title-1"
                    color="dark"
                    ariaLabel={menuPageData?.mainTitle}
                >
                    {menuPageData?.mainTitle}
                </Heading>
                <Paragraph variant="body" color="dark">
                    {menuPageData?.subTitle}
                </Paragraph>
            </Flex>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
                gap={4}
            >
                {menuPageData?.menus?.map((menu) => (
                    <GridItem key={menu.id}>
                        <Box
                            key={menu.id}
                            mx={4}
                            mb={8}
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                        >
                            <Image
                                src={menu.url}
                                alt={menu.alternativeText}
                                fit="contain"
                                aria-label={menu.alternativeText}
                            />
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </section>
    );
};

export default MenuPage;

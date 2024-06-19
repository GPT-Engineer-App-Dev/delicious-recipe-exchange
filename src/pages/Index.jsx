import { Container, VStack, Heading, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "/images/spaghetti-carbonara.jpg",
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
    image: "/images/chicken-tikka-masala.jpg",
  },
  {
    title: "Beef Stroganoff",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
    image: "/images/beef-stroganoff.jpg",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
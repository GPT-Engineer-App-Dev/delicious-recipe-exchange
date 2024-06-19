import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Index = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/api/recipes");
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <Button as={Link} to="/submit-recipe" colorScheme="teal" size="lg">Submit Your Recipe</Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
                <HStack mt={4}>
                  <FaStar color={recipe.ratings.length > 0 ? "gold" : "gray"} />
                  <Text>{calculateAverageRating(recipe.ratings)}</Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
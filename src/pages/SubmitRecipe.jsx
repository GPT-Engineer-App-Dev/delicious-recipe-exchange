import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, HStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    formData.append("rating", rating);

    const response = await fetch("/api/recipes", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.error("Failed to submit recipe");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl">Submit Your Recipe</Heading>
        <Input
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Recipe Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isRequired
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          isRequired
        />
        {image && <Image src={URL.createObjectURL(image)} alt="Preview" boxSize="200px" />}
        <HStack>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              color={star <= rating ? "gold" : "gray"}
              onClick={() => setRating(star)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </HStack>
        <Button type="submit" colorScheme="teal" size="lg">Submit Recipe</Button>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;
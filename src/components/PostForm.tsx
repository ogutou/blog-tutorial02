import React, { use } from "react";
import { Box, Input, Text, Textarea } from "@chakra-ui/react";

export const PostForm = () => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      border="1px solid #ccc"
      borderRadius="md"
    >
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <Textarea
        placeholder="Write your post here"
        value={text}
        onChange={handleTextChange}
      />
      <Button type="submit" colorScheme="blue">
        投稿
      </Button>
    </Box>
  );
};

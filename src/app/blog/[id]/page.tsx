import { Box, Heading, Text } from "@chakra-ui/react";

const articles = [
  {
    id: "1",
    title: "Reactの勉強",
    body: "ああああああ",
  },
  {
    id: "2",
    title: "Reactの勉強2",
    body: "Reactの勉強2",
  },
];

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id === params.id);
  if (!article) {
    return <Box>記事が見つかりません</Box>;
  } else {
    return (
      <Box>
        <Heading>{article.title}</Heading>
        <Text>{article.body}</Text>
      </Box>
    );
  }
}

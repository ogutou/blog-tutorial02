// allblog.tsx

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const AllBlog = () => {
  const articles = [
    {
      id: "1",
      title: "はじめての投稿",
      body: "これは最初のブログ記事です。",
    },
    {
      id: "2",
      title: "２つ目の記事",
      body: "これは２回目の記事です。",
    },
  ];

  return (
    <Box>
      {articles.map((article) => {
        return (
          <Box key={article.id}>
            <Heading>{article.title}</Heading>
            <Text>{article.body}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

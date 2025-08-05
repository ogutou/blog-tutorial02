"use client";

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

type Article = {
  id: string;
  title: string;
  body: string;
};

export const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "articles"));
      const result: Article[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Article, "id">),
      }));
      setArticles(result);
    };

    fetchData();
  }, []);

  return (
    <Box>
      {articles.map((article) => (
        <Box key={article.id} p={4} borderBottom="1px solid #ccc">
          <Link href={`/blog/${article.id}`}>
            <Heading cursor="pointer">{article.title}</Heading>
          </Link>
          <Text>{article.body}</Text>
        </Box>
      ))}
    </Box>
  );
};

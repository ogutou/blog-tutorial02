"use client";

import React from "react";
import { Box, Modal, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useUser } from "@/contexts/UserContext";

const provider = new GoogleAuthProvider();

const LoginModal = () => {
  const { user, setUser } = useUser();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("ログイン失敗", error);
    }
  };

  return (
    <Box>
      {user ? (
        <Text>{user.displayName}でログイン中</Text>
      ) : (
        <Button onClick={handleLogin}>ログイン</Button>
      )}
    </Box>
  );
};

export default LoginModal;

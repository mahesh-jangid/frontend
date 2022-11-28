import React from "react";
import { Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Text>404 Page NotFound</Text>;
    </>
  );
};

export default NotFoundPage;

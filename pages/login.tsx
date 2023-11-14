import React, { useContext } from "react";
import type { NextPage } from "next";
import { hpe } from "grommet-theme-hpe";

import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
  Text,
  TextInput,
} from "grommet";
import { Close, Next, CircleAlert } from "grommet-icons";
import { Grommet } from "grommet";

const Login: NextPage = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  const size = useContext(ResponsiveContext);
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);
  // setPassword is here for demonstration purposes,
  // for calling credential error
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = React.useState("");
  const [credentialError, setCredentialError] = React.useState(false);

  const onClose = () => {
    setShowForgotPassword(false);
  };

  const onForgotPassword = () => {
    setShowForgotPassword(true);
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ value, touched }) => {
    // Your submission logic here
    // For demonstration purposes, we are mocking a scenario where the password
    // is incorrect. This will cause the error state to appear.
    if (password !== "password") {
      setCredentialError(true);
    }
  };

  return (
    <Box fill gap="medium" align="center" pad="medium">
      <Header
        direction="column"
        align="start"
        gap="xxsmall"
        pad={{ horizontal: "xxsmall" }}
      >
        {/* Use semantically correct heading level and adjust size as 
        needed. In this instance, this example is presented within an 
        HTML section element and this is the first heading within the 
        section, therefor h2 is the semantically correct heading. For 
        additional detail, see https://design-system.hpe.design/foundation/typography#semantic-usage-of-heading-levels). */}
        <Heading level={2} margin="none">
          Sign In
        </Heading>
      </Header>
      <Box
        // Padding used to prevent focus from being cutoff
        pad={{ horizontal: "xxsmall" }}
      >
        <Form
          validate="blur"
          value={formValues}
          onChange={setFormValues}
          messages={{
            required: "This is a required field.",
          }}
          onSubmit={({ value, touched }) => onSubmit({ value, touched })}
        >
          <FormField
            label="Email"
            name="email"
            htmlFor="email-sign-in"
            required={{ indicator: false }}
          >
            <TextInput
              id="email-sign-in"
              name="email"
              placeholder="james@hpe.com"
              type="email"
            />
          </FormField>
          <FormField
            label="Password"
            htmlFor="password-sign-in"
            name="password"
            required={{ indicator: false }}
          >
            <TextInput
              id="password-sign-in"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
          </FormField>
          {credentialError && (
            <Box
              animation="fadeIn"
              align="center"
              background="validation-critical"
              direction="row"
              gap="xsmall"
              margin={{ top: "medium", bottom: "medium" }}
              pad="small"
              round="4px"
            >
              <CircleAlert size="small" />
              <Text size="xsmall">Invalid credentials.</Text>
            </Box>
          )}
          <Box
            align={!["xsmall", "small"].includes(size) ? "start" : undefined}
            margin={{ top: "medium", bottom: "small" }}
          >
            <Button
              label="Sign In"
              icon={<Next />}
              reverse
              primary
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default Login;

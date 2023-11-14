import {
  AreasType,
  Box,
  Heading,
  ResponsiveContext,
  Grid,
  GridColumnsType,
  GridExtendedProps,
  GridSizeType,
  Button,
} from "grommet";
import { Close, Chat } from "grommet-icons";
import type { NextPage } from "next";
import { CarbonEmissionsPanel } from "../components/CarbonEmissionsPanel";
import { EnergyConsumptionPanel } from "../components/EnergyConsumptionPanel";
import { EnergyCostPanel } from "../components/EnergyCostPanel";
import { useState, useCallback, useEffect } from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Router from "next/router";

const columns: Record<string, GridColumnsType> = {
  xsmall: ["auto"],
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
  xlarge: ["auto", "auto", "auto"],
};

const rows: Record<string, GridSizeType[]> = {
  xsmall: ["medium", "medium", "medium"],
  small: ["medium", "medium", "medium"],
  medium: ["medium", "medium", "medium"],
  large: ["medium", "medium", "medium"],
  xlarge: ["medium"],
};

const areas: Record<string, AreasType> = {
  xsmall: [
    { name: "co2e_metric_ton", start: [0, 0], end: [0, 0] },
    { name: "kwh", start: [0, 1], end: [0, 1] },
    { name: "cost_usd", start: [0, 2], end: [0, 2] },
  ],
  small: [
    { name: "co2e_metric_ton", start: [0, 0], end: [0, 0] },
    { name: "kwh", start: [0, 1], end: [0, 1] },
    { name: "cost_usd", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "co2e_metric_ton", start: [0, 0], end: [0, 0] },
    { name: "kwh", start: [0, 1], end: [0, 1] },
    { name: "cost_usd", start: [0, 2], end: [0, 2] },
  ],
  large: [
    { name: "co2e_metric_ton", start: [0, 0], end: [0, 0] },
    { name: "kwh", start: [0, 1], end: [0, 1] },
    { name: "cost_usd", start: [0, 2], end: [0, 2] },
  ],
  xlarge: [
    { name: "co2e_metric_ton", start: [0, 0], end: [0, 0] },
    { name: "kwh", start: [1, 0], end: [1, 0] },
    { name: "cost_usd", start: [2, 0], end: [2, 0] },
  ],
};
const ResponsiveGrid = ({ children, ...props }: GridExtendedProps) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Grid
          {...props}
          areas={areas[size]}
          rows={rows[size] || size}
          columns={columns[size] || size}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const statsData = {
  totalPower: 1861,
  totalCost: 9358,
  totalEmissions: 21999,
  seriesData: [
    {
      kwh: 1,
      cost_usd: 9,
      co2e_metric_ton: 16,
      timeStart: "2023-11-08T00:00:00.000Z",
      timeResolution: {
        name: "12 Hours",
        formats: ["MMM dd", "h a"],
      },
    },
  ],
  isLoading: false,
  isRefetching: false,
  isError: false,
};

const Home: NextPage = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cid") == null) {
      Router.push("login");
    }
  }, []);

  const handleSendRequest = async (message: any) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    setMessages((prevMessages: any) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages: any) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages: any[]) {
    const apiMessages = chatMessages.map(
      (messageObject: { sender: string; message: any }) => {
        const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
        return { role, content: messageObject.message };
      }
    );

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch(
      "https://glp-genai-hackathon-3-team4.openai.azure.com/",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer e79864a2f3204aed829798679f11d855",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }
    );

    return response.json();
  }

  return (
    <>
      <Heading
        color="text"
        margin={{ bottom: "small", top: "small" }}
        size="32px"
        weight={600}
      >
        GEN AI DASHBOARD
      </Heading>
      <ResponsiveGrid gap="medium" margin="medium">
        <Box gridArea="co2e_metric_ton">
          <CarbonEmissionsPanel statsData={statsData} />
        </Box>

        <Box gridArea="kwh">
          <EnergyConsumptionPanel statsData={statsData} />
        </Box>

        <Box gridArea="cost_usd">
          <EnergyCostPanel statsData={statsData} />
        </Box>
      </ResponsiveGrid>
      <Box direction="row" gap="medium" height="600px">
        <Box fill="horizontal" align="end" justify="end">
          {showChatbot && (
            <>
              <Button icon={<Close />} onClick={() => setShowChatbot(false)} />
              <MainContainer>
                <ChatContainer>
                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={
                      isTyping ? (
                        <TypingIndicator content="ChatGPT is typing" />
                      ) : null
                    }
                  >
                    {messages.map((message, i) => {
                      console.log(message);
                      return <Message key={i} model={message as any} />;
                    })}
                  </MessageList>
                  <MessageInput
                    placeholder="Send a Message"
                    onSend={handleSendRequest}
                  />
                </ChatContainer>
              </MainContainer>
            </>
          )}
          {!showChatbot && (
            <Button
              icon={<Chat size="large" />}
              onClick={() => setShowChatbot(true)}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;

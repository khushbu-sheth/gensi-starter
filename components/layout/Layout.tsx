import React, { useState } from "react";
import Head from "next/head";
import { Box } from "grommet";
import { Hpe, HelpOption } from "grommet-icons";
import { GLCPHeader } from "../glcp-components/glcp-header";
import { Typography } from "../glcp-components/typography/Typography";
import { MenuList } from "../glcp-components/menu-list/MenuList";
import { Dropdown } from "../glcp-components/dropdown/Dropdown";
import { GL_Help_Links, GL_Central_Help_Links } from "./HelpLinks";

interface LayoutProps {
  children: React.ReactNode;
}
const appsList = [
  { key: 1, label: "HPE GreenLake", value: "hpe_green_lake" },
  {
    key: 2,
    label: "HPE GreenLake Central",
    value: "hpe_green_lake_central",
  },
];

const Layout = ({ children }: LayoutProps) => {
  const defaultApp = "hpe_green_lake";
  const [selectedApp, setSelectedApp] = useState(defaultApp);
  const handleChangeDrop = (app: any) => {
    setSelectedApp(app);
  };
  const handleMenuItemClick = (item: any) => {
    window.open(item.linkTo, "_blank");
  };

  const setMenuData = (selectedApp: any) => {
    switch (selectedApp) {
      case "hpe_green_lake":
        return GL_Help_Links;
        break;
      case "hpe_green_lake_central":
        return GL_Central_Help_Links;
        break;
      default:
        return GL_Help_Links;
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Platform Analytics</title>
        <meta name="description" content="HPE Greenlake Platform Analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GLCPHeader
        brand={{
          logo: <Hpe color="brand" size="large" />,
          logoLink: "/",
          orgName: "HPE",
          appName: "GreenLake",
        }}
        dropMenu={[
          {
            content: (
              <Box>
                <Box align="center">
                  <Typography
                    size="medium"
                    type="text"
                    testId="help-menu"
                    weight={undefined}
                    icon={undefined}
                    reverse={undefined}
                    margin={undefined}
                    truncate={undefined}
                  >
                    Help
                  </Typography>
                </Box>
                <Box margin={{ bottom: "xsmall", top: "small" }} pad="small">
                  <Dropdown
                    onChangeDropdown={(option: any) => {
                      handleChangeDrop(option);
                    }}
                    options={appsList}
                    placeholder="Please Select"
                    testId="help-drop-down"
                    defaultVal={appsList[0].value}
                    multiple={undefined}
                    noBorder={undefined}
                    customRender={undefined}
                  />
                </Box>
                <Box margin={{ bottom: "xsmall", top: "small" }}>
                  <MenuList
                    highlightOnSelect
                    navStyles={{
                      padding: "none",
                      gap: "none",
                    }}
                    menuData={setMenuData(selectedApp)}
                    onClickMenuItem={handleMenuItemClick}
                    testId="glcp-help-dropdown"
                  />
                </Box>
              </Box>
            ),
            icon: <HelpOption />,
            id: 1,
          },
        ]}
        testId="pa-global-header"
        navigation={undefined}
        notification={undefined}
      />
      {children}
    </>
  );
};
export default Layout;

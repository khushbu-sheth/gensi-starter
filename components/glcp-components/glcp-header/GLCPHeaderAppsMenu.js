import React from "react";
import PropTypes, { oneOfType } from "prop-types";
import { Box } from "grommet";
import { HomeRounded } from "grommet-icons";

import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import { Ruler } from "../ruler/Ruler";

export const GLCPHeaderAppsMenu = ({ mainApp, appsData, testId }) => {
  const appsMenuData = appsData;
  return (
    <Box data-testid={testId} height={{ min: "540px" }}>
      <Box margin={{ horizontal: "medium" }}>{mainApp}</Box>
      <Ruler
        border={{ color: "background-back", size: "1px", side: "bottom" }}
        margin={{ vertical: "small" }}
      />
      {appsMenuData &&
        appsMenuData.map((app, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={`${testId}-${app}-${index}`}>
              <Box
                pad={{ bottom: "xxsmall" }}
                margin={{ horizontal: "medium" }}
              >
                <Typography type="text" color="text-weak" size="xsmall">
                  {app.title}
                </Typography>
              </Box>
              <Box margin={{ horizontal: "small" }}>{app.menu}</Box>
              {appsMenuData.length - 1 === index ? null : (
                <Ruler
                  border={{
                    color: "background-back",
                    size: "1px",
                    side: "bottom",
                  }}
                  margin={{ vertical: "small" }}
                />
              )}
            </Box>
          );
        })}
    </Box>
  );
};
GLCPHeaderAppsMenu.propTypes = {
  mainApp: PropTypes.element,
  appsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: oneOfType([PropTypes.element, PropTypes.string]),
      menu: PropTypes.element,
    })
  ),
  testId: PropTypes.string.isRequired,
};

GLCPHeaderAppsMenu.defaultProps = {
  mainApp: (
    <Button testId="app-menu-glcp" onClick={() => window.location.reload("/")}>
      <Box justify="between" direction="row">
        <Typography type="text" weight="bold">
          HPE GreenLake
        </Typography>
        <HomeRounded />
      </Box>
    </Button>
  ),
  appsData: undefined,
};

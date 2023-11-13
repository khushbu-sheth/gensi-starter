// import { Chart } from "@/components/Chart";
import { Box, Text } from "grommet";

export type StatsPanelProps = {
  title: string;
  value: number | string;
  units: string;
  unitsSymbol?: string;
  data: any;
  dataKey: string;
  dataLabel: string;
  errors?: any;
};

export function StatsPanel({
  title,
  value,
  units,
  data,
  dataKey,
  dataLabel,
  unitsSymbol = undefined,
  errors = undefined,
}: StatsPanelProps): JSX.Element {
  const valueString = unitsSymbol
    ? `${unitsSymbol} ${value.toLocaleString()}`
    : value.toLocaleString();

  const pageError = data?.isError || errors;

  return (
    <Box elevation="medium" pad="medium" gap="large" round="small">
      <Box>
        <Text size="large">{title}</Text>
      </Box>

      <Box direction="row-responsive" gap="large">
        {data && !pageError && (
          <Box pad="none" gap="xxsmall" direction="column">
            <Text size="36px" color="grey">
              {valueString}
              &nbsp;
              <Text size="xsmall" color="grey">{`${units}`}</Text>
            </Text>
          </Box>
        )}
      </Box>

      <Box height="large">
        {data && (
          <Box height="large">
            <Text size="small" color="grey">
              Chart
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

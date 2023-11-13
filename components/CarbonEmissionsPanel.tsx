import { StatsPanel } from "./StatsPanel";

export type CarbonEmissionsPanelProps = {
  statsData: any;
};

export function CarbonEmissionsPanel(
  props: CarbonEmissionsPanelProps
): JSX.Element {
  const { statsData } = props;

  return (
    <StatsPanel
      title="Carbon emissions"
      data={statsData}
      dataKey="co2e_metric_ton"
      dataLabel="Carbon Emissions (MTCO2e)"
      value={statsData.totalEmissions}
      units="MTCO2e"
    />
  );
}

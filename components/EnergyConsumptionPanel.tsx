import { StatsPanel } from "./StatsPanel";

export type EnergyConsumptionPanelProps = {
  statsData: any;
};

export function EnergyConsumptionPanel(
  props: EnergyConsumptionPanelProps
): JSX.Element {
  const { statsData } = props;

  return (
    <StatsPanel
      title="Energy consumption"
      data={statsData}
      dataKey="kwh"
      dataLabel="Energy Consumption (kWh)"
      value={statsData.totalPower}
      units="kWh"
    />
  );
}

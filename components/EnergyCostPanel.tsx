import { StatsPanel } from "./StatsPanel";

export type EnergyCostPanelProps = {
  statsData: any;
};

export function formatCurrency(value: number): string {
  const formattedValue = Number.isInteger(value)
    ? value.toLocaleString()
    : (Math.round((value + Number.EPSILON) * 100) / 100).toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      );
  return formattedValue;
}

export function EnergyCostPanel(props: EnergyCostPanelProps): JSX.Element {
  const { statsData } = props;

  return (
    <StatsPanel
      title="Energy cost"
      data={statsData}
      dataKey="cost_usd"
      dataLabel="Energy Cost (USD)" // TODO:?
      value={formatCurrency(statsData.totalCost)}
      units="USD"
      unitsSymbol="$"
    />
  );
}

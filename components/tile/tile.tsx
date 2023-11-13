import { Card, CardBody, Text, Button } from "grommet";
import { useTranslation } from "next-i18next";
export interface TileItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TileProps {
  content: TileItemProps;
}

export default function Tile({ content }: TileProps) {
  const { t } = useTranslation("common");
  return (
    <Card background="background" key={content.title}>
      <CardBody gap="small" align="start" flex="grow">
        {content.icon}
        <Text size="large" weight="bold" color="text-strong">
          {t(content.title)}
        </Text>
        <Text>{t(content.description)}</Text>
        <Button label="Launch" secondary />
      </CardBody>
    </Card>
  );
}

import { Button, Col, Row } from "../../UI";
import theme from "antd/es/theme";

interface TopHeaderBarProps {
  onClick: () => void;
  icons: React.ReactNode;
}

const TopHeaderBar = ({ onClick, icons }: TopHeaderBarProps) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Row justify={"space-between"}>
      <Col span={"auto"}>
        <Button
          type="text"
          icon={icons}
          onClick={onClick}
          style={{
            color: colorPrimary,
          }}
        />
      </Col>
      <Col span={"auto"} style={{ color: colorPrimary }}>
        User Profile
      </Col>
    </Row>
  );
};

export default TopHeaderBar;

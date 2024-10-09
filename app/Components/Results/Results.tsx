import { Badge, Card, Flex, Grid, Text } from "@radix-ui/themes";

const Results = ({ data }: { data: any; dispatch: any }) => {
  return (
    <Grid columns="2" gap="3" width="100%" style={{ padding: "20px" }}>
      {data.map((item: any, i: number) => {
        return (
          <Card
            key={i}
            size="2"
            variant="classic"
            style={{ padding: "20px", width: "95%", overflow: "hidden" }}
          >
            <Flex direction={"column"} gap={"1"}>
              <Text>{item.name}</Text>
              <Text>{item.address}</Text>
              <Text>Rating: {item.rating}</Text>
              {item.open ? (
                <Badge color="green" variant="soft" size={"2"} radius="medium">
                  Open
                </Badge>
              ) : (
                <Badge color="red" size={"2"} radius="medium">
                  Closed
                </Badge>
              )}
            </Flex>
          </Card>
        );
      })}
    </Grid>
  );
};

export { Results };

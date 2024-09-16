import { Badge, Box, Button, Card, Flex, Grid, Text } from "@radix-ui/themes";

const Results = ({ data, dispatch }: { data: any; dispatch: any }) => {
  return (
    <Grid columns="2" gap="3" width="auto">
      {data.map((item: any, i: number) => {
        return (
          <Card key={i} size="2" variant="classic">
            <Flex direction={"column"}>
              <Flex direction={"column"} gap={"1"}>
                <Text>{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>Rating: {item.rating}</Text>
                {item.open ? (
                  <Badge
                    color="green"
                    variant="soft"
                    size={"2"}
                    radius="medium"
                  >
                    Open
                  </Badge>
                ) : (
                  <Badge color="red" size={"2"} radius="medium">
                    Closed
                  </Badge>
                )}
              </Flex>
            </Flex>
          </Card>
        );
      })}
    </Grid>
  );
};

export { Results };

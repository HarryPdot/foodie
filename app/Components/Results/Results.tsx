import { Box, Button, Card, Flex, Grid, Text, Badge } from "@radix-ui/themes";

const Results = ({ data, dispatch }: { data: any; dispatch: any }) => {
  return (
    <Grid columns="2" gap="3" width="auto">
      {data.map((item: any, i: number) => {
        return (
          <Card key={i} size="2" variant="classic">
            <Flex direction={"column"}>
              <Flex direction={"column"} gap={'1'}>
                <Text>{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>Rating: {item.rating}</Text>
                {item.open ? <Badge color="green" variant="soft" size={'2'} radius="medium">Open</Badge> : <Badge color="red" size={'2'} radius="medium">Closed</Badge>}
              </Flex>
            </Flex>
          </Card>
        );
      })}
    </Grid>
  );
};

export { Results };

// {data.map((item: any, i: number) => {
//   return (
//     <div key={i} className={styles.card}>
//       <Text>
//         <p>name: {item.name}</p>
//         <p>address: {item.address}</p>
//         <p>rating: {item.rating}</p>
//         <p>open now?:{item.open ? "true" : "false"}</p>
//       </Text>
//       {item.types ? (
//         <p>
//           types:
//           {item.types.map((type: string, i: number) => {
//             return (
//               <p style={{ border: "1px solid black" }} key={i}>
//                 {type}
//               </p>
//             );
//           })}
//         </p>
//       ) : null}
//     </div>
//   );
// })}

// 컴포넌트 파일 이름은 무조건 대문자로 시작
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  CheckCircleIcon,
  WarningIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

const percent = [
  {
    percentage: 70,
  },
];

const Complextable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>
                  Title <ChevronDownIcon />
                </Th>
                <Th>
                  Title <ChevronDownIcon />
                </Th>
                <Th>
                  Title <ChevronDownIcon />
                </Th>
                <Th isNumeric>
                  Title <ChevronDownIcon />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketplace</Td>
                <Td>
                  <CheckCircleIcon color="#05CD99" /> Approved
                </Td>
                <Td>24.Jan.2021</Td>
                <Td isNumeric>
                  {percent.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Venus PRO</Td>
                <Td>
                  <QuestionIcon color="#EE5D50" /> Disable
                </Td>
                <Td>30.Dec.2021</Td>
                <Td isNumeric>
                  {" "}
                  {percent.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Uranus Kit</Td>
                <Td>
                  <WarningIcon color="#FFCE20" /> Error
                </Td>
                <Td>20.May.2021</Td>
                <Td isNumeric>
                  {" "}
                  {percent.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Venus DS</Td>
                <Td>
                  <CheckCircleIcon color="#05CD99" /> Approved
                </Td>
                <Td>12.Jul.2021</Td>
                <Td isNumeric>
                  {" "}
                  {percent.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Complextable;

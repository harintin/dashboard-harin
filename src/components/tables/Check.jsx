// 컴포넌트 파일 이름은 무조건 대문자로 시작
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Check = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Check Table</Heading>
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
                <Td>
                  <Checkbox defaultChecked>Marketplace</Checkbox>
                </Td>
                <Td>17.5%</Td>
                <Td>2.458</Td>
                <Td isNumeric>24.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus PRO</Checkbox>
                </Td>
                <Td>10.8%</Td>
                <Td>1.485</Td>
                <Td isNumeric>12.Jun.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Uranus Kit</Checkbox>
                </Td>
                <Td>21.3%</Td>
                <Td>1.024</Td>
                <Td isNumeric>5.Jan.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus DS</Checkbox>
                </Td>
                <Td>31.5%</Td>
                <Td>858</Td>
                <Td isNumeric>7.Mar.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                </Td>
                <Td>12.2%</Td>
                <Td>258</Td>
                <Td isNumeric>17.Dec.2021</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Check;

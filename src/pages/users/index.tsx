import { Box, Button, Checkbox, Text, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "8"]}>
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="blue"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="blue" />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="blue" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Leite</Text>
                                        <Text fontSize="sm" color="gray.300">galeite@gmail.com</Text>
                                    </Box>
                                </Td>

                                {isWideVersion && <Td>
                                    14 de Dezembro, 2021
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="blue" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Leite</Text>
                                        <Text fontSize="sm" color="gray.300">galeite@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>
                                    14 de Dezembro, 2021
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="blue" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Leite</Text>
                                        <Text fontSize="sm" color="gray.300">galeite@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>
                                    14 de Dezembro, 2021
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="blue" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Leite</Text>
                                        <Text fontSize="sm" color="gray.300">galeite@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>
                                    14 de Dezembro, 2021
                                </Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        iconSpacing={isWideVersion ? '1.5' : '-0.5'}
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        {isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}
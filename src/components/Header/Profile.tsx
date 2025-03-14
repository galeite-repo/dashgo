import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center">

            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gabriel Leite</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >galeite@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Gabriel Leite" src="https://github.com/gabrieljahhh.png"></Avatar>
        </Flex>
    )
}
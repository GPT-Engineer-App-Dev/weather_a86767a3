import { Box, Center, Flex, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { FaCloudSun, FaWind, FaTint, FaCompass } from "react-icons/fa";

const Index = () => {
  // Mock data for the weather, replace with real data from an API
  const weatherData = {
    city: "San Francisco",
    temperature: "17",
    description: "Partly Cloudy",
    details: {
      wind: "5 km/h",
      humidity: "68%",
      pressure: "1015 hPa",
    },
    forecast: [
      { day: "MON", icon: <FaCloudSun />, temp: "18°C" },
      { day: "TUE", icon: <FaCloudSun />, temp: "21°C" },
      { day: "WED", icon: <FaCloudSun />, temp: "16°C" },
      { day: "THU", icon: <FaCloudSun />, temp: "20°C" },
      { day: "FRI", icon: <FaCloudSun />, temp: "19°C" },
    ],
  };

  return (
    <Box p={4}>
      <Center flexDirection="column">
        <Heading size="xl" mb={2}>
          {weatherData.city}
        </Heading>
        <Text fontSize="5xl" fontWeight="bold">
          {weatherData.temperature}°
        </Text>
        <Text fontSize="xl" mb={6}>
          {weatherData.description}
        </Text>

        <SimpleGrid columns={3} spacing={10} mb={6}>
          <VStack>
            <FaWind />
            <Text>{weatherData.details.wind}</Text>
          </VStack>
          <VStack>
            <FaTint />
            <Text>{weatherData.details.humidity}</Text>
          </VStack>
          <VStack>
            <FaCompass />
            <Text>{weatherData.details.pressure}</Text>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={5} spacing={4}>
          {weatherData.forecast.map((day) => (
            <VStack key={day.day}>
              <Text fontSize="lg">{day.day}</Text>
              <Box color="gray.500" fontSize="2xl">
                {day.icon}
              </Box>
              <Text fontSize="md">{day.temp}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Center>
      <Flex mt={10} justifyContent="center">
        <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1705077689363-76d4424a13c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwaWNvbnxlbnwwfHx8fDE3MDk4MTk1MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather icon" />
      </Flex>
    </Box>
  );
};

export default Index;

import { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { VStack, Icon, FlatList } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { api } from "../services/api";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCard, PoolPros } from "../components/PoolCard";
import { EmptyPoolList } from "../components/EmptyPoolList";

export function Pools() {
  const [isLoading, setIsLoading] = useState(true);
  const [polls, setPolls] = useState<PoolPros[]>([]);

  const { navigate } = useNavigation();

  async function fetchPolls() {
    try {
      setIsLoading(true);
      const response = await api.get("/pools");
      setPolls(response.data.polls);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPolls();
    }, [])
  );

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack px={5}>
        <VStack
          mt={6}
          pb={4}
          mb={4}
          borderBottomWidth={1}
          borderBottomColor="gray.200"
        >
          <Button
            title="Buscar bolão por código"
            leftIcon={
              <Icon as={Octicons} name="search" color="black" size="md" />
            }
            onPress={() => navigate("find")}
          />
        </VStack>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={polls}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PoolCard data={item} />}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb: 10 }}
            ListEmptyComponent={EmptyPoolList}
          />
        )}
      </VStack>
    </VStack>
  );
}

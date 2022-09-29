import { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import MainButton from './components/MainButton';
import UserCard from './components/UserCard';
import { statusMap } from './constants/constants';
import { getStargazers } from './services/starring';

export default function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [repo, setRepo] = useState<string>("");
  const [owner, setOwner] = useState<string>("");

  interface User {
    login: string,
    avatar_url: string,
    id: string,
  }

  const fetchStargazers = async (owner: string, repo: string, page: number) => {
    try {
      const stargazers = await getStargazers(owner, repo, page);
      if (stargazers?.status == statusMap.ok) {
        // Check is the "search stargazers button" has already been pressed
        if (page === 1) {
          setUsers(stargazers?.data)
        } else {
          setUsers([...users,...stargazers?.data]);
        }
      }
    } catch (error: any) {
      Alert.alert("Owner and/or repo non-existent")
    }
  }

  useEffect(() => {
    if (page !== 1) {
      fetchStargazers(owner, repo, page);
    }
  }, [page]);

  const renderItem = ({ item }: {item: User}) => {
    return (
      <UserCard name={item.login} image={item.avatar_url} />
    )
  }

  const searchStargazers = () => {
    // Reset the users to prevent wrong info
    fetchStargazers(owner, repo, 1);
  } 
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setOwner(text)}
        value={owner}
        placeholder='Owner of the repository'
        keyboardType='default'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setRepo(text)}
        value={repo}
        placeholder='Name of the repository'
        keyboardType='default'
        autoCapitalize='none'
      />
      <MainButton
        onPress={() => searchStargazers()}
        disabled={owner.length === 0 || repo.length === 0}
        text="Search stargazers"
      />
      {users.length > 0 && (
          <FlatList
            data={users}
            renderItem={renderItem} 
            keyExtractor={item => item.id}
            ListHeaderComponent={({}) => <Text style={{marginBottom: 10}}>Stargazers</Text>}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              setPage(page + 1);
            }}
            showsVerticalScrollIndicator={false}
          />
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

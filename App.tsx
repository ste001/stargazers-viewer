import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { statusMap } from './constants/constants';
import { getStargazers } from './services/starring';

export default function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchStargazers = async () => {
      const stargazers = await getStargazers("facebook", "react-native");
      if (stargazers?.status == statusMap.ok) {
        setUsers(stargazers?.data);
      }
    }
    fetchStargazers();
  }, []);
  

  return (
    <View style={styles.container}>
      {users.map((user, index) => {
        return (
          <Text key={index.toString()}>{user.login}</Text>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

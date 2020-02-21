import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Searchbar, Divider } from 'react-native-paper';

import { fetchAllUsers } from '../../store/user/actions';
import { UserRow } from '../../components';
import styles from './UserList.styles';

type UserListNavigationProp = StackNavigationProp<RootStackParamList, 'UserList'>;

type Props = {
  navigation: UserListNavigationProp;
};

const UserList: React.FC<Props> = ({ navigation }) => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.user.all);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { safeAreViewStyle, containerStyle } = styles;

  return (
    <SafeAreaView style={safeAreViewStyle}>
      <View style={containerStyle}>
        <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
        <Divider />
        <FlatList
          data={users.filter(u => u.name.toLowerCase().startsWith(query.toLowerCase()))}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <UserRow
              name={item.name}
              email={item.email}
              onPress={() => navigation.navigate('UserProfile', { user: item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserList;

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Subheading, Divider } from 'react-native-paper';

type Props = {
  name: string;
  email: string;
  onPress: () => void;
};

const UserRow: React.FC<Props> = ({ name, email, onPress }) => {
  const { containerStyle } = styles;
  return (
    <>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <Title>{name}</Title>
        <Subheading>{email}</Subheading>
      </TouchableOpacity>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default UserRow;

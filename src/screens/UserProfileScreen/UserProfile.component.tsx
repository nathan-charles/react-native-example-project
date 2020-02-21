import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Avatar, Card, Divider, Title, Paragraph, Subheading, Headline } from 'react-native-paper';

import styles from './UserProfile.styles';

type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;

type Props = {
  route: UserProfileRouteProp;
};

const UserProfile: React.FC<Props> = ({ route }) => {
  const { name, email, username, address, phone, website, company } = route.params.user;

  const { safeAreViewStyle, contentContainerStyle, dividerStyle, attributeNameStyle } = styles;

  const avatarText = name
    .replace('Mrs.', '')
    .replace('Mr.', '')
    .replace('Dr.', '')
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <SafeAreaView style={safeAreViewStyle}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <Card>
          <Card.Content>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar.Text size={100} label={avatarText} />
              <View style={{ marginLeft: 15 }}>
                <Headline>{name}</Headline>
                <Subheading>{company.name}</Subheading>
              </View>
            </View>
            <Divider style={dividerStyle} />
            <Title>Contact Information</Title>
            <Paragraph style={attributeNameStyle}>
              Email: <Paragraph>{email}</Paragraph>
            </Paragraph>
            <Paragraph style={attributeNameStyle}>
              Phone: <Paragraph>{phone}</Paragraph>
            </Paragraph>
            <Divider style={dividerStyle} />
            <Title>Address</Title>
            <Paragraph>{`${address.street} \n${address.suite}\n${address.city}, ${address.zipcode}`}</Paragraph>
            <Divider style={dividerStyle} />
            <Title>Other Information</Title>
            <Paragraph style={attributeNameStyle}>
              Username: <Paragraph>{username}</Paragraph>
            </Paragraph>
            <Paragraph style={attributeNameStyle}>
              Website: <Paragraph>{website}</Paragraph>
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;

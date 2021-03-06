import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Dimensions, StyleSheet } from 'react-native';
import { LogInfo } from '../model/logInfo/LogInfo';

type Props = {
  logInfo: LogInfo;
};

const LogCard: React.FC<Props> = ({ logInfo }) => {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.container}
      onPress={() => {
        navigation.navigate('LogEdition', { logInfo: logInfo });
      }}>
      <Card.Cover
        style={styles.image}
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <Card.Content>
        <Title>{logInfo.date}</Title>
        <Paragraph>{logInfo.location}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  fab: {
    bottom: 30,
    right: 30,
    position: 'absolute',
    backgroundColor: 'skyblue',
  },
  textInput: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default LogCard;

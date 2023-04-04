import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function Feed() {
    const styles = StyleSheet.create({
        view: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return (
      <View style={styles.view}>
        <Text>Feed!</Text>
      </View>
    );
  }

export default Feed;

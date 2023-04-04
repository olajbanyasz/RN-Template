import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function Notifications() {
    const styles = StyleSheet.create({
        view: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return (
      <View style={styles.view}>
        <Text>Notifications!</Text>
      </View>
    );
  }

export default Notifications;

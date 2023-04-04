import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


function Profile() {
    const styles = StyleSheet.create({
        view: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return (
      <View style={styles.view}>
        <Text>Profile!</Text>
      </View>
    );
  }

export default Profile;

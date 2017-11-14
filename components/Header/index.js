import React from 'react';
import { Constants } from 'expo';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { blue, white, gray, defaultGray } from '../../utils/colors';

export default function Header ({ statusColor, headerColor = white, titleColor, title = '', LeftComponent = 1, barStyle = 'light-content'}) {
  styles = StyleSheet.create({
    stsBarContainer: {
      backgroundColor: statusColor,
      height: Constants.statusBarHeight
    },
    statusBar: {
      backgroundColor: statusColor,
    },
    headerContainer: {
      height: 44,
      backgroundColor: headerColor,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    leftComponent: {
      flex: 1,
    },
    centerComponent: {
      flex: 10,
    },
    rightComponent: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: titleColor,
      textAlign: 'center',
    }

  })

  if(title === '') {
    return (
      <View>
        <View style={styles.stsBarContainer}>
          <StatusBar style={styles.statusBar} tanslucent barStyle={barStyle}/>
        </View>
      </View>
    )
  }

  return (
      <View>
        <View style={styles.stsBarContainer}>
          <StatusBar style={styles.statusBar} tanslucent barStyle={barStyle}/>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.leftComponent}>
            {LeftComponent !== 1 && (
              <View>{LeftComponent}</View>
            )}
          </View>
          <View style={styles.centerComponent}>
            {title.length > 0 && (
              <Text style={styles.title}>{title}</Text>
            )}
          </View>
          <View style={styles.rightComponent}>

          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: defaultGray,
          }}
        />
      </View>
  )
}

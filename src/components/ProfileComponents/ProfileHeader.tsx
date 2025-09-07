import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import ProfileHeaderText from './ProfileHeaderText';
import React from 'react'

const ProfileHeader = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <View style={[styles.container, isDark ? { backgroundColor: '#141416',borderColor: '#262626', } : { backgroundColor: '#fff' ,borderTopWidth: 0,borderBottomWidth:0 }]}>
            <Image
                source={require('../../../assets/images/avatar.png')}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    // borderColor: '#262626',
                    // borderWidth: 2
                }}
            />
            <ProfileHeaderText />
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: '100%',
        height: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 40,
    }
})
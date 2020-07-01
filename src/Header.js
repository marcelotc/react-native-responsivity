import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Header Component</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    }
})

export default Header;

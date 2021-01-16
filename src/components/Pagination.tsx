import React from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    Text,
} from 'react-native';

const width = Dimensions.get('window').width;

interface PaginationProps{
    photos:string[],
    indexImage:number
}

const countDecimals = (value: number) => {

    let unidade, dezena;

    unidade = value % 10;
    value = (value - unidade) / 10;
    dezena = value % 10;

    return dezena;

}

const Pagination: React.FC<PaginationProps> = ({photos,indexImage}) => {

    return (

        <View style={styles.indicator}>

            {photos.map((item: string, index: number) => {

                if (countDecimals(index) === countDecimals(indexImage)) {
                    return <View key={index + item} style={
                        [index == indexImage ?
                            { backgroundColor: 'orange' } :
                            {
                                backgroundColor: 'transparent',
                                borderColor: 'white',
                                borderWidth: 1

                            },
                        styles.square]}>
                        <Text style={styles.TextIndicator}>
                            {index + 1}
                        </Text>


                    </View>
                }

            })}

        </View>

    );
};

const styles = StyleSheet.create({

    indicator: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 75,
        justifyContent: 'center',
        width,
    },

    TextIndicator: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },

    square: {
        width: 22,
        height: 22,
        borderRadius: 100 / 2,
        textAlign: 'right',
        marginHorizontal: 4,
    },

});

export default Pagination;

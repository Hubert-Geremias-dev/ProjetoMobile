import { Image, StyleSheet, Text, View, Button } from "react-native";

export function ProductCard({ Url, name, price, onBuy }) {
    return (
        <View style={style.container}>
            <Text style={style.title}>{name}</Text>
            <Image style={style.image} source={Url} />
            <Text style={style.text}><Text style={{ fontWeight: 'bold' }}>Preço</Text> - R$: {price}</Text>
            <View style={{ marginTop: 10 }}>
                <Button title="Comprar" onPress={onBuy} color="green"/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        width: "100%",
        height: 420,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: 'grey',
        shadowOffset: { width: 0, height: 4 },
        elevation: 10,
    },
    image: {
        width: '50%',
        borderRadius: 10,
        maxHeight: 300,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    text: {
        fontSize: 15
    }
});

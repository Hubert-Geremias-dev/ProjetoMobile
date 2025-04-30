import { StyleSheet, Text, View, ScrollView, Modal, Pressable } from "react-native";
import { useState } from "react";
import { ProductCard } from "./src/components/ProductCard";
import { ListProducts } from './src/hooks/ListProducts';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleBuy = (productName) => {
    setSelectedProduct(productName);
    setModalVisible(true);
  };

  return (
    <View style={styles.box}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Catálogo Porsche 911</Text>
        {ListProducts.map((product, index) => (
          <ProductCard
            key={index}
            Url={product.Url}
            name={product.name}
            price={product.price}
            onBuy={() => handleBuy(product.name)}
          />
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{selectedProduct} Comprado!</Text>
            <Pressable style={styles.buttonClose} onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'white' }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  scroll: {
    width: "100%",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 25,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15
  },
  buttonClose: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 5
  }
});

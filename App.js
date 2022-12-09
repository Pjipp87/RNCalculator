import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Haptics from "expo-haptics";

export default function App() {
  const firstRow = [{ name: "0" }, { name: "." }];
  const secondRow = [{ name: "1" }, { name: "2" }, { name: "3" }];
  const thirdRow = [{ name: "4" }, { name: "5" }, { name: "6" }];
  const fourthRow = [{ name: "7" }, { name: "8" }, { name: "9" }];
  const fifthRow = [{ name: "AC" }, { name: "+/-" }, { name: "%" }];

  const press = (item) => {
    Haptics.selectionAsync();
    alert(item.item.name);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>

      <FlatList
        style={{ height: 120 }}
        data={fifthRow}
        renderItem={(item) => (
          <TouchableOpacity
            style={item.item.name !== "0" ? styles.button : styles.buttonZero}
            onPress={() => press(item)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        scrollEnabled={false}
      ></FlatList>
      <FlatList
        style={{ height: 120 }}
        data={fourthRow}
        renderItem={(item) => (
          <TouchableOpacity
            style={item.item.name !== "0" ? styles.button : styles.buttonZero}
            onPress={() => press(item)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        scrollEnabled={false}
      ></FlatList>
      <FlatList
        style={{ height: 120 }}
        data={thirdRow}
        renderItem={(item) => (
          <TouchableOpacity
            style={item.item.name !== "0" ? styles.button : styles.buttonZero}
            onPress={() => press(item)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        scrollEnabled={false}
      ></FlatList>
      <FlatList
        style={{ height: 120 }}
        data={secondRow}
        renderItem={(item) => (
          <TouchableOpacity
            style={item.item.name !== "0" ? styles.button : styles.buttonZero}
            onPress={() => press(item)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        scrollEnabled={false}
      ></FlatList>
      <FlatList
        style={{ height: 120 }}
        data={firstRow}
        renderItem={(item) => (
          <TouchableOpacity
            style={item.item.name !== "0" ? styles.button : styles.buttonZero}
            onPress={() => press(item)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        scrollEnabled={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 500,
    marginHorizontal: 5,
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  buttonZero: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 500,
    marginHorizontal: 5,
    height: 75,
    width: 150,
    borderRadius: 50,
  },
});

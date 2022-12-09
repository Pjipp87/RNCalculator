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
import { useState } from "react";

export default function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState();
  const [showNum, setShowNum] = useState(0);
  const [vorschau, setvorschau] = useState();

  const firstRow = [
    { name: "0", color: styles.buttonZero, fontColor: "white" },
    { name: ".", color: styles.button, fontColor: "white" },
    { name: "=", color: styles.orangeButton, fontColor: "white" },
  ];
  const secondRow = [
    { name: "1", color: styles.button, fontColor: "white" },
    { name: "2", color: styles.button, fontColor: "white" },
    { name: "3", color: styles.button, fontColor: "white" },
    { name: "+", color: styles.orangeButton, fontColor: "white" },
  ];
  const thirdRow = [
    { name: "4", color: styles.button, fontColor: "white" },
    { name: "5", color: styles.button, fontColor: "white" },
    { name: "6", color: styles.button, fontColor: "white" },
    { name: "-", color: styles.orangeButton, fontColor: "white" },
  ];
  const fourthRow = [
    { name: "7", color: styles.button, fontColor: "white" },
    { name: "8", color: styles.button, fontColor: "white" },
    { name: "9", color: styles.button, fontColor: "white" },
    { name: "x", color: styles.orangeButton, fontColor: "white" },
  ];
  const fifthRow = [
    { name: "AC", color: styles.buttonLight, fontColor: "black" },
    { name: "+/-", color: styles.buttonLight, fontColor: "black" },
    { name: "%", color: styles.buttonLight, fontColor: "black" },
    { name: "/", color: styles.orangeButton, fontColor: "white" },
  ];

  const press = (item) => {
    Haptics.selectionAsync();

    switch (item.item.name) {
      case "+":
        setFirstNum(showNum);
        setOperator("+");
        setvorschau(firstNum + " " + operator);
        setShowNum(0);
        break;
      case "-":
        setFirstNum(showNum);
        setOperator("-");
        setvorschau(firstNum + " " + operator);
        setShowNum(0);
        break;
      case "x":
        setFirstNum(showNum);
        setOperator("*");
        setvorschau(firstNum + " " + operator);
        setShowNum(0);
        break;
      case "/":
        setFirstNum(showNum);
        setOperator("/");
        setvorschau(firstNum + " " + operator);
        setShowNum(0);
        break;
      case "=":
        setvorschau(firstNum + operator + showNum);
        break;
      default:
        if (item.item.name === "AC") {
          setShowNum(0);
        } else if (showNum === 0) {
          setShowNum(item.item.name);
        } else {
          setShowNum(showNum + item.item.name);
        }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>

      <View
        style={{
          width: "100%",
          flex: 0.3,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "right",
            fontSize: 40,
            color: "white",
            paddingBottom: 10,
            paddingRight: 20,
          }}
        >
          {vorschau}
        </Text>
        <Text
          style={{
            width: "100%",
            textAlign: "right",
            fontSize: 66,
            fontWeight: "bold",
            color: "white",
            paddingBottom: 40,
            paddingRight: 20,
          }}
        >
          {showNum}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flex: 0.6,
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "space-between",
        }}
      >
        <FlatList
          style={{ height: 75 }}
          data={fifthRow}
          renderItem={(item) => (
            <TouchableOpacity
              style={item.item.color}
              onPress={() => press(item)}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: item.item.fontColor,
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          scrollEnabled={false}
        ></FlatList>
        <FlatList
          style={{ height: 75 }}
          data={fourthRow}
          renderItem={(item) => (
            <TouchableOpacity
              style={item.item.color}
              onPress={() => press(item)}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: item.item.fontColor,
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          scrollEnabled={false}
        ></FlatList>
        <FlatList
          data={thirdRow}
          style={{ height: 75 }}
          renderItem={(item) => (
            <TouchableOpacity
              style={item.item.color}
              onPress={() => press(item)}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: item.item.fontColor,
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          scrollEnabled={false}
        ></FlatList>
        <FlatList
          style={{ height: 75 }}
          data={secondRow}
          renderItem={(item) => (
            <TouchableOpacity
              style={item.item.color}
              onPress={() => press(item)}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: item.item.fontColor,
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          scrollEnabled={false}
        ></FlatList>
        <FlatList
          data={firstRow}
          renderItem={(item) => (
            <TouchableOpacity
              style={item.item.color}
              onPress={() => press(item)}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: item.item.fontColor,
                }}
              >
                {item.item.name}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          scrollEnabled={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginHorizontal: 5,

    height: 85,
    width: 85,
    borderRadius: 50,
  },
  buttonLight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    marginHorizontal: 5,

    height: 85,
    width: 85,
    borderRadius: 50,
  },
  buttonZero: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginHorizontal: 5,

    height: 85,
    width: 180,
    borderRadius: 50,
  },
  orangeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    marginHorizontal: 5,
    height: 85,
    width: 85,
    borderRadius: 50,
  },
});

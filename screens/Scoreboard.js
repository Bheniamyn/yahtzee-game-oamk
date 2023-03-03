import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import style from "../style/style";
import { STORAGE_KEY } from "../constants/Game";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, DataTable } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default Scoreboard = ({ navigation }) => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getScoreboardData();
    });
  });

  const getScoreboardData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue !== null) {
        let tmpScores = JSON.parse(jsonValue);
        setHighScores(tmpScores);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearScoreboard = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setHighScores([]);
      getScoreboardData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={style.container}>
      <MaterialCommunityIcons
        style={{ textAlign: "center", color: "#27ae60", marginBottom: -10 }}
        name="crown-outline"
        size={52}
      />
      <Text
        style={{ fontSize: 40, textAlign: "center", fontFamily: "Righteous" }}
      >
        TOP 5
      </Text>
      <ScrollView>
        <DataTable>
          <DataTable.Header
            style={{
              backgroundColor: "#27ae60",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <DataTable.Title
              textStyle={{
                color: "white",
                fontFamily: "Righteous",
                fontSize: 15,
              }}
            >
              Name
            </DataTable.Title>
            <DataTable.Title
              textStyle={{
                color: "white",
                fontFamily: "Righteous",
                fontSize: 15,
              }}
            >
              Date & Time
            </DataTable.Title>
            <DataTable.Title
              textStyle={{
                color: "white",
                fontFamily: "Righteous",
                fontSize: 15,
              }}
            >
              Score
            </DataTable.Title>
          </DataTable.Header>

          {highScores.map((player, i) => (
            <DataTable.Row key={i + 1} style={{ backgroundColor: "#2ecc71" }}>
              <DataTable.Cell textStyle={{ color: "white" }}>
                {player.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ color: "white" }}>
                {player.date} {player.time}
              </DataTable.Cell>
              <DataTable.Cell
                textStyle={{ color: "white", fontFamily: "Righteous" }}
              >
                {player.points}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
      {highScores.length > 0 && (
        <Button style={style.button} mode="contained" onPress={clearScoreboard}>
          Reset Table
        </Button>
      )}
    </View>
  );
};

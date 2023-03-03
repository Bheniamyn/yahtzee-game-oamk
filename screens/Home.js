import { useState } from "react";
import { Keyboard, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {
  BONUS_POINTS,
  MAX_SPOT,
  MIN_SPOT,
  NBR_OF_DICES,
  NBR_OF_THROWS,
  BONUS_POINTS_LIMIT,
} from "../constants/Game";
import style from "../style/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default Home = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");
  const [hasPlayerName, setHasPlayerName] = useState(false);

  function handlePlayerName(value) {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }

  return (
    <View style={style.container}>
      {!hasPlayerName ? (
        <>
          <Text style={style.title}>Welcome to Yahtzee!</Text>
          <Text style={style.subTitle}>
            For the scoreboard enter your name:
          </Text>
          <TextInput
            onChangeText={setPlayerName}
            mode="outlined"
            label={"Player name"}
            style={style.textInput}
          />
          <Button
            onPress={() => handlePlayerName(playerName)}
            mode="contained"
            style={style.button}
          >
            OK
          </Button>
        </>
      ) : (
        <>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
            <MaterialCommunityIcons name="information-outline" size={32} />
            <Text style={style.title}>Rules</Text>
          </View>
          <Text style={style.subTitle}>
            THE GAME: Upper section of the classic Yahtzee dice game. You have{" "}
            {NBR_OF_DICES} dices and for the every dice you have {NBR_OF_THROWS}{" "}
            throws. After each throw you can keep dices in order to get same
            dice spot counts as many as possible. In the end of the turn you
            must select your points from {MIN_SPOT} to {MAX_SPOT}. Game ends
            when all points have been selected. The order for selecting those is
            free.
          </Text>
          <Text style={style.subTitle}>
            POINTS: After each turn game calculates the sum for the dices you
            selected. Only the dices having the same spot count are calculated.
            Inside the game you can not select same points from {MIN_SPOT} to{" "}
            {MAX_SPOT} again.
          </Text>
          <Text style={style.subTitle}>
            GOAL: To get points as much as possible. {BONUS_POINTS_LIMIT} points
            is the limit of getting bonus which gives you {BONUS_POINTS} points
            more.
          </Text>
          <Text style={style.subTitle}>Good luck, {playerName}</Text>
          <Button
            style={style.button}
            mode="contained"
            onPress={() =>
              navigation.navigate("Gameboard", { player: playerName })
            }
          >
            PLAY
          </Button>
        </>
      )}
    </View>
  );
};

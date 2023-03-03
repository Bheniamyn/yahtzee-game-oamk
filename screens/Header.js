import React from "react";
import { Text, View } from "react-native";
import style from "../style/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { LETTER_ICON_SIZE } from "../constants/Game";

export default Header = () => {
  return (
    <View style={style.header}>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons name="alpha-y-box" size={LETTER_ICON_SIZE} color="#2ecc71" />
        <MaterialCommunityIcons name="alpha-a-box" size={LETTER_ICON_SIZE} color="#27ae60"  />
        <MaterialCommunityIcons name="alpha-h-box" size={LETTER_ICON_SIZE} color="#2ecc71"  />
        <MaterialCommunityIcons name="alpha-t-box" size={LETTER_ICON_SIZE} color="#27ae60"  />
        <MaterialCommunityIcons name="alpha-z-box" size={LETTER_ICON_SIZE} color="#2ecc71"  />
        <MaterialCommunityIcons name="alpha-e-box" size={LETTER_ICON_SIZE} color="#27ae60"  />
        <MaterialCommunityIcons name="alpha-e-box" size={LETTER_ICON_SIZE} color="#2ecc71"  />
      </View>
    </View>
  );
};

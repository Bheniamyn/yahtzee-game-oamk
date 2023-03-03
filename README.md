# Yahtzee Game

This code represents a React Native component called `Yahtzee` that displays a dice game board.

The component uses several state variables to track the current game state and user input. It also makes use of the `useEffect` hook to run certain actions when the component mounts or when the number of throws changes.

The dice game itself involves rolling a set number of dice and then selecting which dice to keep before rolling the rest again, up to a certain number of rolls. After the rolls, the user selects a number on the game board based on the combination of dice they rolled.

The component uses various functions to handle these actions, including `selectDice`, `getSpotTotal`, and `selectDicePoints`.

The code also imports various modules and constants, including icons from the `MaterialCommunityIcons` package and values for the number of dice, number of rolls, and bonus points needed to win. It also uses the` AsyncStorage` module to locally store high scores.

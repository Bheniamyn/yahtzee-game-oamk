import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: 'center'
  },
  footer: {
    justifyContent: 'center',
    backgroundColor: "#27ae60",
    flexDirection: "row",
    color: "white",
  },
  footerText: {
    fontFamily: 'Righteous',
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
  title: {
    fontFamily: 'Righteous',
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  subTitle: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
  author: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
  gameboard: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  gameinfo: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    marginTop: 20,
    padding: 10,
  },
  flex: {
    flexDirection: "row",
    marginVertical: 40,
  },
  button: {
    margin: 10,
    width: 150,
    alignSelf: "center",
    backgroundColor: "#27ae60",
  },
  textInput: {
    margin: 10,
  },
  buttonText: {
    color: "#2B2B52",
    fontSize: 15,
  },
  points: {
    margin: 10,
    alignSelf: 'center',
    fontSize: 15,
  },
  dicePoints: {
    flexDirection: "row",
    width: 300,
  },
});

import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_3_3} />
      <View style={styles.View_3_12} />
      <View style={styles.View_3_10}>
        <View style={styles.View_3_9} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54af/cad6/8d89b2a2bb3d066837c110f6a04671ad"
          }}
          style={styles.ImageBackground_3_7}
        />
        <View style={styles.View_3_8}>
          <Text style={styles.Text_3_8}>Alex Bradley</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_12: {
    width: wp("92.7536231884058%"),
    minWidth: wp("92.7536231884058%"),
    height: hp("102.86885245901641%"),
    minHeight: hp("102.86885245901641%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("15.163934426229508%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_3_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_3_7: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("3.825136612021858%")
  },
  View_3_8: {
    width: wp("62.80193236714976%"),
    minWidth: wp("62.80193236714976%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("2.0491803278688523%")
  },
  Text_3_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

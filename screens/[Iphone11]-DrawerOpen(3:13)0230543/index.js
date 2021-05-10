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
      <View style={styles.View_3_14} />
      <View style={styles.View_3_22} />
      <View style={styles.View_10_3}>
        <View style={styles.View_3_23} />
        <View style={styles.View_10_5}>
          <View style={styles.View_10_0}>
            <Text style={styles.Text_10_0}>Home</Text>
          </View>
          <View style={styles.View_10_1}>
            <Text style={styles.Text_10_1}>Contact</Text>
          </View>
          <View style={styles.View_10_2}>
            <Text style={styles.Text_10_2}>Blog</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_15}>
        <View style={styles.View_3_16} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c22/5a9d/1d470e8dd8609446e21e80e3f724c29a"
          }}
          style={styles.ImageBackground_3_29}
        />
        <View style={styles.View_3_21}>
          <Text style={styles.Text_3_21}>Alex Bradley</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_14: {
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
  View_3_22: {
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
  View_10_3: {
    width: wp("77.29468599033817%"),
    minWidth: wp("77.29468599033817%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_23: {
    width: wp("77.29468599033817%"),
    minWidth: wp("77.29468599033817%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.75
  },
  View_10_5: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("15.163934426229508%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_0: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("1.3661202185792352%")
  },
  Text_10_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_1: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("13.66120218579235%")
  },
  Text_10_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10_2: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("25.956284153005463%")
  },
  Text_10_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_15: {
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
  View_3_16: {
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
  ImageBackground_3_29: {
    width: wp("5.815259961114413%"),
    minWidth: wp("5.815259961114413%"),
    height: hp("3.916711494570873%"),
    minHeight: hp("3.916711494570873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("2.73224043715847%")
  },
  View_3_21: {
    width: wp("62.80193236714976%"),
    minWidth: wp("62.80193236714976%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("2.0491803278688523%")
  },
  Text_3_21: {
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

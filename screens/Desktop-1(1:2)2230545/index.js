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
      <View style={styles.View_1_3} />
      <View style={styles.View_1_26} />
      <View style={styles.View_2_2}>
        <View style={styles.View_1_4} />
        <View style={styles.View_1_8}>
          <View style={styles.View_1_15}>
            <View style={styles.View_1_6} />
            <View style={styles.View_1_14}>
              <Text style={styles.Text_1_14}>Home</Text>
            </View>
          </View>
          <View style={styles.View_1_20}>
            <View style={styles.View_1_11} />
            <View style={styles.View_1_19}>
              <Text style={styles.Text_1_19}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_1_22}>
            <View style={styles.View_1_12} />
            <View style={styles.View_1_21}>
              <Text style={styles.Text_1_21}>Blog</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_5}>
        <Text style={styles.Text_2_5}>Alex Bradley</Text>
      </View>
      <View style={styles.View_2_23} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139.89071038251367%"),
    minHeight: hp("139.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_26: {
    width: wp("90.97222222222221%"),
    minWidth: wp("90.97222222222221%"),
    height: hp("121.17486338797814%"),
    minHeight: hp("121.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.513888888888888%"),
    top: hp("18.71584699453552%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_2_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6944444444444444%"),
    top: hp("2.0491803278688523%")
  },
  View_1_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_8: {
    width: wp("47.22222222222222%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.083333333333332%"),
    top: hp("0.6830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_15: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_6: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 7, 7, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_14: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_20: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666668%"),
    top: hp("0%")
  },
  View_1_11: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 7, 7, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_19: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_22: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%")
  },
  View_1_12: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 7, 7, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_21: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_5: {
    width: wp("26.041666666666668%"),
    minWidth: wp("26.041666666666668%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("21.311475409836063%")
  },
  Text_2_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_23: {
    width: wp("26.041666666666668%"),
    minWidth: wp("26.041666666666668%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("53.68852459016394%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

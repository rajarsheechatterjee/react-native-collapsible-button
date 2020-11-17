import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TouchableRipple from "react-native-material-ripple";

const CollapsibleButton = (props) => {
    const {
        value,
        borderColor,
        onPress,
        textStyle,
        rippleColor,
        width,
        rippleCentered,
        backgroundColor,
        paddingVertical,
        paddingHorizontal,
        borderRadius,
        borderWidth,
        iconSize,
    } = props;

    return (
        <TouchableRipple
            style={{
                borderRadius: borderRadius,
                width: width,
            }}
            onPress={onPress}
            rippleContainerBorderRadius={borderRadius}
            rippleCentered={rippleCentered}
            rippleColor={rippleColor}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: borderWidth,
                    borderRadius: borderRadius,
                    paddingVertical: paddingVertical,
                    paddingHorizontal: paddingHorizontal,
                    borderColor: borderColor,
                    backgroundColor: backgroundColor,
                }}
            >
                <MaterialCommunityIcons
                    name={value ? "chevron-up" : "chevron-down"}
                    size={iconSize}
                    style={{ paddingRight: 6 }}
                    color={textColor}
                />
                <Text style={textStyle}>{value ? "Less" : "More"}</Text>
            </View>
        </TouchableRipple>
    );
};

CollapsibleButton.prototype = {
    value: PropTypes.bool,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    onPress: PropTypes.func,
    rippleColor: PropTypes.string,
    width: PropTypes.number,
    rippleCentered: PropTypes.bool,
    backgroundColor: PropTypes.string,
    paddingVertical: PropTypes.number,
    paddingHorizontal: PropTypes.number,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    iconSize: PropTypes.number,
    textStyle: PropTypes.object,
};

CollapsibleButton.defaultProps = {
    value: true,
    borderColor: "#000000",
    textColor: "#000000",
    rippleColor: "rgb(0,0,0)",
    width: 100,
    rippleCentered: true,
    backgroundColor: "transparent",
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 50,
    borderWidth: 1,
    iconSize: 15,
};

export default CollapsibleButton;

import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TouchableRipple from "react-native-material-ripple";

const CollapsibleButton = (props) => {
    const { value, borderColor, onPress, textColor, rippleColor } = props;
    return (
        <TouchableRipple
            style={{
                borderRadius: 50,
                width: 100,
            }}
            onPress={onPress}
            rippleContainerBorderRadius={50}
            rippleCentered
            rippleColor={rippleColor}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 3,
                    borderColor: borderColor,
                }}
            >
                <MaterialCommunityIcons
                    name={value ? "chevron-down" : "chevron-up"}
                    size={15}
                    style={{ paddingRight: 6 }}
                    color={textColor}
                />
                <Text style={{ color: textColor }}>
                    {value ? "More" : "Less"}
                </Text>
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
};

CollapsibleButton.defaultProps = {
    value: true,
    borderColor: "#000000",
    textColor: "#000000",
    rippleColor: "rgb(0,0,0)",
};

export default CollapsibleButton;

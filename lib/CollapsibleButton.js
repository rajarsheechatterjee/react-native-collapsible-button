import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableRipple } from "react-native-paper";

const CollapsibleButton = (props) => {
    const { value, borderColor, onPress, textColor } = props;
    return (
        <TouchableRipple
            style={{
                borderRadius: 50,
                width: 100,
            }}
            onPress={onPress}
            borderless
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
};

CollapsibleButton.defaultProps = {
    value: true,
    borderColor: "#FFFFFF",
    textColor: "#FFFFFF",
};

export default CollapsibleButton;

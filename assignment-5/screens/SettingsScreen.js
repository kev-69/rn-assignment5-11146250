import React, { useContext } from 'react'
import { themeContext } from '../context/theme';
import { AntDesign } from "@expo/vector-icons"

const SettingsScreen = () => {
    const {darkTheme, toggleTheme} = useContext(themeContext);

  return (
    <View
        style={{
            flex: 1,
            backgroundColor: darkTheme ? "#000" : "#FFF"
        }}
    >
        <View
            style={{
                flex: 1,
                padding: 20,
                backgroundColor: darkTheme ? "#000" : "#FFF"
            }}
        >
            <View
                style={{
                    marginTop: 40,
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: darkTheme ? "#FFF" : "#000"
                    }}
                >
                    Settings
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: darkTheme ? "#FFF" : "#000",
                    }}
                >
                    Language
                </Text>
            </View>

            <View>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 10,
                marginTop: 30.
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: darkTheme ? "#FFF" : "#000"
                }}
            >
                My Profile
            </Text>
        </View>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 10,
                marginTop: 30.
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: darkTheme ? "#FFF" : "#000"
                }}
            >
                Contact Us
            </Text>
            <View>
                <AntDesign name='right' size={24} color="black" />
            </View>
        </View>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 10,
                marginTop: 30.
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: darkTheme ? "#FFF" : "#000"
                }}
            >
                Change Password
            </Text>
            <View>
                <AntDesign name='right' size={24} color="black" />
            </View>
        </View>

        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 10,
                marginTop: 30.
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: darkTheme ? "#FFF" : "#000"
                }}
            >
                Privacy Policy
            </Text>
            <View
                style={{
                    color: darkTheme ? "#FFF" : "#000"
                }}
            >
                <AntDesign name='right' size={24} color="black" />
            </View>
        </View>

        <View 
            style={{ marginTop: 55 }}
        >
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          {/* Text  */}
          <View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: darkTheme ? "#fff" : "#000",
              }}
            >
              Theme
            </Text>
          </View>
          {/* Switch  */}
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "silver" }}
              thumbColor={darkTheme ? "green" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={darkTheme}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SettingsScreen

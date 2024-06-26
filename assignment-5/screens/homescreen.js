import { View, Text, Image, FlatList, BackHandler } from "react-native";
import React, { useContext } from "react";
import data from "../mockdata/data";
import { themeContext } from "../context/theme";

const HomeScreen = () => {
    const {darkTheme} = useContext(themeContext);

    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: darkTheme ? "#000" : "#FFF",
            }}
        >
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 7,
                backgroundColor: darkTheme ? "#000" : "#FFF"
            }}
        >
            <View
                style={{
                    marginLeft: 20,
                }}
            >
                <Image source={require("../assets/profile.png")} />
            </View>

            <View
                style={{
                    marginRight: 144,
                }}
            >
                <Text
                    style={{
                        color: darkTheme ? "#FFF" : "#000",
                    }}
                >
                    Welcome Back,
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: darkTheme ? "#fff" : "#000"
                    }}
                >
                    Bismark Obuobi
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: darkTheme ? "#000" : "#FFF",
                    marginRight: 20,
                    borderRadius: 17,
                    padding: 10,
                }}
            >
                <Image source={require("../assets/search.png")} />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 35,
                    marginLeft: 15,
                    marginRight: 15,
                    backgroundColor: darkTheme ? "#fff" : "#000"
                }}
            >
                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            marginTop: 3
                        }}
                    >
                        <Text
                            style={{
                                color: darkTheme ? "#FFF" : "#000"
                            }}
                        >
                            Receive
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            backgroundColor: darkTheme ? "#000" : "#FFF",
                            padding: 30,
                            borderRadius: 40,
                        }}
                    >
                        <Image source={require("../assets/loan.png")} />
                    </View>
                    <View
                        style={{
                            marginTop: 3,
                        }}
                    >
                        <Text
                             style={{
                                color: darkTheme ? "#FFF" : "#000"
                             }}
                        >
                            Loan
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: darkTheme ? "#000" : "#FFF",
                            padding: 30,
                            borderRadius: 40,
                        }}
                    >
                        <Image source={require("../assets/topUp.png")} />
                    </View>
                    <View
                        style={{
                            marginTop: 3,
                        }}
                    >
                        <Text
                            style={{
                                color: darkTheme ? "#FFF" : "#000"
                            }}
                        >
                            TopUp
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <Text
                    style={{
                        fontSize: 19,
                        fontWeight: 600,
                        color: darkTheme ? "#FFF" : "#000"
                    }}
                >
                    {" "}
                    Transaction
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        color: "#3f6df6"
                    }}
                >
                    Sell All
                </Text>
            </View>
        </View>

        <FlatList
            data={data}
            renderItem={({item}) => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 20,
                        backgroundColor: darkTheme ? "#000" : "#FFF"
                    }}
                >
                    <View
                        style={{
                            backgroundColor: darkTheme ? "#000" : "#F2F2F2",
                            marginLeft: 19,
                            padding: 20,
                            borderRadius: 40,
                        }}
                    >
                        <Image source={item.image} />
                    </View>
                    <View
                        style={{
                            marginRight: 63,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                color: darkTheme ? "#FFF" : "#000"
                            }}
                        >
                            {item.name}
                        </Text>
                        <Text
                            style={{
                                color: darkTheme ? "#FFF" : "#000",
                                fontSize: 14,
            
                            }}
                        >
                            {item.type}
                        </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 16,
                            }}
                        >
                            <Text
                                style={{
                                    marginRight: 16,
                                    color: darkTheme ? "#FFF" : "#000"
                                }}
                            >
                                {item.price}
                            </Text>
                        </View>
                    </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
        </View>
    )
}

export default HomeScreen;
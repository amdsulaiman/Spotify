// import React, { useEffect } from "react";
// import { View, Text, Dimensions } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { ResponseType, useAuthRequest } from "expo-auth-session";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { storeData } from "../Utils/Storage";
// import { useDispatch } from "react-redux";
// import { getCurrentUser } from "../redux/slices/user";
// const { width: wWidth, height: wHeight } = Dimensions.get("window");

// const Login = ({ navigation }: any) => {
//   const dispatch = useDispatch();
//   const discovery = {
//     authorizationEndpoint: "https://accounts.spotify.com/authorize",
//     tokenEndpoint: "https://accounts.spotify.com/api/token",
//   };

//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       responseType: ResponseType.Token,
//       clientId: "e717b521e40a416d979e45a0f04398e2",
//       clientSecret: "6ca2906a682b432bac561a9377ae73bc",
//       scopes: [
//         "user-read-currently-playing",
//         "user-read-recently-played",
//         "user-read-playback-state",
//         "user-top-read",
//         "user-modify-playback-state",
//         "streaming",
//         "user-read-email",
//         "user-read-private",
//       ],
//       usePKCE: false,
//       redirectUri: "exp://127.0.0.1:19003/",
//     },
//     discovery
//   );

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { access_token } = response.params;
//       storeData("@access_token", access_token);
//       dispatch(getCurrentUser(access_token));
//       navigation.navigate("Home");
//     }
//   }, [response]);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <TouchableOpacity onPress={() => promptAsync()}>
//         <View
//           style={{
//             backgroundColor: "green",
//             width: wWidth * 0.9,
//             padding: 20,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text>Login</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Login;
import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { getCurrentUser } from "../redux/slices/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../Utils/Storage";
import { useDispatch } from "react-redux";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      //e717b521e40a416d979e45a0f04398e2
//6ca2906a682b432bac561a9377ae73bc
      responseType: ResponseType.Token,
      clientId: 'e717b521e40a416d979e45a0f04398e2',
      clientSecret: '6ca2906a682b432bac561a9377ae73bc',
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      storeData("@access_token", access_token);
     dispatch(getCurrentUser());
      navigation.navigate("Home");
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <View
          style={{
            backgroundColor: "green",
            width: wWidth * 0.9,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
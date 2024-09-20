import { Alert, Button, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Image, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World: My First App</Text>
      <Image source={require('../assets/images/react-logo.png')}/>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image 
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'}
        }/>
      </TouchableHighlight>
      <Button
        color="orange"
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
        <View
          style={{
            backgroundColor: 'red',
          }}
        >
          <Text>Some text that is really really really really long text that will use many many many many line</Text>
        </View>
    </View>
  );
}

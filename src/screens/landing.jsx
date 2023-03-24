import { View, Text } from "react-native";
import { colors, typography } from "../theme/designSystem";

function Landing() {
  return (
    <View
      style={{ flex: 1, backgroundColor: colors.secondary, marginTop: 100 }}
    >
      <Text style={typography.heading400}>hie</Text>
      <Text style={typography.heading400}>hie again</Text>
      <Text style={typography.slicedThrough}>hie again</Text>
    </View>
  );
}

export { Landing };

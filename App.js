import * as React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}
export default function App() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: "https://www.figma.com/proto/R9xflpZTfo7iXsAFTDp4no/SUCCess?node-id=4-320&starting-point-node-id=4%3A320&hotspot-hints=0&hide-ui=1",
      }}
      renderLoading={this.LoadingIndicatorView}
      startInLoadingState={true}
    />
  );
}

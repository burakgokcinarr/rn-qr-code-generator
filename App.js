import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView, FlatList, SafeAreaView} from 'react-native';
import { BG_COLOR, TEXT_COLOR } from './src/theme/AppTheme';
// QR Code Lib
import { QrCodeSvg } from 'react-native-qr-svg';
import { CustomTextInput, CustomButton, ColorView } from './src/components';
import { useState } from 'react';

const ColorList = ["#F08080", "#FA8072", "#DC143C", 
                  "#FFC0CB", "#C71585", "#FF7F50", "#FF8C00", 
                  "#FFD700", "#FFE4B5", "#BDB76B" ,"#E6E6FA", 
                  "#DA70D6", "#9932CC", "#7FFF00", "#5F9EA0", "#FDF5E6"]

export default function App() {

  const [textValue, setTextValue] = useState("www.google.com");
  const [qrValue, setQrValue]     = useState("abc");
  const [qrColor, setQrColor]     = useState("black");

  const qrCodeTextInputChange = (val) => setTextValue(val);

  const generateQRCode = () => {
    if (textValue) setQrValue(textValue)
    else alert('The text value to create QRCode cannot be null!')
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BG_COLOR}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar style='light' />
        <QrCodeSvg
            value={qrValue}
            frameSize={250}
            contentCells={5}
            dotColor={qrColor}
        />
        <FlatList
          data={ColorList}
          renderItem={({item, index}) => <ColorView color={item} index={index} setColor={setQrColor}/>}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false} 
        />
        <CustomTextInput onChangeText={qrCodeTextInputChange}/>
        <CustomButton onPress={generateQRCode}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    gap: 35
  },
});

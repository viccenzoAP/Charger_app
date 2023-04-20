import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';

import useWebSocket, { ReadyState } from 'react-use-websocket';
import logoButtonImage from './assets/wifi.png';
import logoImage from './assets/AtlasPowerlogo.jpg';
import styles from './styles';

export default function App() {
  const [sliderValue, setSliderValue] = useState(0.5);
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.events');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://echo.websocket.events'),
    [],
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Slider'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const [date, setDate] = useState(new Date());
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date2, setDate2] = useState(new Date());
  const formattedTime2 = date2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date3, setDate3] = useState(new Date());
  const formattedTime3 = date3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date4, setDate4] = useState(new Date());
  const formattedTime4 = date4.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date5, setDate5] = useState(new Date());
  const formattedTime5 = date5.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date6, setDate6] = useState(new Date());
  const formattedTime6 = date6.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date7, setDate7] = useState(new Date());
  const formattedTime7 = date7.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date8, setDate8] = useState(new Date());
  const formattedTime8 = date8.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date9, setDate9] = useState(new Date());
  const formattedTime9 = date9.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date10, setDate10] = useState(new Date());
  const formattedTime10 = date10.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date11, setDate11] = useState(new Date());
  const formattedTime11 = date11.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date12, setDate12] = useState(new Date());
  const formattedTime12 = date12.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date13, setDate13] = useState(new Date());
  const formattedTime13 = date13.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const [date14, setDate14] = useState(new Date());
  const formattedTime14 = date14.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onChange2 = (event, selectedDate) => {
    setDate2(selectedDate);
  };

  const showMode2 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date2,
      onChange: onChange2,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker2 = () => {
    showMode2('time');
  };
  const onChange3 = (event, selectedDate) => {
    setDate3(selectedDate);
  };

  const showMode3 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date3,
      onChange: onChange3,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker3 = () => {
    showMode3('time');
  };
  const onChange4 = (event, selectedDate) => {
    setDate4(selectedDate);
  };

  const showMode4 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date4,
      onChange: onChange4,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker4 = () => {
    showMode4('time');
  };

  const onChange5 = (event, selectedDate) => {
    setDate5(selectedDate);
  };

  const showMode5 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date5,
      onChange: onChange5,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker5 = () => {
    showMode5('time');
  };

  const onChange6 = (event, selectedDate) => {
    setDate6(selectedDate);
  };

  const showMode6 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date6,
      onChange: onChange6,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker6 = () => {
    showMode6('time');
  };

  const onChange7 = (event, selectedDate) => {
    setDate7(selectedDate);
  };

  const showMode7 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date7,
      onChange: onChange7,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker7 = () => {
    showMode7('time');
  };

  const onChange8 = (event, selectedDate) => {
    setDate8(selectedDate);
  };

  const showMode8 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date8,
      onChange: onChange8,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker8 = () => {
    showMode8('time');
  };

  const onChange9 = (event, selectedDate) => {
    setDate9(selectedDate);
  };

  const showMode9 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date9,
      onChange: onChange9,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker9 = () => {
    showMode9('time');
  };

  const onChange10 = (event, selectedDate) => {
    setDate10(selectedDate);
  };

  const showMode10 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date10,
      onChange: onChange10,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker10 = () => {
    showMode10('time');
  };

  const onChange11 = (event, selectedDate) => {
    setDate11(selectedDate);
  };

  const showMode11 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date11,
      onChange: onChange11,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker11 = () => {
    showMode11('time');
  };

  const onChange12 = (event, selectedDate) => {
    setDate12(selectedDate);
  };

  const showMode12 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date12,
      onChange: onChange12,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker12 = () => {
    showMode12('time');
  };

  const onChange13 = (event, selectedDate) => {
    setDate13(selectedDate);
  };

  const showMode13 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date13,
      onChange: onChange13,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker13 = () => {
    showMode13('time');
  };

  const onChange14 = (event, selectedDate) => {
    setDate14(selectedDate);
  };

  const showMode14 = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date14,
      onChange: onChange14,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker14 = () => {
    showMode14('time');
  };

  return (
    <View style={styles.containerS}>
      <View style={styles.container0}>
        <Image style={styles.logo} source={logoImage} />
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Image source={logoButtonImage} style={styles.buttonImageIconStyle} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.currentText}>{${if(lastMessage != null) {Alert.alert('ok');} else {Alert.alert('notok');}}}
      </Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.titleText}>Corrente</Text>
        <Text style={styles.sliderText}>{sliderValue}</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={32}
          minimumTrackTintColor="#21e065"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => {
            setSliderValue(value);
          }}
          onSlidingComplete={(value) => {
            sendMessage(value.toString());
          }}
          step={1}
          value={sliderValue}
        />
      </View>
      <View>
        <Button
          onPress={handleClickChangeSocketUrl}
          title="Click Me to change Socket Url"
        />
        <Button
          onPress={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
          title="Click Me to send Hello"
        />
        <Text>
          The WebSocket is currently
          {' '}
          {connectionStatus}
        </Text>
        {lastMessage ? (
          <Text>
            Last message:
            {' '}
            {lastMessage.data}
          </Text>
        ) : null}
      </View>
      <View>
        {messageHistory.map((message, idx) => (
          <Text key={idx}>{message ? message.data : null}</Text>
        ))}

      </View>
      <View style={styles.container2}>
        <Button
          title="Charge Now"
          color="#21e065"
          onPress={() => Alert.alert(lastMessage)}
        />
      </View>

    </View>
  );
}
/*
      <View style={styles.container3}>
        <Text style={styles.datePickerTitleText}>
          Agendar carregamento:
        </Text>
        <StatusBar />
      </View>

      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Dom:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker}
        >
          <Text style={styles.datePickerText}>{formattedTime}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker2}
        >
          <Text style={styles.datePickerText}>{formattedTime2}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Seg:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker3}
        >
          <Text style={styles.datePickerText}>{formattedTime3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker4}
        >
          <Text style={styles.datePickerText}>{formattedTime4}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Ter:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker5}
        >
          <Text style={styles.datePickerText}>{formattedTime5}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker6}
        >
          <Text style={styles.datePickerText}>{formattedTime6}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Qua:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker7}
        >
          <Text style={styles.datePickerText}>{formattedTime7}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker8}
        >
          <Text style={styles.datePickerText}>{formattedTime8}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Qui:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker9}
        >
          <Text style={styles.datePickerText}>{formattedTime9}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker10}
        >
          <Text style={styles.datePickerText}>{formattedTime10}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Sex:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker11}
        >
          <Text style={styles.datePickerText}>{formattedTime11}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker12}
        >
          <Text style={styles.datePickerText}>{formattedTime12}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.datePickerTitle2Text}>Sáb:</Text>

        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker13}
        >
          <Text style={styles.datePickerText}>{formattedTime13}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle2}
          activeOpacity={0.5}
          onPress={showTimepicker14}
        >
          <Text style={styles.datePickerText}>{formattedTime14}</Text>
        </TouchableOpacity>

      </View> */

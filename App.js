import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Header, Body, Title, Right, Button } from 'native-base';
import { Modal, View } from 'react-native';
import { AdMobInterstitial } from 'react-native-admob';
import { WebView } from 'react-native-webview';

import HomeTab from './tabs/homeTab'
import SportTab from './tabs/sportTab'
import WorldTab from './tabs/worldTab'
import WeatherTab from './tabs/weatherTab'
import LocalTab from './tabs/localTab'
import ShopTab from './tabs/shopTab'
import CarTab from './tabs/carTab'



export default class App extends Component {
  constructor(props) {
    super(props);

    AdMobInterstitial.setAdUnitID('ca-app-pub-6729069142991560/1262082761');
  }


  state = {
    modalVisible: false,
    myUrl: undefined
  };

  bannerError(e) {
    alert(e);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (

      <Container style={{ position: 'relative', top: -5 }}>
        <Header>
          <Body style={{ flex: 5 }}>
            <Title>Haberler || Ücretsiz Haber Servisi</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://play.google.com/store/apps/details?id=com.iuzug.haberler' }) }}>
              <Icon name='heart' />
            </Button>
            <Button transparent onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.ibrahimuzug.tk' }) }}>
              <Icon name='chatboxes' />
            </Button>
          </Right>
        </Header>

        <View>
          <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>

            <WebView mediaPlaybackRequiresUserAction javaScriptEnabled={true} thirdPartyCookiesEnabled={true} source={{ uri: this.state.myUrl }} />

            <View>
              <Button primary iconLeft light onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Icon name='arrow-back' />
              </Button>
            </View>
          </Modal>
        </View>

        <Tabs>

          <Tab heading={<TabHeading style={{ backgroundColor: '#53AFEE' }}><Icon name="paper" /></TabHeading>}>
            <HomeTab />
          </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: '#53AFEE' }}><Icon name="baseball" /></TabHeading>}>
            <SportTab />
          </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: '#53AFEE' }}><Icon name="partly-sunny" /></TabHeading>}>
            <WeatherTab />
          </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: '#53AFEE' }}><Icon name="cart" /></TabHeading>}>
            <ShopTab />
          </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: '#53AFEE' }}><Icon name="car" /></TabHeading>}>
            <CarTab />
          </Tab>

        </Tabs>

      </Container >
    );
  }
}


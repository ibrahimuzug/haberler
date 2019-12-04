import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail, Left, Body, Card, CardItem, Button, Icon } from 'native-base';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import { WebView } from 'react-native-webview';

export default class WorldTab extends Component {
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
            <Container style={{ position: 'relative', top: 0, backgroundColor: '#FEE0D5' }}>
                <Content>
                    <View>
                        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>

                            <WebView mediaPlaybackRequiresUserAction javaScriptEnabled={true} thirdPartyCookiesEnabled={true} source={{ uri: this.state.myUrl }} />

                            <View>
                                <Button   primary iconLeft light onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
                                    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                                }}>
                                    <Icon name='arrow-back' />
                                    <Text style={{ flex: 1, alignSelf: 'center', color: 'white' }}>Geri</Text>
                                </Button>
                            </View>
                        </Modal>
                    </View>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://tr.motor1.com/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/motor1.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Motor1.Com</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Motor1.Com üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.log.com.tr/asfalt/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/log.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>LOG</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>LOG üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.epey.com/araba/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/otomobilgazetesi.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Otomobil Gazetesi</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Otomobil Gazetesi üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'http://www.otomobilgazetesi.com/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/epey.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Epey Araba Karşılaştırma</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Epey üzerinden araba karşılaştırması için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.ototeknikveri.com/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/ototeknikveri.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Ototeknikveri</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Ototeknikveri üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.autoshow.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/autoshow.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>AutoShow</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>AutoShow üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.otomobilhaber.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/otomobilhaber.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Otomobil Haber</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Otomobilhaber.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                </Content>

                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-6729069142991560/5190823138"
                    testDevices={[AdMobBanner.simulatorId]}
                    onDidFailToReceiveAdWithError={(e) => this.bannerError(e)}
                />

            </Container>

        );
    }
}
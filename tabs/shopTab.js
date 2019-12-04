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

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.bim.com.tr/categories/100/aktuel-urunler.aspx' })}}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/bim.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>BİM Aktüel </Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>BİM Aktüel üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.a101.com.tr/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/a101.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>A101 Aktüel</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>A101 Aktüel üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.sokmarket.com.tr/haftanin-firsatlari/firsatlar' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/sokmarket.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Şok Aktüel</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Şok Marketleri Aktüel üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.carrefoursa.com/tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/carrefour.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>CarrefourSA</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>CarrefourSA Marketleri üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.migros.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/migros.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Migros</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Migros Marketleri üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.tekzen.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/tekzen.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Tekzen</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Tekzen üzerinden alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.koctas.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/koctas.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Koçtaş</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Koçtaş alışveriş fırsatlarını görüntülemek için tıklayın.</Text>
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
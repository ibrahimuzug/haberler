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
                                <Button   primary iconLeft light onPress={() => { this.setModalVisible(!this.state.modalVisible);
                                    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
                                    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                                }}>
                                    <Icon name='arrow-back' />
                                    <Text style={{ flex: 1, alignSelf: 'center', color: 'white' }}>Geri</Text>
                                </Button>
                            </View>
                        </Modal>
                    </View>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.ntvspor.net' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/ntvspor.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Ntv Spor</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>NtvSpor.net üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.fanatik.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/fanatik.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Fanatik</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Fanatik.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.sporx.com/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/sporx.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>SporX</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>SporX üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.fotomac.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/fotomac.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Fotomaç</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Fotomac.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.fotospor.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/fotospor.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>FotoSpor</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>FotoSpor.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://ajansspor.com/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/ajansspor.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Ajans Spor</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>AjansSpor.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.aspor.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/aspor.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>ASpor</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>ASpor.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
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
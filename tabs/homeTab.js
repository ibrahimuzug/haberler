import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail, Left, Body, Card, CardItem, Button, Right, Icon } from 'native-base';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import { WebView } from 'react-native-webview';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);

        AdMobInterstitial.setAdUnitID('ca-app-pub-6729069142991560/1262082761');
    }


    state = {
        modalVisible: false,
        myUrl: undefined
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <Container style={{ position: 'relative', top: 0, backgroundColor: '#FEE0D5' }}>
                <Content>
                    <View>
                        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>

                            <WebView injectJavaScript javaScriptEnabled={true} source={{ uri: this.state.myUrl }} />

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

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://m.sabah.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Right>

                                </Right>
                                <Body style={{ alignItems: 'flex-start', flex: 7 }}>
                                    <Text>Sabah</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.hurriyet.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/hurriyet.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Hürriyet</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Hürriyet.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://tr.sputniknews.com/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/sputnik.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Right>

                                </Right>
                                <Body style={{ alignItems: 'flex-start', flex: 7 }}>
                                    <Text>Sputnik</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Sputnik üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://m.ensonhaber.com' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/ensonhaber.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>En Son Haber</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Ensonhaber.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.aksam.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/aksam.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Akşam</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Akşam.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.trthaber.com' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/trthaber.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>TRT Haber</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>TRT Haber üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.cnnturk.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/cnnturk.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Cnn Turk</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>CnnTurk.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.bloomberght.com/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/bloomberg.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Bloomberg HT</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Bloomberg HT üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.iha.com.tr/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/iha.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>İhlas Haber Ajansı</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>İHA üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.milliyet.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/milliyet.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Milliyet</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Milliyet.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.haberler.com/' }) }} >
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/haberlercom.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Haberler.com</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Haberler.com üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'http://www.cumhuriyet.com.tr/' }) }} >
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/cumhuriyet.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Cumhuriyet</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Cumhuriyet.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.ahaber.com.tr/' }) }} >
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/ahaber.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>A Haber</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>A Haber üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.ntv.com.tr/' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/ntv.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Ntv</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>NTV üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.akit.com.tr' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/akit.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Akit</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Akit.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.haberturk.com' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/haberturk.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Haber Türk</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>HaberTürk.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.dunya.com' }) }} >
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/dunya.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Dünya</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Dünya.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.gunes.com' }) }}>
                        <Card style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'white', borderRadius: 20, paddingBottom: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail square source={require('../static/gunes.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Güneş</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Güneş.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'http://www.haber7.com/' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/haber7.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Haber7</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Haber7.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <AdMobBanner
                        adSize="fullBanner"
                        adUnitID="ca-app-pub-6729069142991560/5190823138"
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={error => console.log(error)}
                    />


                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.milligazete.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/milligazete.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Milli Gazete</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>MilliGazete.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <AdMobBanner
                        adSize="fullBanner"
                        adUnitID="ca-app-pub-6729069142991560/5190823138"
                        testDevices={[AdMobBanner.simulatorId]}
                        onAdFailedToLoad={error => console.log(error)}
                    />

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.posta.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/posta.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Posta</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Posta.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.sozcu.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/sozcu.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Sözcü</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Sözcü.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.star.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/star.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Star</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Star.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.takvim.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/takvim.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Takvim</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>Takvim.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.turkiyegazetesi.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/turkiye.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Türkiye Gazetesi</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>TürkiyeGazetesi.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://www.yenisafak.com.tr' }) }}>
                        <Card style={{ flex: 1, borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                            <CardItem style={{ borderRadius: 20, paddingBottom: 5, paddingTop: 5 }}>
                                <Left style={{ flex: 1 }}>
                                    <Thumbnail source={require('../static/yenisafak.jpg')} style={{ borderRadius: 10 }} />
                                </Left>
                                <Body style={{ alignItems: 'stretch', flex: 4 }}>
                                    <Text>Yeni Şafak</Text>
                                    <Text style={{ color: 'black' }} note numberOfLines={2}>YeniŞafak.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-6729069142991560/5190823138"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log(error)}
                />
            </Container >
        );
    }
}
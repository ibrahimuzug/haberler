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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Container style={{ position: 'relative', top: 0, backgroundColor: '#FEE0D5' }}>
                <Content>
                    <View>
                        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>

                            <WebView javaScriptEnabled={true} source={{ uri: this.state.myUrl }} />

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

                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://m.sabah.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Sabah</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://google.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Google</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://google.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Google</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://google.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Google</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://google.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Google</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true); this.setState({ myUrl: 'https://google.com.tr' }) }}>
                            <Card style={{ flex: 1, borderRadius: 20 }}>
                                <CardItem style={{ borderRadius: 20 }}>
                                    <Left>
                                        <Thumbnail source={require('../static/sabah.jpg')} style={{ borderRadius: 10 }} />
                                    </Left>
                                    <Body style={{ flex: 4 }}>
                                        <Text>Google</Text>
                                        <Text style={{ color: 'black' }} note numberOfLines={2}>Sabah.com.tr üzerinden haberleri görüntülemek için tıklayın.</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>

                </Content>

                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-6729069142991560/5190823138"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log(error)}
                />

            </Container>

        );
    }
}
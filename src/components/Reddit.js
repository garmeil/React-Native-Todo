import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native'

class Reddit extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }

    }
    componentWillMount(){
        fetch('https://www.reddit.com/.json',{
        Accept: 'application/json'}).then(res => res.json()).then(data =>
        this.setState({posts: data.data.children}))
    }   

    render(){
        return <View style={styles.container}>
            <Text>Reddit</Text>
            <View>
                {this.state.posts.map((post, index) => <Text key={index}>{ post.data.author}</Text>)}
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})


export default Reddit

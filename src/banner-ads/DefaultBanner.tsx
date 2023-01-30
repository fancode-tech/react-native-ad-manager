import React from 'react'
import { Linking, Image, TouchableOpacity } from 'react-native'

interface IProps {
    link?: string
    imagesrc?: string
    style?: any
}


export default function DefaultBanner(props: IProps) {
    function onClick() {
        if (props.link) {
            Linking.openURL(props.link).then().catch()
        }
    }
    return (
        <TouchableOpacity onPress={onClick}>
            <Image
                source={{
                    uri: props.imagesrc
                }}
                style={[{
                    resizeMode: 'stretch'
                }, props.style]}
            ></Image></TouchableOpacity>
    )
}
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Device} from "@/models/Device";
import {FC} from "react";
import {FontAwesome6} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import {OnOffDeviceLayout} from "@/components/Heatingdevice";

type OnOffDeviceProps = {
    device: Device,
    showRoom: boolean
}

export const WandSender:FC<OnOffDeviceProps> = ({device,showRoom})=>{
    return <ThemedView style={OnOffDeviceLayout.box}>
        <FontAwesome6 style={{color: 'white'}} name="toggle-on" size={25} />
        <ThemedText>{device.config.name}</ThemedText>
    </ThemedView>
}
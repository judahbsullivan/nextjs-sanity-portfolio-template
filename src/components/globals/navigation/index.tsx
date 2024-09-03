import { SettingsPayload } from "@/src/types/types";
import NavigationLayout from "./NavigationLayout";






export interface NavigationProps{
    settings: SettingsPayload
}



export default function Navigation({settings}: NavigationProps ){
    return <NavigationLayout settings={settings}/> 
}
import { ReactNode } from "react"
import { TextStyle } from "react-native"
import { HeaderLevels } from "../../Utils/types/global.types"

export type HeaderTextProps = {
    children: ReactNode
    level: HeaderLevels
    style?: TextStyle
}
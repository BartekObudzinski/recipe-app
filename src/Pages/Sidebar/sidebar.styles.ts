import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/styles/colors.styles";



export const SidebarStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.LIMON,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30,
    },
    userInformationContainer: {
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    headerUsernameTextColor: {
        color: COLORS.WHITE
    },
    headerAdvancedLevelTextColor: {
        color:COLORS.GREY_LIGHT
    }

})
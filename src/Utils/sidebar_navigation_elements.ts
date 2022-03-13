import { ImageSourcePropType } from "react-native"


type NavigationElementsType = {
    id:number,
    title: string,
    image: ImageSourcePropType,
    path: string,
}[]


export const NavigationElements: NavigationElementsType = [
    {
        id: 1,
        title: 'Home',
        image: require(
            '../Assets/Images/home-icon.png'
        ),
        path:''
    },
    {
        id:2,
        title: 'Flashcards',
        image: require(
            '../Assets/Images/flashcards.png'
        ),
        path:''
    },
    {
        id:3,
        title: 'Settings',
        image: require(
            '../Assets/Images/settings.png'
        ),
        path:''
    },
    {
        id:4,
        title: 'Logout',
        image: require(
            '../Assets/Images/logout.png'
        ),
        path:''
    },
]
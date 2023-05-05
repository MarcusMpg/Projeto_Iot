import { FontAwesome, Ionicons,Foundation,Entypo, Feather } from '@expo/vector-icons'; 

export const footerObjects = [
    {
        name: "Reciclagem",
        route: "../../assets/icon_recicle.png",
        icon: <FontAwesome name="recycle" size={45} color="#fff" />,
        iconD: <FontAwesome name="recycle" size={45} color="#808080" />
    },
    {
        name: "QR Code",
        route: "../../assets/icon_Qr.png",
        icon: <Ionicons name="qr-code-outline" size={45} color="#fff" />,
        iconD:<Ionicons name="qr-code-outline" size={45} color="#808080" />,
    },
    {
        name: "Grafico",
        route: "../../assets/icon_grafico.png",
        icon: <Foundation name="graph-bar" size={45} color="#fff" />,
        iconD:<Foundation name="graph-bar" size={45} color="#808080" />
    },
    {
        name: "Ajuda",
        route: "../../assets/icon_ajuda.png",
        icon: <Feather name="help-circle" size={45} color="#fff" />,
        iconD:<Entypo name="help-with-circle" size={45} color="#808080" />
    },
]
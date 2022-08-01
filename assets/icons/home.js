import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={props.width} height={props.height} fill={props.colors}>
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" />
    </Svg>
)
    

export default HomeIcon
import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const BookMarkIcon = (props) => (
    <Svg width={props.width} height={props.height} viewBox='-5 -1 24 20'>
        <G fill="none" fillRule="evenodd">
            <Path d="M-5-3h24v24H-5z" />
            <Path fill={props.fill} d="m2 14.97 5-2.15 5 2.15V2H2z" />
            <Path
                d="M12 0H2C.9 0 0 .9 0 2v16l7-3 7 3V2c0-1.1-.9-2-2-2Zm0 14.97-5-2.14-5 2.14V2h10v12.97Z"
                fill={props.colors}
            />
        </G>
    </Svg>
)

export default BookMarkIcon

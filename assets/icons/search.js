import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill='none'
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 16.032 5.618l5.675 5.675a1 1 0 0 1-1.414 1.414l-5.675-5.675A9 9 0 0 1 1 10Z"
      fill={props.colors}
    />
  </Svg>
)

export default SearchIcon

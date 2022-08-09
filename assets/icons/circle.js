import * as React from "react"
import Svg, {
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  G,
} from "react-native-svg"

const Circle = (props) => (
  <Svg
    viewBox="0 80 375 100"
    width={props.width}
    height={props.height}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M112.5 112.5h150v150h-150Zm0 0" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M262.5 187.5c0 1.227-.031 2.453-.09 3.68a82.424 82.424 0 0 1-.27 3.672 76.394 76.394 0 0 1-1.886 10.87 77.989 77.989 0 0 1-2.137 7.044 75.797 75.797 0 0 1-2.816 6.8 74.034 74.034 0 0 1-3.473 6.492 71.763 71.763 0 0 1-1.969 3.11 73.032 73.032 0 0 1-2.117 3.008 78.049 78.049 0 0 1-2.265 2.902 77.925 77.925 0 0 1-2.407 2.79 71.023 71.023 0 0 1-2.539 2.663 71.023 71.023 0 0 1-2.664 2.54c-.91.824-1.84 1.624-2.789 2.406a78.049 78.049 0 0 1-2.902 2.265 73.032 73.032 0 0 1-3.008 2.117 71.763 71.763 0 0 1-3.11 1.97 74.034 74.034 0 0 1-9.855 4.96 73.385 73.385 0 0 1-6.933 2.48 77.989 77.989 0 0 1-3.547.985 75.533 75.533 0 0 1-10.871 1.887 82.424 82.424 0 0 1-3.672.27c-1.227.058-2.453.089-3.68.089-1.227 0-2.453-.031-3.68-.09a82.424 82.424 0 0 1-3.672-.27 76.394 76.394 0 0 1-10.87-1.886 77.989 77.989 0 0 1-7.044-2.137 75.797 75.797 0 0 1-6.8-2.816 74.034 74.034 0 0 1-6.492-3.473 71.763 71.763 0 0 1-3.11-1.969 73.032 73.032 0 0 1-3.008-2.117 78.049 78.049 0 0 1-2.902-2.265 77.925 77.925 0 0 1-2.79-2.407 71.023 71.023 0 0 1-2.663-2.539 71.023 71.023 0 0 1-2.54-2.664 77.925 77.925 0 0 1-2.406-2.789 78.049 78.049 0 0 1-2.265-2.902 73.032 73.032 0 0 1-2.117-3.008 71.763 71.763 0 0 1-1.97-3.11 74.034 74.034 0 0 1-4.96-9.855 73.385 73.385 0 0 1-2.48-6.933 77.989 77.989 0 0 1-.985-3.547 75.533 75.533 0 0 1-1.887-10.871 82.424 82.424 0 0 1-.27-3.672 77.108 77.108 0 0 1-.089-3.68c0-1.227.031-2.453.09-3.68.062-1.226.152-2.449.27-3.672a76.394 76.394 0 0 1 1.886-10.87 77.989 77.989 0 0 1 2.137-7.044 75.797 75.797 0 0 1 2.816-6.8 74.034 74.034 0 0 1 3.473-6.492 71.763 71.763 0 0 1 1.969-3.11 73.032 73.032 0 0 1 2.117-3.008 78.049 78.049 0 0 1 2.265-2.902 77.925 77.925 0 0 1 2.407-2.79 71.023 71.023 0 0 1 2.539-2.663 71.023 71.023 0 0 1 2.664-2.54c.91-.824 1.84-1.624 2.789-2.406a78.049 78.049 0 0 1 2.902-2.265 73.032 73.032 0 0 1 3.008-2.117 71.763 71.763 0 0 1 3.11-1.97 74.034 74.034 0 0 1 9.855-4.96 73.385 73.385 0 0 1 6.933-2.48 77.989 77.989 0 0 1 3.547-.985 75.533 75.533 0 0 1 10.871-1.887 82.424 82.424 0 0 1 3.672-.27 77.108 77.108 0 0 1 3.68-.089c1.227 0 2.453.031 3.68.09 1.226.062 2.449.152 3.672.27a76.394 76.394 0 0 1 10.87 1.886 77.989 77.989 0 0 1 7.044 2.137 75.797 75.797 0 0 1 6.8 2.816 74.034 74.034 0 0 1 6.492 3.473c1.051.629 2.09 1.285 3.11 1.969 1.02.68 2.023 1.386 3.008 2.117a78.049 78.049 0 0 1 2.902 2.265c.95.782 1.879 1.582 2.79 2.407.91.824 1.796 1.668 2.663 2.539a71.023 71.023 0 0 1 2.54 2.664c.824.91 1.624 1.84 2.406 2.789.777.95 1.53 1.914 2.265 2.902.73.985 1.438 1.988 2.117 3.008a71.763 71.763 0 0 1 1.97 3.11 74.034 74.034 0 0 1 4.96 9.855 73.385 73.385 0 0 1 2.48 6.933c.356 1.172.684 2.356.985 3.547a75.533 75.533 0 0 1 1.887 10.871c.117 1.223.207 2.446.27 3.672.058 1.227.089 2.453.089 3.68Zm0 0" />
      </ClipPath>
      <LinearGradient
        x1={1770.926}
        gradientTransform="matrix(0 1.16914 -1.16914 0 473.744 -1957.951)"
        y1={244.834}
        x2={1899.226}
        gradientUnits="userSpaceOnUse"
        y2={244.834}
        id="c"
      >
        <Stop stopColor="#FB4B76" offset={0} />
        <Stop stopColor="#FB4C77" offset={0.004} />
        <Stop stopColor="#FB4C77" offset={0.008} />
        <Stop stopColor="#FB4D78" offset={0.012} />
        <Stop stopColor="#FB4D78" offset={0.016} />
        <Stop stopColor="#FB4E79" offset={0.02} />
        <Stop stopColor="#FB4F79" offset={0.023} />
        <Stop stopColor="#FB4F7A" offset={0.027} />
        <Stop stopColor="#FB507B" offset={0.031} />
        <Stop stopColor="#FB517B" offset={0.035} />
        <Stop stopColor="#FB517C" offset={0.039} />
        <Stop stopColor="#FB527C" offset={0.043} />
        <Stop stopColor="#FB527D" offset={0.047} />
        <Stop stopColor="#FB537D" offset={0.051} />
        <Stop stopColor="#FB547E" offset={0.055} />
        <Stop stopColor="#FB547F" offset={0.059} />
        <Stop stopColor="#FB557F" offset={0.063} />
        <Stop stopColor="#FB5680" offset={0.066} />
        <Stop stopColor="#FB5680" offset={0.07} />
        <Stop stopColor="#FB5781" offset={0.074} />
        <Stop stopColor="#FB5781" offset={0.078} />
        <Stop stopColor="#FB5882" offset={0.082} />
        <Stop stopColor="#FB5983" offset={0.086} />
        <Stop stopColor="#FB5983" offset={0.09} />
        <Stop stopColor="#FC5A84" offset={0.094} />
        <Stop stopColor="#FC5A84" offset={0.098} />
        <Stop stopColor="#FC5B85" offset={0.102} />
        <Stop stopColor="#FC5C85" offset={0.105} />
        <Stop stopColor="#FC5C86" offset={0.109} />
        <Stop stopColor="#FC5D86" offset={0.113} />
        <Stop stopColor="#FC5E87" offset={0.117} />
        <Stop stopColor="#FC5E88" offset={0.121} />
        <Stop stopColor="#FC5F88" offset={0.125} />
        <Stop stopColor="#FC5F89" offset={0.129} />
        <Stop stopColor="#FC6089" offset={0.133} />
        <Stop stopColor="#FC618A" offset={0.137} />
        <Stop stopColor="#FC618A" offset={0.141} />
        <Stop stopColor="#FC628B" offset={0.145} />
        <Stop stopColor="#FC638C" offset={0.148} />
        <Stop stopColor="#FC638C" offset={0.152} />
        <Stop stopColor="#FC648D" offset={0.156} />
        <Stop stopColor="#FC648D" offset={0.16} />
        <Stop stopColor="#FC658E" offset={0.164} />
        <Stop stopColor="#FC668E" offset={0.168} />
        <Stop stopColor="#FC668F" offset={0.172} />
        <Stop stopColor="#FC6790" offset={0.176} />
        <Stop stopColor="#FC6890" offset={0.18} />
        <Stop stopColor="#FC6891" offset={0.184} />
        <Stop stopColor="#FC6991" offset={0.188} />
        <Stop stopColor="#FC6992" offset={0.191} />
        <Stop stopColor="#FC6A92" offset={0.195} />
        <Stop stopColor="#FC6B93" offset={0.199} />
        <Stop stopColor="#FC6B94" offset={0.203} />
        <Stop stopColor="#FC6C94" offset={0.207} />
        <Stop stopColor="#FC6D95" offset={0.211} />
        <Stop stopColor="#FC6D95" offset={0.215} />
        <Stop stopColor="#FC6E96" offset={0.219} />
        <Stop stopColor="#FC6E96" offset={0.223} />
        <Stop stopColor="#FC6F97" offset={0.227} />
        <Stop stopColor="#FC7097" offset={0.23} />
        <Stop stopColor="#FC7098" offset={0.234} />
        <Stop stopColor="#FC7199" offset={0.238} />
        <Stop stopColor="#FC7199" offset={0.242} />
        <Stop stopColor="#FC729A" offset={0.246} />
        <Stop stopColor="#FD739A" offset={0.25} />
        <Stop stopColor="#FD739B" offset={0.254} />
        <Stop stopColor="#FD749B" offset={0.258} />
        <Stop stopColor="#FD759C" offset={0.262} />
        <Stop stopColor="#FD759D" offset={0.266} />
        <Stop stopColor="#FD769D" offset={0.27} />
        <Stop stopColor="#FD769E" offset={0.273} />
        <Stop stopColor="#FD779E" offset={0.277} />
        <Stop stopColor="#FD789F" offset={0.281} />
        <Stop stopColor="#FD789F" offset={0.285} />
        <Stop stopColor="#FD79A0" offset={0.289} />
        <Stop stopColor="#FD7AA1" offset={0.293} />
        <Stop stopColor="#FD7AA1" offset={0.297} />
        <Stop stopColor="#FD7BA2" offset={0.301} />
        <Stop stopColor="#FD7BA2" offset={0.305} />
        <Stop stopColor="#FD7CA3" offset={0.309} />
        <Stop stopColor="#FD7DA3" offset={0.313} />
        <Stop stopColor="#FD7DA4" offset={0.316} />
        <Stop stopColor="#FD7EA4" offset={0.32} />
        <Stop stopColor="#FD7FA5" offset={0.324} />
        <Stop stopColor="#FD7FA6" offset={0.328} />
        <Stop stopColor="#FD80A6" offset={0.332} />
        <Stop stopColor="#FD80A7" offset={0.336} />
        <Stop stopColor="#FD81A7" offset={0.34} />
        <Stop stopColor="#FD82A8" offset={0.344} />
        <Stop stopColor="#FD82A8" offset={0.348} />
        <Stop stopColor="#FD83A9" offset={0.352} />
        <Stop stopColor="#FD83AA" offset={0.355} />
        <Stop stopColor="#FD84AA" offset={0.359} />
        <Stop stopColor="#FD85AB" offset={0.363} />
        <Stop stopColor="#FD85AB" offset={0.367} />
        <Stop stopColor="#FD86AC" offset={0.371} />
        <Stop stopColor="#FD87AC" offset={0.375} />
        <Stop stopColor="#FD87AD" offset={0.379} />
        <Stop stopColor="#FD88AE" offset={0.383} />
        <Stop stopColor="#FD88AE" offset={0.387} />
        <Stop stopColor="#FD89AF" offset={0.391} />
        <Stop stopColor="#FD8AAF" offset={0.395} />
        <Stop stopColor="#FD8AB0" offset={0.398} />
        <Stop stopColor="#FE8BB0" offset={0.402} />
        <Stop stopColor="#FE8CB1" offset={0.406} />
        <Stop stopColor="#FE8CB2" offset={0.41} />
        <Stop stopColor="#FE8DB2" offset={0.414} />
        <Stop stopColor="#FE8DB3" offset={0.418} />
        <Stop stopColor="#FE8EB3" offset={0.422} />
        <Stop stopColor="#FE8FB4" offset={0.426} />
        <Stop stopColor="#FE8FB4" offset={0.43} />
        <Stop stopColor="#FE90B5" offset={0.434} />
        <Stop stopColor="#FE91B5" offset={0.438} />
        <Stop stopColor="#FE91B6" offset={0.441} />
        <Stop stopColor="#FE92B7" offset={0.445} />
        <Stop stopColor="#FE92B7" offset={0.449} />
        <Stop stopColor="#FE93B8" offset={0.453} />
        <Stop stopColor="#FE94B8" offset={0.457} />
        <Stop stopColor="#FE94B9" offset={0.461} />
        <Stop stopColor="#FE95B9" offset={0.465} />
        <Stop stopColor="#FE96BA" offset={0.469} />
        <Stop stopColor="#FE96BB" offset={0.473} />
        <Stop stopColor="#FE97BB" offset={0.477} />
        <Stop stopColor="#FE97BC" offset={0.48} />
        <Stop stopColor="#FE98BC" offset={0.484} />
        <Stop stopColor="#FE99BD" offset={0.488} />
        <Stop stopColor="#FE99BD" offset={0.492} />
        <Stop stopColor="#FE9ABE" offset={0.496} />
        <Stop stopColor="#FE9ABF" offset={0.5} />
        <Stop stopColor="#FE9BBF" offset={0.504} />
        <Stop stopColor="#FE9CC0" offset={0.508} />
        <Stop stopColor="#FE9CC0" offset={0.512} />
        <Stop stopColor="#FE9DC1" offset={0.516} />
        <Stop stopColor="#FE9EC1" offset={0.52} />
        <Stop stopColor="#FE9EC2" offset={0.523} />
        <Stop stopColor="#FE9FC3" offset={0.527} />
        <Stop stopColor="#FE9FC3" offset={0.531} />
        <Stop stopColor="#FEA0C4" offset={0.535} />
        <Stop stopColor="#FEA1C4" offset={0.539} />
        <Stop stopColor="#FEA1C5" offset={0.543} />
        <Stop stopColor="#FEA2C5" offset={0.547} />
        <Stop stopColor="#FEA3C6" offset={0.551} />
        <Stop stopColor="#FEA3C6" offset={0.555} />
        <Stop stopColor="#FFA4C7" offset={0.559} />
        <Stop stopColor="#FFA4C8" offset={0.563} />
        <Stop stopColor="#FFA5C8" offset={0.566} />
        <Stop stopColor="#FFA6C9" offset={0.57} />
        <Stop stopColor="#FFA6C9" offset={0.574} />
        <Stop stopColor="#FFA7CA" offset={0.578} />
        <Stop stopColor="#FFA8CA" offset={0.582} />
        <Stop stopColor="#FFA8CB" offset={0.586} />
        <Stop stopColor="#FFA9CC" offset={0.59} />
        <Stop stopColor="#FFA9CC" offset={0.594} />
        <Stop stopColor="#FFAACD" offset={0.598} />
        <Stop stopColor="#FFABCD" offset={0.602} />
        <Stop stopColor="#FFABCE" offset={0.605} />
        <Stop stopColor="#FFACCE" offset={0.609} />
        <Stop stopColor="#FFACCF" offset={0.613} />
        <Stop stopColor="#FFADD0" offset={0.617} />
        <Stop stopColor="#FFAED0" offset={0.621} />
        <Stop stopColor="#FFAED1" offset={0.625} />
        <Stop stopColor="#FFAFD1" offset={0.629} />
        <Stop stopColor="#FFB0D2" offset={0.633} />
        <Stop stopColor="#FFB0D2" offset={0.637} />
        <Stop stopColor="#FFB1D3" offset={0.641} />
        <Stop stopColor="#FFB2D3" offset={0.645} />
        <Stop stopColor="#FFB2D4" offset={0.648} />
        <Stop stopColor="#FFB3D4" offset={0.652} />
        <Stop stopColor="#FFB4D5" offset={0.656} />
        <Stop stopColor="#FFB4D5" offset={0.66} />
        <Stop stopColor="#FFB5D6" offset={0.664} />
        <Stop stopColor="#FFB6D6" offset={0.668} />
        <Stop stopColor="#FFB6D7" offset={0.672} />
        <Stop stopColor="#FFB7D7" offset={0.676} />
        <Stop stopColor="#FFB8D7" offset={0.68} />
        <Stop stopColor="#FFB8D8" offset={0.684} />
        <Stop stopColor="#FFB9D8" offset={0.688} />
        <Stop stopColor="#FFBAD9" offset={0.691} />
        <Stop stopColor="#FFBAD9" offset={0.695} />
        <Stop stopColor="#FFBBDA" offset={0.699} />
        <Stop stopColor="#FFBCDA" offset={0.703} />
        <Stop stopColor="#FFBCDB" offset={0.707} />
        <Stop stopColor="#FFBDDB" offset={0.711} />
        <Stop stopColor="#FFBEDC" offset={0.715} />
        <Stop stopColor="#FFBEDC" offset={0.719} />
        <Stop stopColor="#FFBFDD" offset={0.723} />
        <Stop stopColor="#FFC0DD" offset={0.727} />
        <Stop stopColor="#FFC1DE" offset={0.73} />
        <Stop stopColor="#FFC1DE" offset={0.734} />
        <Stop stopColor="#FFC2DF" offset={0.738} />
        <Stop stopColor="#FFC3DF" offset={0.742} />
        <Stop stopColor="#FFC3DF" offset={0.746} />
        <Stop stopColor="#FFC4E0" offset={0.75} />
        <Stop stopColor="#FFC5E0" offset={0.754} />
        <Stop stopColor="#FFC5E1" offset={0.758} />
        <Stop stopColor="#FFC6E1" offset={0.762} />
        <Stop stopColor="#FFC7E2" offset={0.766} />
        <Stop stopColor="#FFC7E2" offset={0.77} />
        <Stop stopColor="#FFC8E3" offset={0.773} />
        <Stop stopColor="#FFC9E3" offset={0.777} />
        <Stop stopColor="#FFC9E4" offset={0.781} />
        <Stop stopColor="#FFCAE4" offset={0.785} />
        <Stop stopColor="#FFCBE5" offset={0.789} />
        <Stop stopColor="#FFCBE5" offset={0.793} />
        <Stop stopColor="#FFCCE6" offset={0.797} />
        <Stop stopColor="#FFCDE6" offset={0.801} />
        <Stop stopColor="#FFCDE6" offset={0.805} />
        <Stop stopColor="#FFCEE7" offset={0.809} />
        <Stop stopColor="#FFCFE7" offset={0.813} />
        <Stop stopColor="#FFCFE8" offset={0.816} />
        <Stop stopColor="#FFD0E8" offset={0.82} />
        <Stop stopColor="#FFD1E9" offset={0.824} />
        <Stop stopColor="#FFD1E9" offset={0.828} />
        <Stop stopColor="#FFD2EA" offset={0.832} />
        <Stop stopColor="#FFD3EA" offset={0.836} />
        <Stop stopColor="#FFD4EB" offset={0.84} />
        <Stop stopColor="#FFD4EB" offset={0.844} />
        <Stop stopColor="#FFD5EC" offset={0.848} />
        <Stop stopColor="#FFD6EC" offset={0.852} />
        <Stop stopColor="#FFD6ED" offset={0.855} />
        <Stop stopColor="#FFD7ED" offset={0.859} />
        <Stop stopColor="#FFD8EE" offset={0.863} />
        <Stop stopColor="#FFD8EE" offset={0.867} />
        <Stop stopColor="#FFD9EE" offset={0.871} />
        <Stop stopColor="#FFDAEF" offset={0.875} />
        <Stop stopColor="#FFDAEF" offset={0.879} />
        <Stop stopColor="#FFDBF0" offset={0.883} />
        <Stop stopColor="#FFDCF0" offset={0.887} />
        <Stop stopColor="#FFDCF1" offset={0.891} />
        <Stop stopColor="#FFDDF1" offset={0.895} />
        <Stop stopColor="#FFDEF2" offset={0.898} />
        <Stop stopColor="#FFDEF2" offset={0.902} />
        <Stop stopColor="#FFDFF3" offset={0.906} />
        <Stop stopColor="#FFE0F3" offset={0.91} />
        <Stop stopColor="#FFE0F4" offset={0.914} />
        <Stop stopColor="#FFE1F4" offset={0.918} />
        <Stop stopColor="#FFE2F5" offset={0.922} />
        <Stop stopColor="#FFE2F5" offset={0.926} />
        <Stop stopColor="#FFE3F5" offset={0.93} />
        <Stop stopColor="#FFE4F6" offset={0.934} />
        <Stop stopColor="#FFE4F6" offset={0.938} />
        <Stop stopColor="#FFE5F7" offset={0.941} />
        <Stop stopColor="#FFE6F7" offset={0.945} />
        <Stop stopColor="#FFE6F8" offset={0.949} />
        <Stop stopColor="#FFE7F8" offset={0.953} />
        <Stop stopColor="#FFE8F9" offset={0.957} />
        <Stop stopColor="#FFE9F9" offset={0.961} />
        <Stop stopColor="#FFE9FA" offset={0.965} />
        <Stop stopColor="#FFEAFA" offset={0.969} />
        <Stop stopColor="#FFEBFB" offset={0.973} />
        <Stop stopColor="#FFEBFB" offset={0.977} />
        <Stop stopColor="#FFECFC" offset={0.98} />
        <Stop stopColor="#FFEDFC" offset={0.984} />
        <Stop stopColor="#FFEDFC" offset={0.988} />
        <Stop stopColor="#FFEEFD" offset={0.992} />
        <Stop stopColor="#FFEEFD" offset={1} />
      </LinearGradient>
    </Defs>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path fill="url(#c)" d="M262.5 112.5h-150v150h150Zm0 0" />
      </G>
    </G>
  </Svg>
)

export default Circle

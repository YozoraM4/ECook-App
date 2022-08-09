import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

const Frame = (props) => (
  <Svg
    viewBox="5 0 375 375"
    width={props.width}
    height={props.height}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M91.266 13.848h283.726v347.207H91.266Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        fill={props.colors}
        d="M201.34 13.844c-41.75 0-80.055 14.73-110.004 39.273 28.512-19.601 63.496-31.152 101.305-31.152 95.906 0 173.652 74.297 173.652 165.945 0 91.649-77.746 165.945-173.652 165.945-34.606 0-66.844-9.675-93.922-26.343 28.75 21.086 64.23 33.543 102.62 33.543 95.903 0 173.653-77.727 173.653-173.606 0-95.879-77.75-173.605-173.652-173.605"
      />
    </G>
    <Path
      fill={props.colors}
      d="M79.156 66.602c1.168-.918 12.965-20.633 12.965-20.633s-18.215 3.812-19.383 4.726c-.226.18-.39.48-.492.89-.305-.085-.578-.05-.805.126-1.171.918-12.964 20.633-12.964 20.633s18.214-3.813 19.382-4.727c.227-.18.391-.484.496-.89.301.085.575.05.801-.125M44.05 90.953c.516-.824 1.04-1.644 1.567-2.453M36.453 258.773c-.465-.925-.926-1.863-1.375-2.804"
    />
    <Path
      fill={props.colors}
      d="M56.078 69.207c.438-1.742-.266-26.879-.266-26.879S43.864 61.868 43.427 63.61c-.086.336-.059.707.058 1.098-.27.219-.46.496-.547.832-.437 1.738.27 26.879.27 26.879s11.95-19.54 12.387-21.277c.082-.34.058-.711-.063-1.102.274-.219.461-.496.547-.832M37.137 96.145c.093-1.825-5.332-25.692-5.332-25.692S23.87 93.445 23.773 95.27c-.02.351.075.699.266 1.03-.223.31-.355.641-.375.993-.098 1.824 5.332 25.691 5.332 25.691s7.934-22.992 8.031-24.812a1.887 1.887 0 0 0-.27-1.035c.227-.305.36-.64.38-.992M23.793 128.715c-.25-1.785-10.031-22.75-10.031-22.75s-3.38 24.875-3.13 26.656c.048.348.208.645.454.899-.16.37-.223.738-.176 1.082.25 1.785 10.031 22.75 10.031 22.75s3.38-24.872 3.13-26.657a1.587 1.587 0 0 0-.454-.898c.16-.371.223-.738.176-1.082M16.96 164.7c-.573-1.626-14.046-18.262-14.046-18.262s1.406 25.058 1.988 26.683c.114.316.32.547.61.7-.086.413-.082.788.031 1.1.582 1.626 14.05 18.263 14.05 18.263s-1.405-25.059-1.988-26.684a1.263 1.263 0 0 0-.609-.7c.086-.413.078-.788-.035-1.1M17.11 201.645C16.241 200.293 0 189.117 0 189.117s6.098 23.54 6.969 24.89a1 1 0 0 0 .726.454c-.004.43.07.785.239 1.047.867 1.351 17.109 12.523 17.109 12.523s-6.098-23.539-6.969-24.886a.997.997 0 0 0-.722-.458c.003-.425-.075-.78-.243-1.042M24.223 237.031c-1.098-.988-19.004-5.937-19.004-5.937s10.375 20.414 11.472 21.402c.215.191.485.246.793.176.075.41.22.726.43.918 1.102.988 19.004 5.937 19.004 5.937s-10.371-20.414-11.473-21.402c-.21-.188-.48-.242-.793-.176-.074-.41-.215-.726-.43-.918M64.25 94.176c1.293-.477 16.328-15.461 16.328-15.461s-18.191-2.766-19.484-2.29c-.25.095-.465.333-.64.692-.278-.195-.548-.254-.798-.164-1.293.477-16.324 15.461-16.324 15.461s18.188 2.766 19.48 2.29c.25-.09.465-.333.645-.688.273.191.543.254.793.16M49.793 117.195c1.168-.918 12.965-20.632 12.965-20.632s-18.215 3.812-19.383 4.726c-.227.176-.39.484-.492.89-.305-.085-.578-.05-.805.126-1.168.918-12.965 20.632-12.965 20.632s18.215-3.808 19.383-4.726c.227-.176.39-.484.496-.89.301.085.578.05.801-.126M40.074 144.41c.965-1.293 8.719-24.394 8.719-24.394s-16.996 10.125-17.957 11.418c-.191.25-.29.601-.316 1.027-.31.027-.57.156-.754.406-.97 1.293-8.72 24.399-8.72 24.399s16.997-10.125 17.962-11.418c.187-.254.285-.606.312-1.032a.987.987 0 0 0 .754-.406M35.762 173.969c.691-1.582 3.875-26.496 3.875-26.496s-14.621 15.746-15.313 17.332c-.137.308-.168.68-.11 1.097a1.26 1.26 0 0 0-.66.657c-.695 1.586-3.874 26.504-3.874 26.504s14.617-15.754 15.312-17.336c.133-.309.168-.68.11-1.098.3-.137.523-.352.66-.66M37.14 203.86c.38-1.766-1.23-26.798-1.23-26.798s-11.246 20.301-11.62 22.067c-.075.344-.036.71.097 1.094a1.604 1.604 0 0 0-.516.867c-.375 1.762 1.234 26.793 1.234 26.793s11.247-20.301 11.622-22.067c.074-.34.03-.71-.102-1.093.266-.235.445-.524.516-.864M44.125 232.04c.031-1.825-6.254-25.267-6.254-25.267s-7.11 23.47-7.14 25.297c-.004.352.101.696.304 1.012-.21.32-.332.66-.34 1.012-.03 1.828 6.258 25.27 6.258 25.27s7.106-23.473 7.137-25.298a1.837 1.837 0 0 0-.305-1.015c.215-.317.336-.66.34-1.012M102.297 328.094c-8.082-4.164-20.48-11.324-32.727-22.785-12.289-11.313-23.96-27.266-31.406-44.504 10.07 15.152 22.254 29.265 34.461 39.695 12.148 10.523 24 17.648 31.863 21.707 9.938 5.07 15.367 7.352 18.102 9.055 2.758 1.625 2.875 2.508 2.652 3.355-.219.852-.73 1.508-3.844.973-3.085-.617-8.859-2.266-19.101-7.496M120.98 127.96c1.157-.593 13.665-14.765 13.665-14.765s-17.282 1.075-18.438 1.664c-.227.118-.402.34-.531.645-.278-.098-.531-.098-.758.016-1.16.593-13.664 14.773-13.664 14.773s17.277-1.078 18.441-1.672c.223-.117.399-.336.528-.644.277.101.53.101.757-.016M86.371 143.328a87.63 87.63 0 0 1 1.652-1.754M66.48 273.691a115.2 115.2 0 0 1-1.066-2.336"
    />
    <Path
      fill={props.colors}
      d="M99.25 127.586c.543-1.313 1.805-21.035 1.805-21.035s-12.637 14.023-13.18 15.34c-.105.254-.11.546-.027.863-.27.14-.47.34-.57.594-.544 1.316-1.805 21.035-1.805 21.035s12.636-14.024 13.18-15.336c.1-.254.109-.547.027-.867.27-.14.465-.336.57-.594M79.523 146.66c.23-1.414-3.011-20.637-3.011-20.637s-9.157 17.141-9.383 18.555c-.047.277.016.559.168.836-.234.215-.383.461-.426.734-.23 1.418 3.012 20.641 3.012 20.641s9.156-17.144 9.387-18.555c.043-.277-.016-.558-.168-.84.23-.214.378-.46.421-.734M64.594 170.723c-.098-1.422-7.621-18.828-7.621-18.828s-5.051 19.085-4.953 20.503c.015.278.14.528.355.75-.176.274-.27.555-.25.829.098 1.421 7.625 18.828 7.625 18.828s5.047-19.086 4.953-20.508c-.02-.274-.144-.524-.36-.746.18-.274.27-.555.25-.828M55.477 198.133c-.418-1.328-11.715-15.742-11.715-15.742s-.598 19.734-.18 21.062c.082.258.258.461.516.61-.114.316-.137.609-.055.867.418 1.328 11.71 15.738 11.71 15.738s.602-19.734.184-21.063c-.078-.257-.257-.46-.515-.609.113-.316.137-.61.055-.863M52.797 227.02c-.711-1.145-15.008-11.579-15.008-11.579s3.89 19.036 4.602 20.184c.136.223.359.363.64.43-.035.336.008.62.145.843.707 1.149 15.004 11.575 15.004 11.575s-3.89-19.032-4.598-20.18c-.137-.223-.36-.363-.645-.43.04-.332-.003-.62-.14-.843M56.73 255.422c-.949-.887-17.273-6.629-17.273-6.629s8.117 17.043 9.07 17.93c.184.172.43.238.723.218.04.329.148.59.332.762.95.89 17.273 6.629 17.273 6.629s-8.117-17.039-9.07-17.926c-.183-.172-.43-.242-.722-.222-.04-.329-.149-.59-.333-.762M104.969 147.957c1.242-.234 16.414-10.375 16.414-10.375s-16.762-4.062-18.004-3.828c-.242.047-.457.21-.652.473-.239-.18-.489-.254-.727-.207-1.242.234-16.41 10.37-16.41 10.37s16.758 4.067 18 3.829c.242-.047.46-.211.652-.473.238.18.488.258.727.211M89.727 164.438c1.16-.598 13.668-14.77 13.668-14.77s-17.282 1.07-18.442 1.664c-.223.117-.398.34-.527.645-.278-.098-.535-.098-.758.015-1.16.594-13.668 14.77-13.668 14.77s17.281-1.075 18.438-1.668c.226-.114.402-.336.53-.645.278.102.532.102.759-.012M78.586 184.691c1-.91 9.992-18.156 9.992-18.156s-16.625 6.137-17.625 7.047c-.191.176-.312.441-.367.77-.297-.012-.547.062-.738.238-1 .914-9.993 18.156-9.993 18.156S76.48 186.61 77.48 185.7c.192-.176.313-.441.372-.77.289.016.543-.062.734-.238M72.309 207.344c.765-1.168 5.632-20.309 5.632-20.309s-14.84 10.781-15.609 11.95c-.148.222-.203.511-.184.843-.289.074-.515.223-.664.445-.77 1.168-5.636 20.309-5.636 20.309s14.84-10.781 15.605-11.95c.149-.222.207-.51.188-.843.289-.078.515-.223.668-.445M71.313 230.848c.484-1.34.894-21.07.894-21.07s-12.039 14.687-12.523 16.03c-.094.258-.086.551.007.864-.265.156-.453.363-.546.621-.485 1.34-.895 21.07-.895 21.07s12.04-14.691 12.523-16.031c.094-.258.086-.55-.007-.863.265-.156.453-.364.546-.621M75.676 253.602c.168-1.426-3.906-20.403-3.906-20.403s-8.422 17.602-8.59 19.024c-.035.277.043.554.207.824-.227.23-.364.48-.395.758-.168 1.425 3.906 20.402 3.906 20.402s8.418-17.602 8.59-19.027c.035-.278-.043-.551-.207-.825.223-.226.364-.48.395-.753M122.61 334.754c-7.22-4.098-18.239-10.992-28.79-21.23-10.597-10.126-20.27-23.813-25.902-38.067 8.242 12.898 18.527 25.2 29.121 34.629 10.531 9.496 21.04 16.3 28.066 20.293 8.883 5.004 13.774 7.355 16.196 8.973 2.449 1.554 2.492 2.257 2.219 2.902-.274.637-.797 1.098-3.66.351-2.833-.8-8.094-2.695-17.25-7.851M140.027 182.102c.946-.38 11.399-10.301 11.399-10.301s-13.801-.192-14.742.187c-.184.075-.332.23-.446.453-.218-.09-.422-.105-.605-.03-.946.374-11.399 10.3-11.399 10.3s13.805.187 14.746-.191c.184-.075.329-.227.446-.454.215.094.418.11.601.036M111.934 191.637c.453-.41.91-.817 1.375-1.219M91.563 288.375a74.51 74.51 0 0 1-.774-1.816"
    />
    <Path
      fill={props.colors}
      d="M122.738 180.563c.477-.954 2.168-15.688 2.168-15.688s-10.554 9.8-11.031 10.754c-.094.187-.105.406-.05.648-.223.09-.388.227-.477.414-.477.954-2.168 15.692-2.168 15.692s10.55-9.805 11.027-10.758c.094-.184.106-.406.055-.648a.881.881 0 0 0 .476-.415M106.363 193.746c.23-1.047-1.683-15.668-1.683-15.668s-7.887 12.344-8.118 13.39c-.046.204-.003.419.106.637-.191.149-.32.325-.363.528-.235 1.05 1.683 15.668 1.683 15.668s7.883-12.34 8.117-13.387c.047-.207.004-.422-.105-.64.191-.149.316-.325.363-.528M93.637 210.953c-.028-1.074-5.418-14.578-5.418-14.578s-4.684 14.035-4.656 15.11c.003.21.097.402.257.581a.962.962 0 0 0-.226.61c.027 1.074 5.414 14.578 5.414 14.578s4.687-14.04 4.66-15.113a.925.925 0 0 0-.258-.582c.153-.196.23-.403.227-.606M85.422 231.004c-.285-1.02-8.781-12.492-8.781-12.492s-1.16 14.781-.875 15.804c.054.196.187.36.386.485-.097.23-.125.449-.07.648.281 1.02 8.781 12.496 8.781 12.496s1.16-14.785.875-15.804c-.054-.2-.191-.364-.39-.489.101-.23.129-.449.074-.648M82.281 252.543c-.523-.906-11.547-9.563-11.547-9.563s2.438 14.52 2.965 15.418c.098.18.27.297.496.364-.043.25-.02.465.082.64.528.903 11.551 9.559 11.551 9.559s-2.437-14.516-2.965-15.418c-.101-.176-.27-.293-.496-.36.043-.25.016-.468-.086-.64M84.43 274.094c-.727-.723-13.528-5.973-13.528-5.973s5.871 13.262 6.602 13.98c.14.141.336.208.57.208.016.253.094.457.235.593.726.723 13.527 5.973 13.527 5.973s-5.871-13.262-6.598-13.98c-.14-.141-.336-.207-.57-.211-.02-.25-.098-.45-.238-.59M126.582 196.188c1-.106 13.43-6.84 13.43-6.84s-13.203-4.02-14.203-3.914c-.192.02-.371.132-.532.316-.187-.148-.382-.219-.574-.2-1 .106-13.43 6.845-13.43 6.845s13.204 4.015 14.204 3.91c.191-.02.37-.13.535-.317.183.149.375.223.57.2M113.871 207.684c.945-.383 11.399-10.301 11.399-10.301s-13.801-.196-14.743.183c-.183.075-.332.235-.445.454-.219-.09-.422-.106-.605-.032-.946.38-11.399 10.301-11.399 10.301s13.8.191 14.746-.187c.184-.075.328-.23.446-.454.214.09.418.106.601.036M104.293 222.246c.828-.625 8.59-13.055 8.59-13.055s-13.453 3.649-14.281 4.274c-.16.12-.266.312-.32.558-.235-.027-.438.016-.594.137-.829.625-8.59 13.055-8.59 13.055s13.453-3.649 14.28-4.274c.161-.12.267-.312.321-.558.235.027.434-.016.594-.137M98.504 238.89c.652-.827 5.195-14.917 5.195-14.917s-12.195 7.238-12.844 8.07c-.125.16-.183.371-.18.621-.23.04-.417.137-.542.297-.653.832-5.195 14.922-5.195 14.922s12.19-7.238 12.843-8.07c.125-.16.184-.372.18-.625.23-.04.418-.137.543-.297M96.898 256.48c.43-.976 1.446-15.765 1.446-15.765s-10.102 10.336-10.535 11.312c-.082.192-.086.41-.02.649-.219.105-.375.246-.46.437-.43.977-1.446 15.77-1.446 15.77s10.101-10.336 10.535-11.313c.082-.191.086-.414.023-.652a.894.894 0 0 0 .457-.438M99.582 273.82c.184-1.062-2.402-15.543-2.402-15.543s-7.317 12.727-7.504 13.786c-.035.207.015.417.136.632-.187.157-.304.34-.34.543-.187 1.063 2.403 15.543 2.403 15.543s7.316-12.726 7.5-13.785c.04-.207-.012-.418-.133-.629.184-.16.305-.344.34-.547M134.14 337.46c-5.609-3.495-14.144-9.304-22.19-17.6-8.087-8.215-15.317-19.051-19.305-30.079 6.113 10.16 13.878 19.992 21.984 27.684 8.058 7.734 16.191 13.453 21.648 16.855 6.903 4.27 10.715 6.317 12.586 7.668 1.899 1.313 1.91 1.844 1.672 2.309-.242.465-.676.777-2.93.055-2.23-.766-6.351-2.493-13.464-6.891"
    />
  </Svg>
)

export default Frame
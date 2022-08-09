import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

const EasyToUse = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 375 375"
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M.023 294.387H374.98v17.105H.023Zm0 0" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M21.8 218.309h160.552V331.5H21.8Zm0 0" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M175 239h183v92.5H175Zm0 0" />
      </ClipPath>
    </Defs>
    <Path
      fill="#2a6c7e"
      d="M160.59 223.727c-3.016.671-5.922 2.425-8.465 4.625-2.84 2.457-5.172 5.328-5.797 8.636-.594 3.121.324 6.39 2.422 8.899 1.707 2.039 4.117 3.449 6.785 4.117 2.516.633 5.172.574 7.781.098 2.856-.516 5.555-1.497 7.329-3.41 2.09-2.25 2.78-5.633 2.73-9.122-.043-2.906-.625-5.761-1.95-8.28-1.34-2.556-3.366-4.665-5.816-5.466-1.593-.52-3.308-.465-5.02-.097"
    />
    <G clipPath="url(#a)">
      <Path
        fill="#9e9e9e"
        d="M9.996 294.496h356.848c5.05 1.121 8.344 4.39 8.129 9.016-.203 4.36-3.414 7.218-8.13 7.855H9.997c-5.426.465-9.504-2.75-9.934-7.199-.476-4.906 3.657-9.113 9.934-9.672"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#4e4e4e"
        d="m33.684 331.387-.871-35.211c-3.114-2.274-5.336-5.39-7.126-8.73-3.171-5.923-4.585-12.821-3.539-20.044 2.309-15.925 15.293-32.808 33.883-41.605 28.742-13.602 63.985-7.152 100.106 9.133 10.945 6.28 19.754 15.007 23.562 24.949 2.399 6.258 2.684 12.914 2.512 19.969-.387 15.902-3.922 34.476-8.262 51.539-9.375.394-18.75-.399-28.129 0-8.101.343-16.203-.344-24.304 0l4.011-26.98c-4.902-2.981-10.246-4.966-15.8-6.134-7.641-1.605-15.668-1.62-23.68-.53.098 5.882.11 11.769.02 17.655-.075 4.989-.227 11.004-.462 15.989H33.684"
      />
    </G>
    <Path
      fill="#9e9e9e"
      d="M216.125 128.422c17.375-19.89 46.418-22.442 64.457-4.82 11.656 11.382 15.09 31.613 21.285 51.71 6.711 21.774 16.356 41.934 12.957 59.79-5.719 30.043-39.187 48.156-76.754 37.98-11.976-3.246-23.226-9.637-29.203-19.66-7.578-12.707-6.105-30.543-5.562-48.711.914-30.55-1.27-59.902 12.82-76.29"
    />
    <G clipPath="url(#c)">
      <Path
        fill="#62483c"
        d="M246.238 308.781c1.516 4.625 2.977 9.274 4.297 13.926.73 2.574 1.418 5.148 2.047 7.742.34-1.906.613-3.82.852-5.738.398-3.2.632-6.418 1.164-9.582.437-2.61 1.03-5.188 1.84-7.707Zm-54.43 22.606c-6.136-9.364-10.515-19.723-13.269-30.399-3.328-12.883-4.453-25.941.586-36.441 5.438-11.332 16.941-18.895 29.836-19.867 12.742-.957 25.773 4.867 39.824 8.203 4.363 1.035 8.805 1.84 12.66.672 3.864-1.172 7.207-4.344 11.012-6.864 7.832-5.187 17.547-7.445 27.52-7.648 18.199-.371 35.316 6.984 46.941 19.973 9.371 10.472 13.875 22.625 8.96 29.75-4.085 5.921-15.37 6.93-25.14 11.937-2.59 1.328-5.035 2.95-7.066 5.086.152 4.219-.5 8.36-1.774 12.324-1.648 5.133-4.355 8.887-7.765 13.274H191.809"
      />
    </G>
    <Path
      fill="#ffeaca"
      d="M267.531 91.727a551.155 551.155 0 0 0-.574 26.77c.027 8.151.23 16.25.895 24.476 1.304 16.23 4.367 32.937 7.96 49.386-2.687 6.196-4.746 12.543-6.066 19.118-1.492 7.418-2.234 14.738 1 19.132 2.004 2.73 5.399 4.227 9.176 5.184 7.648 1.937 16.457 1.473 24.992 3.168 6.469 1.285 12.664 3.855 18.219 7.398 10.976 7 18.988 17.625 20.84 29.391 1.285 8.172-.621 16.402 2.855 19.738 2.512 2.418 7.14 2.297 10.832-.418.969-.71 1.805-1.507 2.555-2.593 3.226-4.688 4.84-13.938 2.652-21.86-2.574-9.324-8.5-17.785-14.535-26.527-4.285-6.207-7.363-13.113-11.3-19.508 2.093-2.789 3.304-5.95 4.003-9.582 1.586-8.254-.207-19.203-2.344-29.762a477.572 477.572 0 0 0-7.664-32.191c-4.289-15.559-9.082-30.813-19.464-40.375-8.395-7.734-20.231-11.5-31.829-16.172-4.054-1.637-8.066-3.36-12.203-4.773M124.762 67.992c-7.336 1.375-13.219 7.903-18.832 14.7-54.758 66.261-57.114 138.066-26.555 155.167 9.918 5.547 23.777 2.75 37.352 3.246 16.378.594 32.253 5.243 41.82-.742 9.562-5.98 12.316-21.812 14.656-38.097 5.32-37.047 7.383-73.426-6.793-101.77-10.414-20.832-27.347-34.633-41.648-32.504"
    />
    <Path
      fill="#2a6c7e"
      d="M202.246 111.434c-2.906-6.215-6.512-10.965-10.48-15.637-6.328-7.45-13.297-13.766-20.38-13.555-6.109.188-11.808 5.031-15.558 11.73-5.633 10.06-6.043 23.587-4.875 37.352.2 2.348.438 4.688.707 7.035a389.691 389.691 0 0 0 2.227 16.446c3.308 20.851 8.277 41.507 7.625 60.117-.36 10.367-2.301 20.058 1.011 27.055 2.286 4.835 7.141 8.265 10.485 12.832 2.8 3.824 4.726 8.367 5.191 13.254.946-4.329 3.145-8.047 6.25-11.262 5.668-5.871 14.488-9.84 24.031-12.196 5.102-53.27 6.45-106.066-6.234-133.171"
    />
    <Path
      fill="#f7bd9a"
      d="M172.21 22.426c-9.683-5.86-23.8-6.375-36.64-1.254-8.586 3.422-15.554 9.457-20.285 17.84-1.312.824-2.2 2.031-2.664 3.57-.945 3.16.043 7.68 1.18 12.168.527 2.086 1.078 4.16 1.957 6.078a17.183 17.183 0 0 0 2.746 4.219c-.5 2.082-1.246 4.082-2.305 5.883-.785 1.34-1.738 2.57-2.89 3.629 1.226 7.796 3.66 15.171 7.21 22.12 5.696 11.153 12.66 20.216 19.833 19.903 3.878-.164 7.343-3.133 9.703-7.07 1.586-2.64 2.71-5.645 2.812-8.86 3.278.438 6.442-.472 9.074-2.172 3.606-2.328 6.082-6.34 8.137-10.972 4.473-10.086 6.484-23.133 8.266-36.18 1.23-8.988 2.308-17.91-.418-23.281-1.274-2.508-3.317-4.168-5.715-5.621"
    />
    <Path
      fill="#4e4e4e"
      d="M162.61 48.86c-.61-.692-1.946-.715-3.368-.63-1.226.075-2.437.254-3.652.461-1.235.215-2.461.461-3.653.825-1.32.406-2.57.953-3.562 1.816-1.113.969-1.762 2.113-1.422 2.617.379.563 2.004.09 3.82-.441 1.29-.375 2.57-.766 3.883-.977a16.795 16.795 0 0 1 3.625-.172c1.348.075 2.633.278 3.531-.195 1.364-.719 1.7-2.348.797-3.305M172 48.645c.61-.657 1.953-.61 3.371-.63 1.102-.015 2.207-.03 3.129.247.547.164 1.02.422 1.273.828.32.52.262 1.242 0 1.926-.152.398-.363.773-.714.98-.63.367-1.672.172-2.73.152-1.337-.03-2.63.247-3.532-.199-1.375-.683-1.738-2.328-.797-3.304"
    />
    <Path
      fill="#393939"
      d="M152.582 59.8c.297-1.636 1.531-2.777 2.746-2.55 1.219.223 1.961 1.727 1.66 3.363-.304 1.637-1.531 2.778-2.75 2.551-1.215-.223-1.965-1.727-1.656-3.363M171.445 59.098c.246-1.352 1.266-2.29 2.266-2.102 1.004.184 1.613 1.422 1.363 2.77-.246 1.347-1.258 2.289-2.262 2.101-1-.183-1.617-1.422-1.367-2.77"
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M14806.394 23691.314c48.646-276.38 91.81-553.786 166.149-824.343 48.988-177.403 103.457-347.957 53.099-476.386-80.505-206.514-379.572-287.681-695.426-159.937M11190.523 21766.249c193.554-278.092 429.93-517.141 694.74-726.737 400.127-316.792 868.084-562.348 1361.048-755.848"
      stroke="#886047"
      strokeWidth={96.056}
    />
    <Path
      fill="#fff"
      d="M157.297 83.469c.75-.7 3.832.816 7.226.828 1.875.004 3.704-.461 4.184.035 1.063 1.094-1.793 4.527-6.43 3.934-3.941-.508-6.054-3.688-4.98-4.797"
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M9933.618 25123.897c115.447 66.098 243.228 73.633 362.786 29.11 193.897-72.605 342.574-273.639 428.56-527.072M10416.305 23365.618c65.774-33.22 136.345-35.617 199.72-9.59 77.08 31.851 132.234 101.032 161.353 190.076"
      stroke="#886047"
      strokeWidth={96.056}
    />
    <Path
      fill="#4e4e4e"
      d="M181.652 32.906c2.715-5.324-2.148-13.37-9.773-20.422-5.035-4.652-10.852-8.336-17.352-9.976-9.925-2.504-20.734-.328-29.879 5.512-3.296 2.105-6.332 4.543-8.34 7.988-3.617 6.219-3.788 15.281-1.66 24.488 2.102-.277 4.094.426 5.856 1.371 4.328 2.317 6.871 6.664 6.48 10.996-.207 2.282-1.25 4.407-.675 5.864.64 1.613 2.609 2.3 3.824 1.515 1.972-1.281.472-7.015 3.254-9.922 1.968-2.062 6.035-2.273 8.765-4.355 2.489-1.895 3.91-5.121 3.137-8.543 6.75 1.789 13.598 2.406 20.395 1.879 7.18-.563 13.855-2.246 15.968-6.395"
    />
    <Path
      fill="#2a6c7e"
      d="M116.379 61.898a39.419 39.419 0 0 0-3.27 1.95c-2.355 1.543-4.578 3.297-7.234 4.886-7.605 4.543-18.79 7.82-29.516 12.215-9.043 3.707-17.761 8.114-23.058 15.512-8.145 11.371-8.11 29.348-8.41 47.527-.34 20.375-1.465 41.473-4.239 60.809-1.07 7.457-2.402 14.652-5.3 21.273-2.938 6.72-7.61 12.64-10.407 19.371-3.375 8.114-4.414 17.36-2.972 26.536 1.894-9.918 6.023-18.86 12.539-25.754 5.383-5.696 12.164-9.868 19.636-11.258 9.329-1.738 19.243.836 27.989 6.773 8.218-2.894 15.086-7.875 21.129-14.55 13.363-14.754 20.992-38.157 26.093-62.004 3.371-15.754 4.703-31.7 4.864-47.864-4.73-8.39-9.465-16.84-14.23-25.136-1.333-2.317-2.677-4.602-3.684-7.063-1.395-3.402-2.207-7.117-2.532-10.894a21.247 21.247 0 0 0 2.903-4.094 24.098 24.098 0 0 0 2.105-5.293 4.372 4.372 0 0 1-.922-.758c-.574-.598-1.062-1.379-1.484-2.184"
    />
    <Path
      fill="#f7bd9a"
      d="M225.145 38.945c-7.098 5.95-11.047 15.578-14.38 25.727-1.675 5.113-3.042 10.316-1.96 14.187.582 2.09 1.898 3.77 2.656 5.68 1.023 2.578.996 5.473 2.375 6.398.91.61 2.187.399 3.176-.62a43.075 43.075 0 0 0 1.32 4.64 52.883 52.883 0 0 0 2.2 5.371l4.652 40.531c6.613 4.793 14.254 6.575 21.738 5.07 8.113-1.632 14.89-6.867 19.543-14.546.773-6.38 1.285-12.817 1.168-19.059-.063-3.383-.293-6.707-.809-10.015.988-1.746 1.778-3.579 2.453-5.496 1.274-3.586 2.114-7.489 2.746-11.407 1.016-.426 1.735-1.238 2.141-2.258.742-1.87.309-4.554.113-7.226-.394-5.473.239-10.984-.422-16.293-1.12-9.008-5.574-17.04-12.445-22.024-11.129-8.078-25.672-7.53-36.265 1.34"
    />
    <Path
      fill="#ffeaca"
      d="M242.484 73.133c-.527-.656-1.675-.801-2.906-.813-1.078-.011-2.156.106-3.234.246-1.106.141-2.203.309-3.27.606-1.207.332-2.34.824-3.27 1.59-1.113.918-1.777 2.004-1.452 2.504.343.52 1.789.187 3.386-.215 1.16-.293 2.309-.617 3.48-.746 1.055-.121 2.13-.082 3.192.039 1.172.133 2.281.36 3.113.008 1.418-.598 1.829-2.204.961-3.22M252.11 72.746c.35-.75 1.402-1.156 2.562-1.441 1.023-.254 2.078-.38 3.14-.485 1.094-.105 2.18-.191 3.266-.14 1.235.054 2.442.285 3.512.816 1.312.645 2.223 1.55 2.015 2.11-.21.57-1.664.578-3.277.546-1.176-.023-2.348-.082-3.5.051-1.031.121-2.043.402-3.031.754-1.078.387-2.078.84-2.957.703-1.55-.242-2.336-1.719-1.73-2.914"
    />
    <Path
      fill="#393939"
      d="M234.96 82.398c-.003-1.312.884-2.37 1.97-2.37 1.09 0 1.968 1.058 1.968 2.37 0 1.313-.878 2.372-1.968 2.372-1.086 0-1.973-1.06-1.97-2.372M257.031 80.137c-.008-1.313.883-2.371 1.969-2.371 1.09-.004 1.969 1.058 1.969 2.37 0 1.31-.88 2.372-1.969 2.372-1.086 0-1.977-1.063-1.969-2.371"
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M22010.389 21545.35c80.847-203.088 143.538-410.287 174.713-619.198 20.897-140.416 29.119-278.092-34.6-376.04-113.735-176.034-401.155-206.514-692-65.414M21123.121 20080.233c268.579-136.306 552.915-204.117 819.438-163.705 183.277 27.741 354.564 104.798 492.965 236.995M20455.444 19418.909c193.897-308.572 461.448-544.197 777.301-679.475 292.216-125.005 612.523-163.02 898.23-65.756 387.794 132.196 677.612 493.852 810.188 963.731"
      stroke="#bc8d6e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M19468.83 20078.178c67.83-260.968 209.998-482.55 409.72-644.2 216.506-175.006 486.797-269.53 780.383-282.202M22798.995 19285.685c106.883 60.961 199.035 141.443 278.17 234.597 118.873 139.046 207.943 308.23 274.402 488.715M20554.79 18217.84c275.088-247.268 615.264-367.82 967.088-367.82 485.77-.343 961.606 228.775 1368.927 599.335M23240.916 22124.138c49.33 14.041 99.346 24.658 150.39 32.877 75.366 12.33 152.445 19.18 229.525 22.604M19785.711 21748.782c49.674 0 99.347 2.055 149.363 5.138 104.828 6.164 211.368 17.466 317.566 29.795M20910.04 20657.65c-30.489-39.385-62.69-77.4-96.606-113.703-44.877-47.947-91.467-93.496-144.223-132.881-85.644-63.701-186.36-111.99-290.846-150.348M22729.452 20804.572c12.675-53.426 30.147-104.798 51.729-154.8 24.323-55.823 52.756-109.25 93.523-152.744 54.812-58.564 129.835-98.976 213.08-121.922"
      stroke="#bc8d6e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M23781.498 22294.349c-113.735 106.168-382.656 23.973-674.871-28.083-325.789-57.879-659.456-82.88-850.612-189.39-77.765-43.495-130.521-97.606-150.733-167.472-34.943-122.607 34.257-276.721 164.778-385.287 95.92-79.797 217.877-126.374 348.398-147.608 176.768-29.453 361.073-9.931 544.008 27.741 220.275 45.55 431.644 114.73 549.147 254.118 73.31 86.99 106.54 198.295 122.984 313.71 17.814 128.771 14.388 256.173-53.1 322.27ZM21552.367 21803.236c-28.776 68.153-98.319 110.278-179.509 141.786-147.307 56.851-327.5 68.838-508.723 70.893-256.245 2.74-511.806-12.672-764.625-41.098-143.197-15.753-282.282-32.535-345.658-111.647-80.162-100.004-38.026-276.037 68.172-438.029 58.238-89.386 130.521-167.471 231.238-209.596 183.277-77.4 446.717-29.795 715.638-8.22 174.027 13.7 344.972 15.412 487.14 78.77 251.107 112.676 368.61 357.204 296.327 517.141Zm0 0"
      stroke="#4e4e4e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M21527.36 21830.977c66.459 19.864 134.288 31.85 203.83 38.357 113.393 10.617 231.238 6.508 347.714-5.822M23867.141 22082.013c44.878 21.918 82.903 53.426 112.365 91.784 32.202 41.782 53.441 90.756 64.061 144.183M19533.92 21776.523c35.97-27.74 73.995-52.399 114.42-70.55 25.692-11.644 52.07-20.891 79.476-26.371"
      stroke="#4e4e4e"
      strokeWidth={96.056}
    />
    <Path
      fill="#ffeaca"
      d="M273.664 79.113c4.094-3.27 7.106-7.468 8.664-12.183 1.36-4.118 1.535-8.586 1.227-13.051-.426-6.156-1.825-12.137-4.485-17.453-6.035-12.047-17.445-19.66-29.953-19.918-7.558-.156-14.918 2.504-20.398 8.433-4.965-2.671-10.293-2.601-15.078.098-9.883 5.574-15.645 20.2-12.942 35.848 1.117 6.472 3.754 12.66 7.617 18.144 3.16 4.492 6.864 8.262 10.22 7.887 3.714-.414 6.562-5.977 9.96-11.574 2.856-4.703 6.004-9.164 9.684-13.149 6.53-7.086 14.164-11.968 20.465-10.25 4.34 1.188 7.648 5.625 10.164 10.586 2.597 5.121 4.242 10.707 4.855 16.582M219.805 99.816c-8.133.664-15.793 3.262-22.77 7.067-10.457 5.707-19.055 14.168-23.972 24.613-5.754 12.23-6.16 26.766-5.782 41.516.403 15.847 1.828 31.57 5.54 46.547 2.452 9.898 5.671 19.199 12.378 23.789 8.203 5.609 20.832 3.652 33.352-.575 8.66-2.921 16.656-6.742 18.629-12.933 1.632-5.113-1.047-11.621-3.055-18.54-3.34-11.464-4.703-23.687-5.855-36.038-1.68-18.09-2.547-36.63-4.79-54.082-.933-7.25-2.109-14.309-3.675-21.364"
    />
    <Path
      fill="#f7bd9a"
      d="M114.531 179.57c-2.933 2.125-5.57 4.582-7.98 7.262-6.156 6.84-10.969 14.781-13.79 23.238-.706 2.121-1.277 4.262-1.57 6.473 1.727 1.84 3.993 2.879 6.47 3.27 4.089.64 8.905-.786 13.726-1.938 7.05-1.688 14.218-2.855 20.996-5.191 6.719-2.313 13.035-5.684 19.27-9.391 11.113-6.606 21.882-14.207 32.503-22.023 1.36 1.289 3.164 1.777 4.938 1.66 3.336-.215 6.554-2.797 10.281-3.39 1.664-.267 3.39-.173 4.8.62 2.09 1.176 3.415 3.824 4.45 6.645.379 1.035.691 2.07 1.395 2.527.804.52 1.96.34 2.601-.629a5.858 5.858 0 0 0 3.441-.3c1.25-.512 2.297-1.43 3.086-2.626-.214 1.043.227 1.946 1.086 2.344 1.797.836 4.696-.676 6.633-3.5 2.117-3.094 2.387-7.11 1.442-11.11-.653-2.765-1.989-5.28-3.946-7.448 3.04-.958 6.262-1.055 9.207-.364 2.598.61 4.993 1.922 7.356 1.95 1.797.019 3.394-.583 3.758-1.637.55-1.621-1.871-3.844-5.227-5.575-2.785-1.433-5.875-2.226-8.984-3.097-3.633-1.016-7.223-2.16-10.692-2.059-2.457.074-4.832.75-7.226 1.426-5.422 1.535-10.89 2.977-16.395 4.223-4.914 1.113-9.875 2.035-14.828 2.968-5.402 1.02-10.812 2.04-16.05 3.594-7.915 2.344-15.462 5.867-23.368 7.985-6.105 1.64-12.422 2.43-18.746 3.152a577.55 577.55 0 0 1-8.637.941"
    />
    <Path
      fill="#4e4e4e"
      d="m241.324 189.871.258-25.973c.027-2.753-.352-4.968.664-6.132.832-.95 2.5-1.121 4.555-1.371l17.984-2.188c1.399-.168 2.645.125 3.367.969.649.75.809 1.887.774 3.187l-1.106 38.793c-.156 5.39-5.332 8.875-11.816 9.086-5.063.164-9.922-1.875-12.473-5.836-1.816-2.812-2.246-6.472-2.207-10.535"
    />
    <Path
      fill="#f7bd9a"
      d="M222.52 201.21c.667-1.194 1.359-2.382 1.875-3.636.667-1.617 1.054-3.36 2.07-4.457.722-.777 1.77-1.222 2.578-1.906 1.84-1.555 2.45-4.281 4.2-5.676 1.175-.933 2.847-1.25 4.433-1.797 1.129-.39 2.23-.879 3.258-1.5l.132 4.586c2.09-.304 4.223-.277 6.301-.793 3.488-.863 6.883-1.758 9.102-1.004 1.117.38 1.922 1.235 2.222 2.266.387 1.328-.05 2.941-1.253 4.172 1.55.137 2.957.7 4.085 1.664 1.106.941 1.875 2.21 2.247 3.687l4.046-2.824c1.227-.855 1.028-2.777.512-4.816-.476-1.903-1.156-3.727-1.48-5.617-.684-4.028.18-7.336 1.93-7.586 1.367-.196 3.015 1.707 4.03 4.101 1.649 3.903 1.114 8.594 2.926 12.168 1.094 2.16 3.047 3.88 4.758 5.797 1.61 1.797 3.047 3.668 3.906 6.16 2.024 5.883.786 15.082-2.113 24.18-1.91-1.137-3.918-2.078-5.973-2.899-2.8-1.113-5.71-1.94-8.68-2.34-2.558-.347-5.152-.347-7.722-.656a39.53 39.53 0 0 1-9.281-2.285c-2.637.52-5.266 1.078-7.887 1.68a259.942 259.942 0 0 0-7.328 1.781l-7.344 7.945c-3.093-3.593-5.445-7.62-6.906-12.027-1.492-4.5-2.066-9.254-.976-13.168.519-1.879 1.406-3.539 2.332-5.2M268.71 90.148c1.83-.785 3.74-1.273 5.313-1.085.782.093 1.485.332 2.098.785 1.082-.739 2.262-1.27 3.5-1.524a7.839 7.839 0 0 1 3.106-.027c1.25-1.035 2.687-1.7 4.187-1.895 1.285-.164 2.59.028 3.508.758.746.59 1.207 1.535 1.945 2.11 1.024.789 2.563.847 3.395 1.582 1.285 1.136.836 3.77 2.133 4.918.777.687 2.148.796 3.03 1.523 1.391 1.144 1.532 3.527.618 5.73-.977 2.356-2.836 3.93-4.492 3.508-1.504-.383-2.324-2.18-1.824-4.277l-1.07-.399c-.872 1.485-1.923 2.801-3.22 3.856-1.097.89-2.292 1.594-3.437 1.469-1.367-.149-2.434-1.282-2.531-2.883a2.486 2.486 0 0 1-2.34-.164c-.95-.586-1.469-1.746-1.649-3.012-.168-1.223.051-2.453.606-3.617a52.547 52.547 0 0 0-5.535-2.34 59.275 59.275 0 0 0-6.516-1.898l-.824-3.118"
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M25613.585 21047.389c-87.014-161.307-175.74-321.929-266.18-481.181-97.976-172.266-198.35-343.162-300.438-513.031M26078.116 20550.454c-39.396-79.455-76.394-160.622-104.485-241.789-13.703-40.412-25.693-81.167-33.915-122.607M24298.442 21167.598c144.91 18.494 277.486-14.041 363.814-104.455 66.802-69.523 99.69-164.732 83.588-257.886-11.99-68.838-50.015-132.196-113.734-172.608M18840.206 14323.873c234.664-194.528 401.84-440.426 477.206-718.86 68.515-252.406 58.238-520.224-34.942-777.424M19282.47 14980.744c108.253-125.004 216.507-250.35 324.76-375.355M18260.913 14032.424c215.137-98.633 372.036-268.16 462.133-476.043 128.123-296.243 110.994-651.05-10.277-1001.747"
      stroke="#886047"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M20598.298 11660.083c281.596 111.648 566.96 213.364 855.408 306.86 367.924 119.182 740.645 224.665 1116.107 320.217M20524.987 12506.688c173.685 52.056 347.713 103.77 521.398 155.827M21083.04 11019.308c289.476 78.428 574.155 171.239 855.408 274.667 356.963 131.511 707.416 281.174 1052.046 443.85"
      stroke="#bc8d6e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M21156.351 10245.994c242.885 3.768 480.29 43.837 711.184 123.977 349.084 120.552 678.64 309.6 991.068 531.868 215.822 153.772 418.626 303.777 418.626 468.166-.343 167.13-178.482 308.572-426.848 307.202"
      stroke="#bc8d6e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M22748.979 10830.26c126.41-10.274 219.933-75.002 243.228-176.718 58.922-256.515-329.9-618.514-915.701-872.974M19769.61 11561.792c-14.73-51.714-16.786-105.14-10.277-159.936 11.305-95.21 53.784-194.87 78.792-298.64 24.323-100.004 33.23-204.117 75.71-291.792 40.423-83.222 110.993-148.977 163.065-230.83 82.56-129.113 123.669-295.557 130.863-465.084"
      stroke="#bc8d6e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M26121.28 17161.64c-52.414-799.684-64.746-1600.054-46.247-2401.451 25.008-1094.215 108.596-2190.143 231.58-3281.961M24232.326 8563.06c141.14 32.536 266.865 97.264 359.017 195.555 73.311 78.085 124.012 175.006 142.511 284.599"
      stroke="#c7a66a"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M24819.498 11668.645c483.03-222.267 1007.51-310.284 1435.729-202.061 260.014 65.755 485.77 210.623 734.822 302.75 444.66 164.731 931.116 182.54 1382.63 39.042 335.38-106.853 652.603-290.42 892.063-569.54M16546.33 17112.324c212.738-652.077 425.819-1304.154 638.558-1955.889M17564.802 12978.279l414.173-1971.642M19263.628 11385.417c-295.984-169.87-607.041-310.627-925.978-421.248-256.588-88.701-521.055-153.087-787.236-168.156-366.212-21.234-734.479 61.303-1070.202-11.987-355.25-77.742-682.408-311.654-859.519-667.83"
      stroke="#c7a66a"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M22889.434 6678.75c-268.578-418.165-479.604-864.756-630.336-1333.607-170.945-532.895-268.921-1084.968-246.654-1637.727 19.87-499.675 133.604-993.87 346.343-1458.269M21972.02 6714.025c143.197-97.264 279.541-204.459 398.072-325.011 74.681-76.373 142.51-157.54 200.748-246.241M27840.66 5615.358c387.452-452.07 657.058-971.609 777.301-1532.244 109.624-509.264 93.18-1039.42-57.895-1555.533"
      stroke="#886047"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M9556.786 7654.125c-44.192-266.79-104.142-530.155-178.481-789.41-79.82-279.804-176.426-554.813-288.105-824M8911.719 4392.713c194.24 397.274 417.255 778.109 668.02 1140.792 295.984 428.097 625.883 830.85 1002.372 1187.027 320.65 303.435 672.473 573.307 1053.758 800.712M10900.02 2914.238c-130.52 509.264-157.242 1027.09-86.671 1538.409 109.623 791.123 416.57 1535.326 921.867 2137.744 313.113 373.3 691.657 685.982 1128.097 848.659 311.4 115.757 646.78 160.28 983.53 101.715M7345.812 7736.32c203.146-468.51 360.045-950.717 465.558-1447.652 156.9-737.354 225.757-1499.023 125.04-2188.43-37.683-257.201-95.236-503.442-191.5-740.437M3639.843 6055.783c-362.1-445.22-644.382-937.36-759.487-1446.624-70.913-315.422-81.533-635.98-6.509-952.43"
      stroke="#9e9e9e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M22038.822 3094.724c-128.465-333.23-256.588-666.461-385.053-999.692"
      stroke="#886047"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M7309.499 19593.23c399.099-698.312 717.693-1439.775 1004.77-2187.403 443.976-1156.889 736.192-2376.793 1181.539-3248.056 135.66-265.42 277.142-503.442 452.883-718.175M4419.885 15036.91c274.402-776.053 646.78-1506.558 1088.7-2198.704 634.791-994.897 1417.916-1907.942 2280.86-2748.724M6949.453 12568.333c221.988 500.017 557.369 907.566 995.521 1130.518 322.02 164.047 687.547 222.61 1057.527 145.21M9247.784 22641.963c-104.485-648.31-70.913-1294.907 119.216-1909.311 201.434-649.68 549.49-1249.7 874.935-1869.584 173.685-330.833 322.02-631.186 437.124-616.46 121.614 15.755 170.602 391.11 411.09 537.005 164.093 99.661 372.378 79.797 509.065-89.044M5167.724 12052.563c-222.33-495.908-487.14-969.211-807.447-1397.65-232.608-310.97-493.65-598.994-789.291-853.112M2963.259 8558.266c584.774 159.594 1163.04 340.08 1732.74 544.881 493.993 177.404 981.476 373.3 1460.395 589.746"
      stroke="#a8d6dd"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M11925.345 18276.062c191.499-69.18 391.905-79.798 584.089-39.043 234.32 49.66 449.115 174.321 632.392 350.355M20466.407 26685.936c451.855 327.751 982.503 445.221 1509.724 373.986 763.256-103.428 1463.478-595.568 2018.105-1301.414"
      stroke="#c7a66a"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M21016.238 26630.798c365.87 53.084 732.424 43.837 1085.276-35.276 315.168-71.235 616.633-197.609 891.035-379.807"
      stroke="#c7a66a"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M10416.648 27105.814c79.82 358.916 270.29 665.433 532.017 909.962 398.414 372.273 957.838 588.376 1567.278 677.42M11316.248 27764.055c217.192 196.24 462.817 352.752 725.572 474.331 335.723 155.143 699.194 251.036 1073.97 300.01"
      stroke="#9e9e9e"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M26968.466 8278.462c408.006 53.769 805.05 157.54 1186.678 303.777 440.893 169.184 859.519 394.534 1252.794 665.091M26590.95 11858.72c286.049 182.54 590.94 328.094 910.904 429.467 291.874 92.811 594.71 148.635 903.369 163.02M16430.539 11267.262c215.48 7.534 430.273-8.562 641.984-44.522 258.644-43.495 512.149-116.785 758.802-212.679"
      stroke="#c7a66a"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="M13426.848 17793.854c159.982 478.783 403.21 854.138 646.78 903.455 81.875 16.781 160.325-7.877 216.85 20.891 142.51 72.605 131.548 389.74 2.74 734.614-85.986 229.46-228.497 425.7-424.792 581.527"
      stroke="#a8d6dd"
      strokeWidth={96.056}
    />
    <Path
      transform="matrix(.0114 0 0 -.0114 .024 331.501)"
      fill="none"
      d="m23265.238 15257.466-1639.218-188.02c-212.738-24.316-228.84-358.231-228.497-769.89l1.028-1475.05"
      stroke="#9e9e9e"
      strokeWidth={96.056}
    />
    <Path
      fill="#9e9e9e"
      d="M254.36 166.172c.19-1.637 1.413-2.832 2.722-2.676 1.309.156 2.211 1.606 2.016 3.246-.2 1.637-1.414 2.832-2.723 2.676-1.309-.156-2.219-1.606-2.016-3.246"
    />
  </Svg>
)

export default EasyToUse
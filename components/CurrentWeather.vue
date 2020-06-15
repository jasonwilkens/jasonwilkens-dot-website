<template>
  <span v-if="darksky" class="step-1 weather">
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      class="weather-svg step-0"
      role="img"
      aria-labelledby="weather-title"
      :style="'max-width:' + (weatherMap.width) + 'em'"
    >
      <symbol id="sun" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r="50" fill="var(--base-clr-accent)" />
      </symbol>
      <symbol id="clear" viewBox="0 0 104 110">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M101.919 75.8372C94.8138 79.7148 86.6642 81.9186 78 81.9186C50.3858 81.9186 28 59.5329 28 31.9186C28 23.2544 30.2038 15.1049 34.0814 8C18.542 16.4809 8 32.9686 8 51.9186C8 79.5329 30.3858 101.919 58 101.919C76.95 101.919 93.4378 91.3766 101.919 75.8372Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M83.7104 87.6306C81.8322 87.8211 79.9271 87.9186 78 87.9186C47.0721 87.9186 22 62.8466 22 31.9186C22 29.9915 22.0975 28.0864 22.288 26.2083C17.0705 33.4428 14 42.3236 14 51.9186C14 76.2192 33.6995 95.9186 58 95.9186C67.5951 95.9186 76.4758 92.8481 83.7104 87.6306ZM91.9113 79.9579C87.4951 81.2345 82.8274 81.9186 78 81.9186C50.3858 81.9186 28 59.5329 28 31.9186C28 27.0912 28.6841 22.4236 29.9607 18.0074C30.9754 14.4974 32.3642 11.1463 34.0814 8C30.7119 9.83892 27.5775 12.0543 24.7345 14.5896C14.466 23.7468 8 37.0776 8 51.9186C8 79.5329 30.3858 101.919 58 101.919C72.841 101.919 86.1718 95.4527 95.329 85.1841C97.8643 82.3411 100.08 79.2067 101.919 75.8372C98.7724 77.5544 95.4212 78.9433 91.9113 79.9579Z"
          fill="var(--clr-foreground)"
        />
      </symbol>
      <symbol id="rain" viewBox="0 0 95 110">
        <path
          d="M60 96C60 102.904 54.4036 108.5 47.5 108.5C40.5964 108.5 35 102.904 35 96C35 89.0964 47.5 62 47.5 62C47.5 62 60 89.0964 60 96Z"
          fill="var(--clr-foreground)"
        />
        <path
          d="M90 66C90 72.9036 84.4036 78.5 77.5 78.5C70.5964 78.5 65 72.9036 65 66C65 59.0964 77.5 32 77.5 32C77.5 32 90 59.0964 90 66Z"
          fill="var(--clr-foreground)"
        />
        <path
          d="M30 66C30 72.9036 24.4036 78.5 17.5 78.5C10.5964 78.5 5 72.9036 5 66C5 59.0964 17.5 32 17.5 32C17.5 32 30 59.0964 30 66Z"
          fill="var(--clr-foreground)"
        />
        <path
          d="M60 36C60 42.9036 54.4036 48.5 47.5 48.5C40.5964 48.5 35 42.9036 35 36C35 29.0964 47.5 2 47.5 2C47.5 2 60 29.0964 60 36Z"
          fill="var(--clr-foreground)"
        />
      </symbol>
      <symbol id="snow" viewBox="0 0 136 110">
        <circle
          cx="43"
          cy="20"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="73"
          cy="30"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="103"
          cy="40"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="53"
          cy="50"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="13"
          cy="10"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="23"
          cy="40"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="83"
          cy="60"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="113"
          cy="70"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="123"
          cy="100"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="63"
          cy="80"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="33"
          cy="70"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
        <circle
          cx="93"
          cy="90"
          r="6"
          stroke-width="4"
          fill="var(--clr-background)"
          stroke="var(--clr-foreground)"
        />
      </symbol>
      <symbol id="wind" viewBox="0 0 125 110">
        <path
          d="M67 73C67 86.8071 78.1929 98 92 98C105.807 98 117 86.8071 117 73C117 59.1929 105.807 48 92 48H7"
          fill="none"
          stroke="var(--clr-foreground)"
          stroke-width="8"
        />
        <path
          d="M87 23.5C87 16.5964 92.5964 11 99.5 11C106.404 11 112 16.5964 112 23.5C112 30.4036 106.404 36 99.5 36H22"
          fill="none"
          stroke="var(--clr-foreground)"
          stroke-width="8"
        />
        <path d="M22.5 60H69" stroke-width="8" fill="none" stroke="var(--clr-foreground)" />
      </symbol>
      <symbol id="fog" viewBox="0 0 110 110">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.24689 60C5.58927 63.4484 6.28201 66.7938 7.28902 70H102.711C103.718 66.7938 104.411 63.4484 104.753 60H5.24689ZM19.2929 90C16.3603 87.0085 13.8006 83.6501 11.6891 80H98.3109C96.1994 83.6501 93.6398 87.0085 90.7072 90H19.2929ZM33.1794 100C39.7732 103.203 47.1768 105 55 105C62.8232 105 70.2268 103.203 76.8206 100H33.1794ZM104.753 50C104.411 46.5516 103.718 43.2062 102.711 40H7.28902C6.28201 43.2062 5.58927 46.5516 5.24689 50H104.753ZM19.2928 20C16.3603 22.9915 13.8006 26.3499 11.6891 30H98.3109C96.1994 26.3499 93.6398 22.9915 90.7072 20H19.2928ZM76.8206 10C70.2268 6.79671 62.8232 5 55 5C47.1768 5 39.7732 6.79671 33.1794 10H76.8206Z"
          fill="var(--clr-foreground)"
        />
      </symbol>
      <symbol id="cloudy" viewBox="0 0 136 110">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 31C9 22.1634 16.1634 15 25 15H93C101.837 15 109 22.1634 109 31C109 39.8366 101.837 47 93 47C88.5817 47 85 50.5817 85 55C85 59.4183 88.5817 63 93 63H111C119.837 63 127 70.1634 127 79C127 87.8366 119.837 95 111 95H53C44.1634 95 37 87.8366 37 79C37 70.1634 44.1634 63 53 63H61C65.4183 63 69 59.4183 69 55C69 50.5817 65.4183 47 61 47H25C16.1634 47 9 39.8366 9 31Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 31C3 18.8497 12.8497 9 25 9H93C105.15 9 115 18.8497 115 31C115 43.1503 105.15 53 93 53C91.8954 53 91 53.8954 91 55C91 56.1046 91.8954 57 93 57H111C123.15 57 133 66.8497 133 79C133 91.1503 123.15 101 111 101H53C40.8497 101 31 91.1503 31 79C31 66.8497 40.8497 57 53 57H61C62.1046 57 63 56.1046 63 55C63 53.8954 62.1046 53 61 53H25C12.8497 53 3 43.1503 3 31ZM25 15C16.1634 15 9 22.1634 9 31C9 39.8366 16.1634 47 25 47H61C65.4183 47 69 50.5817 69 55C69 59.4183 65.4183 63 61 63H53C44.1634 63 37 70.1634 37 79C37 87.8366 44.1634 95 53 95H111C119.837 95 127 87.8366 127 79C127 70.1634 119.837 63 111 63H93C88.5817 63 85 59.4183 85 55C85 50.5817 88.5817 47 93 47C101.837 47 109 39.8366 109 31C109 22.1634 101.837 15 93 15H25Z"
          fill="var(--clr-foreground)"
        />
      </symbol>
      <symbol id="partly-sunny" viewBox="0 0 132 110">
        <circle cx="55" cy="55" r="50" fill="var(--base-clr-accent)"/>
        <path
          d="M32 68C32 59.1634 39.1634 52 48 52H106C114.837 52 122 59.1634 122 68V68C122 76.8366 114.837 84 106 84H48C39.1634 84 32 76.8366 32 68V68Z"
          fill="var(--base-clr-light)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 46H106C118.15 46 128 55.8497 128 68C128 80.1503 118.15 90 106 90H48C35.8497 90 26 80.1503 26 68C26 55.8497 35.8497 46 48 46ZM48 52C39.1634 52 32 59.1634 32 68C32 76.8366 39.1634 84 48 84H106C114.837 84 122 76.8366 122 68C122 59.1634 114.837 52 106 52H48Z"
          fill="var(--base-clr-dark)"
        />
      </symbol>
      <symbol id="partly-clear" viewBox="0 0 122 110">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.9186 75.8372C91.8138 79.7148 83.6642 81.9186 75 81.9186C47.3858 81.9186 25 59.5329 25 31.9186C25 23.2544 27.2038 15.1049 31.0814 8C15.542 16.4809 5 32.9686 5 51.9186C5 79.5329 27.3858 101.919 55 101.919C73.95 101.919 90.4378 91.3766 98.9186 75.8372Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80.7104 87.6306C78.8322 87.8211 76.9271 87.9186 75 87.9186C44.0721 87.9186 19 62.8466 19 31.9186C19 29.9915 19.0975 28.0864 19.288 26.2083C14.0705 33.4428 11 42.3236 11 51.9186C11 76.2192 30.6995 95.9186 55 95.9186C64.5951 95.9186 73.4758 92.8481 80.7104 87.6306ZM88.9113 79.9579C84.4951 81.2345 79.8274 81.9186 75 81.9186C47.3858 81.9186 25 59.5329 25 31.9186C25 27.0912 25.6841 22.4236 26.9607 18.0074C27.9754 14.4974 29.3642 11.1463 31.0814 8C27.7119 9.83892 24.5775 12.0543 21.7345 14.5896C11.466 23.7468 5 37.0776 5 51.9186C5 79.5329 27.3858 101.919 55 101.919C69.841 101.919 83.1718 95.4527 92.329 85.1841C94.8643 82.3411 97.0797 79.2067 98.9186 75.8372C95.7724 77.5544 92.4212 78.9433 88.9113 79.9579Z"
          fill="var(--clr-foreground)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37 51.1695C37 45.553 41.553 41 47.1695 41H90.3898C96.0063 41 100.559 45.553 100.559 51.1695C100.559 56.7859 96.0063 61.339 90.3898 61.339C87.5816 61.339 85.3051 63.6155 85.3051 66.4237C85.3051 69.2283 87.5757 71.5026 90.3789 71.5085L90.3799 71.5085L101.83 71.5085C107.447 71.5085 112 76.0615 112 81.678C112 87.2944 107.447 91.8475 101.831 91.8475H64.9661C59.3497 91.8475 54.7966 87.2944 54.7966 81.678C54.7966 76.0615 59.3496 71.5085 64.9661 71.5085L70.0608 71.5085C70.0611 71.5085 70.0614 71.5085 70.0618 71.5085C72.865 71.5026 75.1356 69.2283 75.1356 66.4237C75.1356 63.6155 72.8591 61.339 70.0508 61.339H47.1695C41.553 61.339 37 56.7859 37 51.1695Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31 51.1695C31 42.2393 38.2393 35 47.1695 35H90.3898C99.32 35 106.559 42.2393 106.559 51.1695C106.559 57.4008 103.035 62.8088 97.87 65.5085H101.83C110.761 65.5085 118 72.7478 118 81.678C118 90.6081 110.761 97.8475 101.831 97.8475H64.9661C56.0359 97.8475 48.7966 90.6081 48.7966 81.678C48.7966 75.4467 52.3214 70.0387 57.4859 67.339H47.1695C38.2393 67.339 31 60.0997 31 51.1695ZM70.0618 71.5085H70.0608H64.9661C59.3496 71.5085 54.7966 76.0615 54.7966 81.678C54.7966 87.2944 59.3497 91.8475 64.9661 91.8475H101.831C107.447 91.8475 112 87.2944 112 81.678C112 76.0615 107.447 71.5085 101.83 71.5085H90.3799H90.3789C87.5757 71.5026 85.3051 69.2283 85.3051 66.4237C85.3051 63.6155 87.5816 61.339 90.3898 61.339C96.0063 61.339 100.559 56.7859 100.559 51.1695C100.559 45.553 96.0063 41 90.3898 41H47.1695C41.553 41 37 45.553 37 51.1695C37 56.7859 41.553 61.339 47.1695 61.339H70.0508C72.8591 61.339 75.1356 63.6155 75.1356 66.4237C75.1356 69.2283 72.865 71.5026 70.0618 71.5085Z"
          fill="var(--clr-foreground)"
        />
      </symbol>

      <use :xlink:href="'#' + weatherMap.icon">
        <title id="weather-title">{{weatherMap.desc}}</title>
      </use>
    </svg>
    <span class="step-1">{{temperature}}&#176;F</span>
  )</span>
</template>

<script>
export default {
  data() {
    return {
      dataMap: {
        "clear-day": {
          icon: "sun",
          desc: "Sun",
          width: "2"
        },
        "clear-night": {
          icon: "clear",
          desc: "Clear",
          width: "2"
        },
        cloudy: {
          icon: "cloudy",
          desc: "Cloudy",
          width: "2.5"
        },
        fog: {
          icon: "fog",
          desc: "Fog",
          width: "2"
        },
        "partly-cloudy-day": {
          icon: "partly-sunny",
          desc: "Partly sunny",
          width: "2.5"
        },
        "partly-cloudy-night": {
          icon: "partly-clear",
          desc: "Partly clear",
          width: "2.25"
        },
        sleet: {
          icon: "snow",
          desc: "Sleet",
          width: "2.25"
        },
        snow: {
          icon: "snow",
          desc: "Snow",
          width: "2.25"
        },
        rain: {
          icon: "rain",
          desc: "Rain",
          width: "1.75"
        },
        wind: {
          icon: "wind",
          desc: "Wind",
          width: "2.25"
        }
      }
    };
  },
  computed: {
    temperature: function() {
      return Math.round(this.darksky.currently.temperature);
    },
    weatherMap: function() {
      return this.dataMap[this.darksky.currently.icon];
    }
  },
  props: ['darksky'],
};
</script>

<style>
.weather { white-space: nowrap; }

.weather, .weather span { font-weight: var(--body-weight); }

.current-weather {
  position: absolute;
  top: .5rem;
  left: .5rem;
}

.weather-svg {
  max-height: 1.75em;
  vertical-align: text-bottom;
}
</style>
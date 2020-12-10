<template>
  <span v-if="here" class="step-1 weather">
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
          d="M33 29C33 20.1634 40.1634 13 49 13H107C115.837 13 123 20.1634 123 29V29C123 37.8366 115.837 45 107 45H49C40.1634 45 33 37.8366 33 29V29Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49 7H107C119.15 7 129 16.8497 129 29C129 41.1503 119.15 51 107 51H49C36.8497 51 27 41.1503 27 29C27 16.8497 36.8497 7 49 7ZM49 13C40.1634 13 33 20.1634 33 29C33 37.8366 40.1634 45 49 45H107C115.837 45 123 37.8366 123 29C123 20.1634 115.837 13 107 13H49Z"
          fill="var(--clr-foreground)"
        />
        <path
          d="M13 54C13 45.1634 20.1634 38 29 38H87C95.8366 38 103 45.1634 103 54V54C103 62.8366 95.8366 70 87 70H29C20.1634 70 13 62.8366 13 54V54Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 32H87C99.1503 32 109 41.8497 109 54C109 66.1503 99.1503 76 87 76H29C16.8497 76 7 66.1503 7 54C7 41.8497 16.8497 32 29 32ZM29 38C20.1634 38 13 45.1634 13 54C13 62.8366 20.1634 70 29 70H87C95.8366 70 103 62.8366 103 54C103 45.1634 95.8366 38 87 38H29Z"
          fill="var(--clr-foreground)"
        />
        <path
          d="M33 81C33 72.1634 40.1634 65 49 65H107C115.837 65 123 72.1634 123 81V81C123 89.8366 115.837 97 107 97H49C40.1634 97 33 89.8366 33 81V81Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49 59H107C119.15 59 129 68.8497 129 81C129 93.1503 119.15 103 107 103H49C36.8497 103 27 93.1503 27 81C27 68.8497 36.8497 59 49 59ZM49 65C40.1634 65 33 72.1634 33 81C33 89.8366 40.1634 97 49 97H107C115.837 97 123 89.8366 123 81C123 72.1634 115.837 65 107 65H49Z"
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
          d="M35 66.5C35 59.5964 40.5716 54 47.4444 54H92.5556C99.4284 54 105 59.5964 105 66.5V66.5C105 73.4036 99.4284 79 92.5556 79H47.4444C40.5716 79 35 73.4036 35 66.5V66.5Z"
          fill="var(--clr-background)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M47.4444 48H92.5556C102.767 48 111 56.308 111 66.5C111 76.692 102.767 85 92.5556 85H47.4444C37.2327 85 29 76.692 29 66.5C29 56.308 37.2327 48 47.4444 48ZM47.4444 54C40.5716 54 35 59.5964 35 66.5C35 73.4036 40.5716 79 47.4444 79H92.5556C99.4284 79 105 73.4036 105 66.5C105 59.5964 99.4284 54 92.5556 54H47.4444Z"
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
      icons: {
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
      },
      hereIconMap: {
        sunny: "clear-day",
        hazy_sunshine: "clear-day",
        cw_no_report_icon: "clear-day",
        clear: "clear-night",
        night_clear: "clear-night",
        passing_clounds: "cloudy",
        scattered_clouds: "cloudy",
        increasing_cloudiness: "cloudy",
        high_level_clouds: "cloudy",
        decreasing_cloudiness: "cloudy",
        high_clouds: "cloudy",
        cloudy: "cloudy",
        overcast: "cloudy",
        low_clouds: "cloudy",
        ice_fog: "fog",
        haze: "fog",
        smoke: "fog",
        low_level_haze: "fog",
        early_fog_followed_by_sunny_skies: "fog",
        early_fog: "fog",
        light_fog: "fog",
        fog: "fog",
        dense_fog: "fog",
        night_haze: "fog",
        night_smoke: "fog",
        night_low_level_haze: "fog",
        mostly_sunny: "partly-cloudy-day",
        more_sun_than_clouds: "partly-cloudy-day",
        a_mixture_of_sun_and_clouds: "partly-cloudy-day",
        breaks_of_sun_late: "partly-cloudy-day",
        afternoon_clouds: "partly-cloudy-day",
        morning_clouds: "partly-cloudy-day",
        partly_sunny: "partly-cloudy-day",
        more_clouds_than_sun: "partly-cloudy-day",
        mostly_clear: "partly-cloudy-day",
        partly_cloudy: "partly-cloudy-day",
        clearing_skies: "partly-cloudy-day",
        broken_clouds: "partly-cloudy-day",
        mostly_cloudy: "partly-cloudy-day",
        night_decreasing_cloudiness: "partly-cloudy-night",
        night_clearing_skies: "partly-cloudy-night",
        night_high_level_clouds: "partly-cloudy-night",
        night_high_clouds: "partly-cloudy-night",
        night_mostly_clear: "partly-cloudy-night",
        night_passing_clouds: "partly-cloudy-night",
        night_scattered_clouds: "partly-cloudy-night",
        night_partly_cloudy: "partly-cloudy-night",
        night_afternoon_clouds: "partly-cloudy-night",
        night_morning_clouds: "partly-cloudy-night",
        night_broken_clouds: "partly-cloudy-night",
        night_mostly_cloudy: "partly-cloudy-night",
        rain_early: "rain",
        heavy_rain_early: "rain",
        thundershowers: "rain",
        scattered_showers: "rain",
        a_few_showers: "rain",
        light_showers: "rain",
        passing_showers: "rain",
        rain_showers: "rain",
        showers: "rain",
        snow_changing_to_rain: "rain",
        an_icy_mix_changing_to_rain: "rain",
        night_scattered_showers: "rain",
        night_a_few_showers: "rain",
        night_light_showers: "rain",
        night_passing_showers: "rain",
        night_rain_showers: "rain",
        night_sprinkles: "rain",
        night_showers: "rain",
        light_freezing_rain: "rain",
        freezing_rain: "rain",
        heavy_rain: "rain",
        lots_of_rain: "rain",
        tons_of_rain: "rain",
        heavy_rain_late: "rain",
        flash_floods: "rain",
        flood: "rain",
        drizzle: "rain",
        sprinkles: "rain",
        light_rain: "rain",
        sprinkles_early: "rain",
        light_rain_early: "rain",
        sprinkles_late: "rain",
        light_rain_late: "rain",
        rain: "rain",
        numerous_showers: "rain",
        showery: "rain",
        showers_early: "rain",
        rain_early: "rain",
        showers_late: "rain",
        rain_late: "rain",
        hail: "snow",
        sleet: "snow",
        light_mixture_of_precip: "snow",
        icy_mix: "snow",
        mixture_of_precip: "snow",
        heavy_mixture_of_precip: "snow",
        snow_changing_to_an_icy_mix: "snow",
        an_icy_mix_changing_to_snow: "snow",
        rain_changing_to_snow: "snow",
        rain_changing_to_an_icy_mix: "snow",
        light_icy_mix_early: "snow",
        icy_mix_early: "snow",
        light_icy_mix_late: "snow",
        icy_mix_late: "snow",
        snow_rain_mix: "snow",
        scattered_flurries: "snow",
        snow_flurries: "snow",
        light_snow_showers: "snow",
        snow_showers: "snow",
        light_snow: "snow",
        flurries_early: "snow",
        snow_showers_early: "snow",
        light_snow_early: "snow",
        flurries_late: "snow",
        snow_showers_late: "snow",
        light_snow_late: "snow",
        snow: "snow",
        moderate_snow: "snow",
        snow_early: "snow",
        snow_late: "snow",
        heavy_snow: "snow",
        heavy_snow_early: "snow",
        heavy_snow_late: "snow",
        snowstorm: "snow",
        blizzard: "snow",
        strong_thunderstorms: "wind",
        severe_thunderstorms: "wind",
        thunderstorms: "wind",
        tstorms_early: "wind",
        isolated_tstorms_late: "wind",
        scattered_tstorms_late: "wind",
        tstorms_late: "wind",
        tstorms: "wind",
        widely_scattered_tstorms: "wind",
        isolated_tstorms: "wind",
        a_few_tstorms: "wind",
        scattered_tstorms: "wind",
        night_widely_scattered_tstorms: "wind",
        night_isolated_tstorms: "wind",
        night_a_few_tstorms: "wind",
        night_scattered_tstorms: "wind",
        night_tstorms: "wind",
        tornado: "wind",
        tropical_storm: "wind",
        hurricane: "wind",
        sandstorm: "wind",
        duststorm: "wind"
      }
    };
  },
  computed: {
    temperature: function() {
      return Math.round(this.here.temperature);
    },
    weatherMap: function() {
      const hereIconName = this.here.iconName

      return this.icons[this.hereIconMap[hereIconName]];
    }
  },
  props: ['here'],
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
var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {
        searchWeather() {
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (response) {
                    console.log(response.data)
                    that.weatherList = response.data.data.forecast;
                }, function (err) {
                    console.log(err)
                })
        },
        changeCity(city) {
            this.city = city;
            this.searchWeather();
        }
    }
})
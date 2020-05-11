var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {
        searchWeather() {
            var that = this;
            axios.get("http://47.104.252.155:7011/weather/forecast/" + this.city)
                .then(function (response) {
                    console.log(response.data)
                    that.weatherList = response.data.daily_forecast;
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
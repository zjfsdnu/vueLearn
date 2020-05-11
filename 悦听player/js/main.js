var app = new Vue({
    el: "#app",
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
        picUrl: "",
        hotComments: [],
        isPlaying: false,
        isShow: false,
        mvUrl: ""
    },
    methods: {
        searchMusic() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    // console.log(response.data)
                    that.musicList = response.data.result.songs;
                }, function (err) {
                    console.log(err)
                })
        },
        playMusic(id) {
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + id)
                .then(function (response) {
                    // console.log(response.data)
                    that.musicUrl = response.data.data[0].url;
                    that.hide();
                }, function (err) {
                    console.log(err)
                })
            axios.get("https://autumnfish.cn/song/detail?ids=" + id)
                .then(function (response) {
                    // console.log(response.data)
                    that.picUrl = response.data.songs[0].al.picUrl;
                }, function (err) {
                    console.log(err)
                })
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
                .then(function (response) {
                    console.log(response.data)
                    that.hotComments = response.data.hotComments;
                }, function (err) {

                })
        },
        play(flag) {
            this.isPlaying = flag
        },
        playMV(mvid) {
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid)
                .then(function (response) {
                    // console.log(response.data)
                    that.isShow = true
                    that.mvUrl = response.data.data.url;
                }, function (err) {
                    console.log(err)
                })
        },
        hide() {
            this.isShow = false;
            this.mvUrl = "";
        }
    }
})
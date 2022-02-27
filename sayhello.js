(function (window) {
    var hellospeaker = {};

    var sayword = "Hello";

    hellospeaker.speak = function (name) {
        console.log(sayword + " " + name);
    };

    window.hellospeaker = hellospeaker;

})(window);
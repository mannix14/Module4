var names = ["Johnny", "Sandi", "Adel", "Eli", "Allen", "Jerry", "Larry", "Bob", "Angel", "Jim"];

for (var i = 0; i < names.length; i++) {

    var friends = names[i].charAt(0).toLowerCase();

    if (friends === 'j') {
        byespeaker.speak(names[i]);
    } else {
        hellospeaker.speak(names[i]);
    }
};
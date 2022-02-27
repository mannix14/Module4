var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

    var friends = names[i].charAt(0).toLowerCase();

    if (friends === 'j') {
        byespeaker.speak(names[i]);
    } else {
        hellospeaker.speak(names[i]);
    }
};

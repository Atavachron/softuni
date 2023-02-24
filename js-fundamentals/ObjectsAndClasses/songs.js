function printSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(input.shift());
    let type = input.pop();
    let songsArr = [];

    for (let i = 0; i < songsCount; i++) {
        let tokens = input[i].split('_');
        let [typeList, name, time] = tokens;

        let newSong = new Song(typeList, name, time);
        songsArr.push(newSong);
    }

    if (type === 'all') {
        songsArr.forEach(song => console.log(song.name));
    } else {
        songsArr
            .filter(song => song.typeList === type)
            .forEach(song => console.log(song.name));
    }
}

printSongs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite',
]);

printSongs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater',
]);

printSongs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

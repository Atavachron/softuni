function calculateGramophoneRotations(band, album, song) {
    let songDurationInSeconds = (album.length * band.length * song.length) / 2;

    let rotations = Math.ceil(songDurationInSeconds / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

calculateGramophoneRotations('Black Sabbath', 'Paranoid', 'War Pigs');
calculateGramophoneRotations('Rammstein', 'Sehnsucht', 'Engel');

function createAssemblyLine() {
    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio(obj) {
            obj.currentTrack = {
                name: null,
                artist: null,
            };
            obj.nowPlaying = function () {
                if (this.currentTrack !== null) {
                    console.log(
                        `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
                    );
                }
            };
        },
        hasParktronic(obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        },
    };
}

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

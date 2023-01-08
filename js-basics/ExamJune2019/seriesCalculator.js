function solve(input) {
    let movieName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let singleEpisodeWithAds = episodeDuration + episodeDuration * 0.2;
    let singleSeasonDuration = singleEpisodeWithAds * episodesCount + 10;
    let totalDuration = singleSeasonDuration * seasonsCount;

    console.log(
        `Total time needed to watch the ${movieName} series is ${totalDuration} minutes.`
    );
}

solve(['Game of Thrones', '7', '10', '50']);
solve(['Riverdale', '3', '21', '45']);

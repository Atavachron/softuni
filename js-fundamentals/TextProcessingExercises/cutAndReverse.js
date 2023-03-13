function cutAndReverse(input) {
    let firstHalf = input.slice(0, input.length / 2);
    let secondHalf = input.slice(input.length / 2);

    let firstReversed = firstHalf.split('').reverse().join('');
    let secondReversed = secondHalf.split('').reverse().join('');

    console.log(firstReversed);
    console.log(secondReversed);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

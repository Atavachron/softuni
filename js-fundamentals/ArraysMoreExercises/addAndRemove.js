function addAndRemove(commands) {
    let num = 1;
    let newArr = [];

    for (let command of commands) {
        switch (command) {
            case 'add':
                newArr.push(num);
                break;
            case 'remove':
                newArr.pop();
                break;
        }
        num++;
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);

function browserHistory(obj, arr) {
    for (let el of arr) {
        let [command, website] = el.split(' ');
        if (command === 'Open') {
            obj['Open Tabs'].push(website);
            obj['Browser Logs'].push(el);
        } else if (command === 'Close' && obj['Open Tabs'].includes(website)) {
            obj['Open Tabs'].splice(obj['Open Tabs'].indexOf(website), 1);
            obj['Browser Logs'].push(el);
            obj['Recently Closed'].push(website);
        } else if (el === 'Clear History and Cache') {
            // obj['Browser Name'] = '';
            obj['Open Tabs'] = [];
            obj['Browser Logs'] = [];
            obj['Recently Closed'] = [];
        }
    }

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

browserHistory(
    {
        'Browser Name': 'Google Chrome',
        'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],

        'Recently Closed': ['Yahoo', 'Gmail'],

        'Browser Logs': [
            'Open YouTube',
            'Open Yahoo',
            'Open Google Translate',
            'Close Yahoo',
            'Open Gmail',
            'Close Gmail',
            'Open Facebook',
        ],
    },

    ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);

browserHistory(
    {
        'Browser Name': 'Mozilla Firefox',
        'Open Tabs': ['YouTube'],

        'Recently Closed': ['Gmail', 'Dropbox'],

        'Browser Logs': [
            'Open Gmail',

            'Close Gmail',
            'Open Dropbox',

            'Open YouTube',
            'Close Dropbox',
        ],
    },

    ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);

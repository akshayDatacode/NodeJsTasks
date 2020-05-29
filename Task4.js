// Return JSON object from nodejs application

var http = require('http');
var url = require('url');

var List = [
    {
        id: 1,
        taskTitle: 'Task 1',
        taskDescription: 'Task 1 description',
        deadline: 'yesterday'
    },
    {
        id: 2,
        taskTitle: 'Task 2',
        taskDescription: 'Task 2 description',
        deadline: 'yesterday'
    },
    {
        id: 3,
        taskTitle: 'Task 3',
        taskDescription: 'Task 3 description',
        deadline: 'today'
    },
    {
        id: 4,
        taskTitle: 'Task 4',
        taskDescription: 'Task 4 description',
        deadline: 'tomorrow'
    },
    {
        id: 5,
        taskTitle: 'Task 5',
        taskDescription: 'Task 4 description',
        deadline: 'tomorrow'
    }
];

var server = http.createServer((req, res) => {
    var queryStrings = url.parse(req.url, true).query;
    var deadline = queryStrings.deadline;

    if (deadline === undefined) {
        var stringResponse = JSON.stringify(List);
        res.write(stringResponse);
        res.end();
    }

    res.writeHead(500);
    res.end();
});

server.listen(8080);
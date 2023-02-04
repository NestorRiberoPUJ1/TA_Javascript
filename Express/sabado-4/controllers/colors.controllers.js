let Colors = [
    { "id": 1, "name": "RED" },
    { "id": 2, "name": "BLUE" },
    { "id": 3, "name": "GREEN" },
    { "id": 4, "name": "BLACK" },
]

module.exports.getColors = (req, res) => {
    res.json(Colors);
};

module.exports.createColor = (req, res) => {
    const body = req.body;
    Colors.push(body);
    res.json(Colors);
}
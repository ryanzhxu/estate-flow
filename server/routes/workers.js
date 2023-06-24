const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

let workers = [
    {
        id: '0', name: "Worker1", email: "1231@123.com", phone: "(778) 123-4561", address: "123 1st St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '1', name: "Worker2", email: "1232@123.com", phone: "(778) 123-4561", address: "123 2nd St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '2', name: "Worker3", email: "1233@123.com", phone: "(778) 123-4561", address: "123 3rd St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '3', name: "Worker4", email: "1234@123.com", phone: "(778) 123-4561", address: "123 4th St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '4', name: "Worker5", email: "1235@123.com", phone: "(778) 123-4561", address: "123 5th St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    },
    {
        id: '5', name: "Worker6", email: "1235@123.com", phone: "(778) 123-4561", address: "123 6th St., Vancouver",
        hRate: 40, trades: "Electrician", pCode: "V6T 1Z4",
        imageURL: "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp",
    }
]

router.get('/', (req, res, next) => {
    return res.send(workers);
});
router.post('/', function (req, res, next) {
    if (!req.body.name) {return res.status(400).send({ message: 'User must have a name!' })}
    const worker = { id: uuid(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        hRate: req.body.hRate,
        trades: req.body.trades,
        pCode: req.body.pCode,
        imageURL: req.body.imageURL
    };
    workers.push(worker);
    return res.send(worker);
});
router.delete('/', function (req, res, next) {
    const workerId = req.body.id;
    workers = workers.filter(car => car.id !== workerId);
    return res.send(workers);
});
router.put('/:userId', function(req, res, next){
    const worker = { id: req.params.userId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        hRate: req.body.hRate,
        trades: req.body.trades,
        pCode: req.body.pCode,
        imageURL: req.body.imageURL
    };
    const newWorkers = [...workers];
    const index = workers.findIndex(workers => workers.id === req.params.userId);
    newWorkers[index] = worker;
    workers = newWorkers;
    return res.send(worker);
});
router.get('/:workerId', (req, res, next) => {
    const foundWorker = workers.find(workers => workers.id === req.params.workerId);
    if (!foundWorker) return res.status(404).send({ message: 'User not found 46 404' });
    return res.send(foundWorker);
});



module.exports = router;
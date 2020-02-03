var fs = require('fs');
const _file = './src/data/contacts.json';
const requestResult = { status: 'falha', message: 'Falha ao carregar as agenda telefônica.', isTest: false, item: {} };
exports.deleteTelephone = async (req, res) => {
    try {
        fs.readFile(_file, 'utf8', function (err, data) {
            if (err) {
                requestResult.status = 'falha';
                requestResult.message = 'Falha ao carregar as agenda telefônica.';
                requestResult.item = err;
                res.json(requestResult);
            } else {
                var obj = JSON.parse(data);
                var contact = obj.contacts.filter(u => u.device_uuid == req.query.device_uuid);
                let index = obj.contacts.indexOf(contact);
                if (index > 0) {
                    obj.contacts.splice(index, 1);
                    fs.writeFile(_file, JSON.stringify(obj), function (err) {
                        if (err) {
                            // var response = { status: 'falha', resultado: err };
                            requestResult.status = 'falha';
                            requestResult.message = 'Falha ao excluído registro.';
                            requestResult.item = err;
                            res.json(requestResult);
                        } else {
                            // var response = { status: 'sucesso', resultado: 'Registro excluído com sucesso.' };
                            //res.json(response);
                            requestResult.status = 'sucesso';
                            requestResult.message = 'Registro excluído com sucesso.';
                            requestResult.item = {};
                            res.json(requestResult);
                        }
                    })
                } else {
                    requestResult.status = 'falha';
                    requestResult.message = 'Nenhum registro foi encontrado';
                    requestResult.item = {};
                    res.json(requestResult);
                };

            }
        });
    } catch (e) {
        requestResult.status = 'falha';
        requestResult.message = 'Falha ao carregar as agenda telefônica.';
        requestResult.item = e;
        res.status(500).send(requestResult);
    }
};
exports.updateTelephone = async (req, res) => {
    try {
        fs.readFile(_file, 'utf8', function (err, data) {
            if (err) {
                requestResult.status = 'falha';
                requestResult.message = 'Falha ao carregar as agenda telefônica.';
                requestResult.item = err;
                res.json(requestResult);
            } else {
                var obj = JSON.parse(data);
                var contact = obj.contacts.filter(u => u.device_uuid == req.body.device_uuid);
                let index = obj.contacts.indexOf(contact);
                if (index > 0) {
                    obj.contacts.splice(index, 1);
                    obj.contacts.push(req.body);
                    contact = obj.contacts.filter(u => u.device_uuid == req.body.device_uuid);
                    fs.writeFile(_file, JSON.stringify(obj), function (err) {
                        if (err) {
                            requestResult.status = 'falha';
                            requestResult.message = 'Falha ao excluído registro.';
                            requestResult.item = err;
                            res.json(requestResult);
                        } else {
                            requestResult.status = 'sucesso';
                            requestResult.message = 'Registro editado com sucesso.';
                            requestResult.item = contact;
                            res.json(requestResult);
                        }
                    });
                } else {
                    requestResult.status = 'falha';
                    requestResult.message = 'Nenhum registro foi encontrado';
                    requestResult.item = {};
                    res.json(requestResult);
                }
            }
        });
    } catch (e) {
        requestResult.status = 'falha';
        requestResult.message = 'Falha ao carregar as agenda telefônica.';
        requestResult.item = e;
        res.status(500).send(requestResult);
    }
};

exports.listTelephone = async (req, res) => {
    try {
        
        fs.readFile(_file, 'utf8', function (err, data) {
            if (err) {
                requestResult.status = 'falha';
                requestResult.message = 'Falha ao carregar as agenda telefônica.';
                requestResult.item = err;
                res.json(requestResult);
            } else {
                var obj = JSON.parse(data);
                requestResult.status = 'falha';
                requestResult.message = 'Nenhum usuário foi encontrado ';
                requestResult.item = {};
                var result = obj.contacts.filter(u => u.device_uuid == req.query.device_uuid)[0]
                if (result != undefined && result != null && result.device_uuid == req.query.device_uuid) {
                    requestResult.status = 'sucesso';
                    requestResult.message = 'Usuário encontrado';
                    requestResult.item = result;
                }
                res.json(requestResult);
            }
        })
    } catch (e) {
        requestResult.status = 'falha';
        requestResult.message = 'Falha ao carregar as agenda telefônica.';
        requestResult.item = e;
        res.status(500).send(requestResult);
    }
};


exports.createTelephone = async (req, res) => {
    try {

        fs.readFile(_file, 'utf8', function (err, data) {
            if (err) {
                requestResult.status = 'falha';
                requestResult.message = 'Falha ao carregar as agenda telefônica.'
                requestResult.item = err;
            } else {
                var obj = JSON.parse(data);
                //req.body.id = obj.contacts.length + 1;

                obj.contacts.push(req.body);
                var contact = obj.contacts.filter(u => u.device_uuid == req.body.device_uuid);
                fs.writeFile(_file, JSON.stringify(obj), function (err) {
                    if (err) {
                        requestResult.status = 'falha';
                        requestResult.message = 'Falha ao carregar as agenda telefônica.'
                        requestResult.item = err;
                    } else {
                        requestResult.status = 'sucesso';
                        requestResult.message = 'Registro incluso com sucesso.';
                        requestResult.item = contact;
                        res.json(requestResult);
                    }
                });
            }
        });
    } catch (e) {
        requestResult.status = 'falha';
        requestResult.message = 'Falha ao carregar as agenda telefônica.';
        requestResult.item = e;
        res.status(500).send(requestResult);
    }
};
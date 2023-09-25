const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('YourController', () => {
    it('should add a new user', (done) => {
        const newUser = {
            id: 1,
            name: 'John Doe',
            address: '123 Main St'
        };

        chai.request(app)
            .post('/users')
            .send(newUser)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
const request = require('supertest');
const app = require('../../index');
const User = require('../../models/User');

jest.mock('../../models/User', () => ({
    find: jest.fn(),
    findById: jest.fn()
}));

describe('GET /user', () => {
    beforeEach(() => {
        // Configurando o comportamento do mock para o método find
        User.find.mockResolvedValue([
            { _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 },
            { _id: '2', name: 'Alisson', lastname: 'Ferro', salary: 1234 },
            { _id: '3', name: 'Dom', lastname: 'Ramalho', salary: 1234 },
        ]);
    });
    afterEach(() => {
        // Limpando o mock após cada teste
        jest.clearAllMocks();
    });
    afterAll(() => {
        app.close();
    });
    it('Deve retornar um array com 3 elementos', async () => {
        const res = await request(app).get('/api/user');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(3);
    });
})

describe('GET/:id', () => {
    beforeEach(() => {
        // Configurando o comportamento do mock para o método find
        
    });
    afterEach(() => {
        // Limpando o mock após cada teste
        jest.clearAllMocks();
    });
    afterAll(() => {
        app.close();
    });
    it('Deve retornar o status 200 e retornar um usuario', async () =>{
        User.findById.mockResolvedValue({ _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 });
        const res = await request(app).get('/api/user/1');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Queila')
        expect(User.findById).toBeCalled()
    }),
    it('Deve retornar o status 404 e retornar um usuario', async () =>{
        User.findById.mockResolvedValue(null);
        const res = await request(app).get('/api/user/0');
        expect(res.status).toBe(404);
        expect(User.findById).toBeCalled()
    });
    
})

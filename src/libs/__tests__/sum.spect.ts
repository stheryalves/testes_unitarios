import { sum } from "../sum";

describe('libs suite', () => {
    it('deve somar 1 + 2 e receber 3 como resposta', () => {
        expect(sum(1, 2)).toBe(3);
    })
})
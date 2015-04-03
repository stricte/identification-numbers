describe('index', function () {

    var indexModule = require('../../lib/identification-numbers/index.js');

    it('should export nip', function () {
        expect(indexModule.nip).toBeDefined();
    });

    it('should export pesel', function () {
        expect(indexModule.pesel).toBeDefined();
    })

});
describe('Stock Lookup', () => {
    beforeEach(() => {
        browser.get('stock');
    });

    it('should have correct heading', () => {
        expect(element(by.css('.page-header')).getText())
            .toEqual('Finance');
    });
});
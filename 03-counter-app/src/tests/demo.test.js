describe('Test in demo.test.js', () => {
    
    test('strings must be equals', () => {
    
        // Arrange
        const message = 'Hello world';
    
        // Act
        const message2 = `Hello world`;
    
        // Assert
        expect(message).toBe(message2); // ===
    })
});



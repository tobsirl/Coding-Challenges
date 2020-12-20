describe('domainType', () => {
  test('returns list of domain types', () => {
    // arrange
    const domains = ['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'];

    // act
    const result = domainType(domains);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toEqual([
      'organization',
      'commercial',
      'network',
      'information',
    ]);
  });
});

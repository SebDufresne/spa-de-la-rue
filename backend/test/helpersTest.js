const { assert, expect } = require('chai');
const { generateDateList, getDaysIncrement } = require('../lib/helpers');

describe('#generateDateList', function() {
  it(`Returns empty array if no clinic dates in beetween`, function() {
    const start_date = '2019-09-20T04:00:00.000Z';
    const end_date = '2019-09-23T04:00:00.000Z';
    const day_of_week = 3;
    const frequency = 'weekly';
    const expectedOutput = [];
    assert.deepEqual(generateDateList(start_date, end_date, frequency, day_of_week),expectedOutput);
  });
  it(`Returns array of dates, for weekly`, function() {
    const start_date = '2019-09-04T04:00:00.000Z';
    const end_date = '2019-09-25T04:00:00.000Z';
    const day_of_week = 3;
    const frequency = 'weekly';
    const expectedOutput = [
      "2019-09-04",
      "2019-09-11",
      "2019-09-18",
      "2019-09-25"
    ];
    assert.deepEqual(generateDateList(start_date, end_date, frequency, day_of_week),expectedOutput);
  });
  it(`Returns array of dates, for bi-weekly`, function() {
    const start_date = '2019-09-04T04:00:00.000Z';
    const end_date = '2019-09-25T04:00:00.000Z';
    const day_of_week = 3;
    const frequency = 'bi-weekly';
    const expectedOutput = [
      "2019-09-04",
      "2019-09-18",
    ];
    assert.deepEqual(generateDateList(start_date, end_date, frequency, day_of_week),expectedOutput);
  });
});

describe('#getDaysIncrement', function() {
  it(`Returns 0 if once`, function() {
    const frequency = 'once';
    const expectedOutput = 0;
    assert.strictEqual(getDaysIncrement(frequency),expectedOutput);
  });
  it(`Returns 1 if daily`, function() {
    const frequency = 'daily';
    const expectedOutput = 1;
    assert.strictEqual(getDaysIncrement(frequency),expectedOutput);
  });
  it(`Returns 7 if weekly`, function() {
    const frequency = 'weekly';
    const expectedOutput = 7;
    assert.strictEqual(getDaysIncrement(frequency),expectedOutput);
  });
  it(`Returns 14 if bi-weekly`, function() {
    const frequency = 'bi-weekly';
    const expectedOutput = 14;
    assert.strictEqual(getDaysIncrement(frequency),expectedOutput);
  });
});

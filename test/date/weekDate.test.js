import { week, weeks, weeksInMonth, weeksInYear, weeksOfYear } from '../../js/date/weekDate.js'

test('Get week numbers', () => {
  expect(week(2021, 6, 21)).toBe(25)
})

test('Get the week and the date in that week', () => {
  expect(weeks(2021, 25, 'YYYY-MM-DD')).toEqual([
    '2021-06-20',
    '2021-06-21',
    '2021-06-22',
    '2021-06-23',
    '2021-06-24',
    '2021-06-25',
    '2021-06-26'
  ])
})

test('Get week in one month', () => {
  expect(weeksInMonth(2022, 1)).toEqual([ '1', '2', '3', '4', '5' ])
})

test('Get weeks in one year', () => {
  expect(weeksInYear(2021)).toBe(52)
})

test('Get week dates in one year by week', () => {
  //console.log(weeksOfYear(2021, 26, 'YYYY-MM-DD'))
  expect(weeksOfYear(2021, 26, 'DD')).toEqual({
    '1': [ '03', '09' ], '2': [ '10', '16' ], '3': [ '17', '23' ],
    '4': [ '24', '30' ], '5': [ '31', '06' ], '6': [ '07', '13' ],
    '7': [ '14', '20' ], '8': [ '21', '27' ], '9': [ '28', '06' ], 
    '10': [ '07', '13' ], '11': [ '14', '20' ], '12': [ '21', '27' ],
    '13': [ '28', '03' ], '14': [ '04', '10' ], '15': [ '11', '17' ],
    '16': [ '18', '24' ], '17': [ '25', '01' ], '18': [ '02', '08' ],
    '19': [ '09', '15' ], '20': [ '16', '22' ], '21': [ '23', '29' ],
    '22': [ '30', '05' ], '23': [ '06', '12' ], '24': [ '13', '19' ],
    '25': [ '20', '26' ], '26': [ '27', '03' ]
  })
})

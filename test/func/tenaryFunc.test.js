import { ternary } from '../../js/func/ternaryFunc.js'

test('Ternary operator custom method or function', () => {
  let val1 = ''
  let val2 = ''
  
  ternary(
    () => val1 === '' && val2 === '',
    () => {val1 = 'apple'; val2 = 'manggo';},
    () => {val1 = 'durian'; val2 = 'rambutan';}
  )
  
  expect(val1 +' and '+ val2).toEqual('apple and manggo')
})

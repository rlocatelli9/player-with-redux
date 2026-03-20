import reducers from '../../reducers'

test('reducers', () => {
  let state;
  state = reducers({todo:['Estudar mais!','NOVO TO-DO']}, {type:'todo/add',payload:'Oloquinho meu'});
  expect(state).toEqual({todo:['Estudar mais!','NOVO TO-DO','Oloquinho meu']});
});

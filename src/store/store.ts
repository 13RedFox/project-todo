import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducers';

export const store = createStore(rootReducer);

// export const db: any[] = [
//   {
//     name: 'Покупки',
//     id: 1,
//     isActive: false,
//     color: '#42b883',
//     todos: [
//       { name: 'Изучить JavaScript1', id: 1, isDone: false },
//       { name: 'Изучить JavaScript2', id: 2, isDone: false },
//     ],
//   },
// ];

import { Database } from './database'

export function Reducer(state, action) {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'moins':
      return { count: state.count - 1 };
    default :
      throw new Error(`this action "${action.type}" don't existe`)
  }
}

export function SaveReducer(state, action){
  switch (action.type) {
    case 'save':
      const value = { key: 'Value'}
      return Database.push(value);
    
    default :
      throw new Error(`this action "${action.type}" don't existe`)
  }
}
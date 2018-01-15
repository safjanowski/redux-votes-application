const mocks = require('../mocks')
const createStore = require('./index')
const expect = require('chai').expect

const getNoteById = (store, id) => store.getState().find(note => note.id === id)

context(`THUMB_UP`, () => {
  let store
  
  beforeEach(() => {
    store = createStore(mocks)
  })

  it('single dispatch `votes` to with value `1`', () => {
    const id = 'b5e558f0-999b-40b7-b387-4f60fa421815'
    
    store.dispatch({
      type: 'THUMB_UP',
      id
    })

    expect(getNoteById(store, id)).to.have.property('votes').to.equal(1)
  })

  it('double dispatches updates `votes` with value `2`', () => {
    const id = 'b5e558f0-999b-40b7-b387-4f60fa421815'
    
    store.dispatch({
      type: 'THUMB_UP',
      id
    })

    store.dispatch({
      type: 'THUMB_UP',
      id
    })

    expect(getNoteById(store, id)).to.have.property('votes').to.equal(2)
  })
})
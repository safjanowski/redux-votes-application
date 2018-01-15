const mocks = require('../mocks')
const createStore = require('./index')
const expect = require('chai').expect


context(`THUMB_UP`, () => {
  let store
  
  beforeEach(() => {
    store = createStore(mocks)
  })

  it('updates votes with +1', () => {
    store.dispatch({
      type: 'THUMB_UP',
      id: 'b5e558f0-999b-40b7-b387-4f60fa421815'
    })

    expect(store.getState().find(note => note.id === 'b5e558f0-999b-40b7-b387-4f60fa421815').votes).to.equal(1)
  })
})
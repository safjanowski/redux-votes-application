const mocks = require('../mocks')
const reducer = require('./index').reducer
const expect = require('chai').expect

context('reducer', () => {
  it('returns default state', () => {
    expect(reducer(undefined, {})).to.deep.equal([])
  })

  context(`THUMB_UP`, () => {
    const id = 'bd4587e3-4f69-4b20-8bfd-b0b15dfc449c'
    let state

    beforeEach(() => {
      state = [{
        votes: 0,
        id
      }]
    })

    it('updates `votes` with value `+1`', () => {
      const newState = reducer(state, {
        type: 'THUMB_UP',
        id
      })
      expect(newState.find(note => note.id === id)).to.have.property('votes').to.equal(1)
    })
  })
})
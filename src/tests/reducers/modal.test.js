import modalReducer from '../../reducers/modal';

test("should set TOGGLE_MODAL", () => {
    const action = { type: "TOGGLE_MODAL" };
    const state = modalReducer({}, action);
    expect(state.showModal).toBe(true);
});
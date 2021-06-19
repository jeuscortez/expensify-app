import { toggleModal } from '../../actions/modal';

test("should generate toggle object", () => {
    const action = toggleModal();
    expect(action).toEqual({
        type:"TOGGLE_MODAL"
    });
});
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { toggleModal } from '../actions/modal';
import ConfModal from './ConfModal';

export class EditExpensePage extends React.Component {
  constructor(props){
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  handleOpenModal () {
    this.props.toggleModal(this.props.showModal)
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.handleOpenModal}>Remove Expense</button>
        </div>
        <ConfModal 
          id={this.props.expense.id}
          historyPush={this.props.history.push}
        />
      </div>
    );
  }
};

// const mapStateToProps = (state, props) => ({
//   expense: state.expenses.find((expense) => expense.id === props.match.params.id)
// });

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
    showModal: state.modal.showModal
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  //startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  toggleModal: bool => dispatch(toggleModal(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

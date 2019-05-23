import { connect } from 'react-redux'
import { addProduct } from '../actions'
import AddProductForm from '../components/AddProductForm'

const mapDispatchToProps = {
    handleSubmit: addProduct
}

export default connect(null, mapDispatchToProps)(AddProductForm)
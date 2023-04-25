import PropTypes from 'prop-types'
import { Spinner } from 'flowbite-react'

const ButtonComponent = ({ loading, label, handleClick }) => {
  return (
    <button
      className={`${
        loading ? 'bg-slate-600' : 'bg-black'
      } text-white px-8 py-3 rounded-2xl w-44`}
      disabled={loading}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center gap-3">
        {loading && <Spinner size="md" className="" />}
        <span className="text-2xl">{label}</span>
      </div>
    </button>
  )
}
ButtonComponent.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string,
  handleClick: PropTypes.func
}

export default ButtonComponent

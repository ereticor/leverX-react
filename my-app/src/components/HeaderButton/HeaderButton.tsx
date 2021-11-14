import './headerbutton.scss';

const HeaderButton = ({type}: {type: string}) => {
  return (
    <button className={`head__btn btn ${type}`}></button>
  )
}

export default HeaderButton
import HeaderButton from '../../HeaderButton'

import userImg from '../../../assets/images/users/user1.png'

import './profileblock.scss'

const userName = "anna smith"

const LoginBlock = () => {

  return (
    <div className="head__profile">
      <HeaderButton type="post"/>
      <div className="head__user">
        <img className="user__img" src={userImg} title="you" />
        <p className="user__name">{userName}</p>
      </div>
      <HeaderButton type="logout"/>
    </div>
  );
};

export default LoginBlock;

import noAvatar from "../assets/images/approvers/noAvatar.jpg";
import woman from "../assets/images/approvers/woman.jpg";
import man1 from "../assets/images/approvers/man1.jpg";
import man2 from "../assets/images/approvers/man2.jpg";
import man3 from "../assets/images/approvers/man3.jpg";

interface IApprovers {
  type: string;
}

const ApproversTemplate = ({ type }: IApprovers) => {
  return (
    <>
      {type === "sick" ? (
        <ul data-assign-step={"notified users"} className="vacation__approvers">
          <li className="approvers__user">
            <img className="user__avatar" src={man1} alt="avatar"></img>
            <p className="user__name">John Smith</p>
          </li>
          <li className="approvers__user">
            <img className="user__avatar" src={man2} alt="avatar"></img>
            <p className="user__name">John Smith</p>
          </li>
          <li className="approvers__user">
            <img className="user__avatar" src={man3} alt="avatar"></img>
            <p className="user__name">John Smith</p>
          </li>
        </ul>
      ) : (
        <>
          <ul
            data-assign-step={"already approved"}
            className="vacation__approvers"
          >
            <li className="approvers__user">
              <img className="user__avatar" src={noAvatar} alt="avatar"></img>
              <div>
                <p className="user__name">John Smith</p>
                <p className="user__comment">Comments: Have a nice vacation!</p>
              </div>
            </li>
            <li className="approvers__user">
              <img className="user__avatar" src={noAvatar} alt="avatar"></img>
              <div>
                <p className="user__name">John Smith</p>
                <p className="user__comment">Comments: Have a nice vacation!</p>
              </div>
            </li>
          </ul>
          <ul
            data-assign-step={"current approver(s)"}
            className="vacation__approvers"
          >
            <li className="approvers__user">
              <img className="user__avatar" src={man1} alt="avatar"></img>
              <p className="user__name">John Smith</p>
            </li>
          </ul>
          <ul
            data-assign-step={"next approver(s)"}
            className="vacation__approvers"
          >
            <li className="approvers__user">
              <img className="user__avatar" src={man2} alt="avatar"></img>
              <p className="user__name">John Smith</p>
            </li>
            <li className="approvers__user">
              <img className="user__avatar" src={man3} alt="avatar"></img>
              <p className="user__name">John Smith</p>
            </li>
          </ul>
        </>
      )}
      <ul
        data-assign-step={"Documents registration (final step)"}
        className="vacation__approvers"
      >
        <li className="approvers__user">
          <img className="user__avatar" src={woman} alt="avatar"></img>
          <p className="user__name">Katrin Brown</p>
        </li>
      </ul>
    </>
  );
};

export default ApproversTemplate;

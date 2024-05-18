/* eslint-disable react/prop-types */

const UserAvatarImg = (props) => {
  return <>
    <div className={`userImg ${props.lg === true && "lg"}`}>
                            <span className="rounded-circle">
                              <img
                                src={props.img}
                                alt=""
                              />
                            </span>
                          </div>
  </>
}

export default UserAvatarImg
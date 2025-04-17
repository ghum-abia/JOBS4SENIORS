import { Avatar } from "@mui/material"
import { PropTypes } from 'prop-types';

export const Message = ({user, time, message, avatar}) => {
      return (
            <>
                  <div className="space-y-1">
                        <div className="flex gap-3 px-0.5">
                              <Avatar src={avatar} />
                              <div className="">
                                    <h1 className="font-bold capitalize text-sm">{user}</h1>
                                    <p className="text-xs text-grayish font extralight">{time}</p>
                              </div>
                        </div>
                        <div className="">
                              <p className="text-sm text-grayish">{message}</p>
                        </div>
                  </div>
            </>
      )
}

Message.propTypes = {
      user:PropTypes.string,
      time:PropTypes.any,
      message:PropTypes.string,
      avatar:PropTypes.any
}
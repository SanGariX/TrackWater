import { FC } from "react";
import s from "./Message.module.scss";
import { useTranslation } from "react-i18next";
type MessageType = {
  error: string | undefined,
  statusMessage: string | boolean,
  message: string | undefined,
}
const Message: FC<{ type: MessageType }> = ({ type: {error, statusMessage, message} }) => {
  const { t } = useTranslation();
  console.log(statusMessage)
  if(statusMessage === "error" && !!error){
    return (
       <div className={`${s.message} ${s.error}`}>
        {t(error)}
      </div>
    );
  }else if(statusMessage === "message" && !!message){
    return (
      <div className={`${s.message} ${s.succes} ${s.email_error}`}>
        {t(message)}
      </div>
    );
  }
};

export default Message;

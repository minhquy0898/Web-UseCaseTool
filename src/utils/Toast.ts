import { toast } from "react-toastify";
interface IError {
  Error: string;
}
interface ISuccess {
  Success: string;
}
interface IWarning {
    Warning: string;
}

export class Toast {
  static ToastError = ({ Error }: IError) => {
    return toast.error(Error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  static ToastSuccess = ({ Success }: ISuccess) => {
    return toast.success(Success, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  static ToastWarning = ({
    Warning
  }:IWarning)=>{
    return toast.warn(Warning, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
}

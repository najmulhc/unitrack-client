export type Role = "admin" | "unassigned" | "teacher" | "student";

export type IconProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
};

export type User = {
  email: string;
  role: "unassigned" | "admin" | "teacher" | "student";
  _id: string;
};

export interface FetchingError extends FetchBaseQueryError {
  data: {
    message: string;
  };
}

export interface DeleteUserProps {
  email: string;
  _id: string;
}
export interface ModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  children?: React.ReactNode;
}

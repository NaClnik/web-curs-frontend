export interface IUserResponse {
  id: number;
  email: string;
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  role_id: number;
  surname: string;
  name: string;
  patronymic: string;
  passport: string;
  salary: number;
  photo_path: string;
  deleted_at: string | null;
} // IUserResponse.

export interface ErrorResponse<Data> {
  message: string
  data?: Data
}
export interface ErrorData {
  data?: {
    message?: string | string[]
    data?: {
      message?: string | string[]
    }
  }
  message?: string
  error?: string
}
export interface SuccessResponse<Data> {
  message: string
  data: Data
}

//Cú pháp `-?` sẽ loại bỏ undefined của key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

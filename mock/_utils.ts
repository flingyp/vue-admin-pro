export const successData = (data: any) => {
  return {
    code: 200,
    data,
    msg: '操作成功'
  }
}

export const failData = (msg: string) => {
  return {
    code: 500,
    data: null,
    msg
  }
}

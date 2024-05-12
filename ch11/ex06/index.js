// TODO:NGが4件残っている
export function isEmailAddress(str) {
  const regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9!#$%&'*+/=?^_`{|}~-]{1,}\.)+[^.]{2,}$/;
  return regex.test(str);
}

export default function verificationTelehone(tel) {
  if (/^8/.test(tel)) {
    tel = tel.replace(/^8/g, '+7');
  }

  if (/[\s-()]/.test(tel)) {
    tel = tel.replace(/[\s\-()]/g, '');
  }
  return tel;
}

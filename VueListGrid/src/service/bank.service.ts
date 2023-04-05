import jsonData from '../assets/data.json';

class BankService {
getBankNames() {
  jsonData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return jsonData;
  }
}
export default new BankService();